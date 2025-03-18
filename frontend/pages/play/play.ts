import { state, stateFunctions } from "../../state";
import piedraImage from "../../assets/piedra.png";
import tijeraImage from "../../assets/tijera.png";
import papelImage from "../../assets/papel.png";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { getDatabase, ref, onValue } from "firebase/database";
import { router } from "../../router"; // Importa el router si aún no lo has hecho

type Play = "piedra" | "papel" | "tijera";

export class PlayPage extends HTMLElement {
    shadow: ShadowRoot | null;
    roomId: string | null = null;
    playerNumber: 1 | 2 | undefined; // Ahora puede ser undefined inicialmente
    unsubscribe: (() => void) | null = null;
    myMove: Play | null = null;
    opponentMove: Play | null = null;
    timerInterval: NodeJS.Timeout | number | null = null;
    timeLeft: number = 7;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.setPlayerNumber(); // Determinar el número de jugador al conectar
        this.render();
        this.subscribeToState();
        this.startTimer();
    }

    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
        this.stopTimer();
    }

    setPlayerNumber() {
        const currentState = stateFunctions.getState();
        this.playerNumber = currentState.playerNumber;
        this.roomId = currentState.roomId;
        console.log("PlayPage - Player Number:", this.playerNumber, "Room ID:", this.roomId);
        if (!this.playerNumber || !this.roomId) {
            // Si no se ha establecido el número de jugador o el ID de la sala,
            // podrías redirigir al usuario o mostrar un mensaje de error.
            console.error("PlayPage - Player number o Room ID no definidos.");
            // router.goTo("/"); // Ejemplo de redirección
        }
    }

    subscribeToState() {
        this.unsubscribe = stateFunctions.subscribe(() => {
            console.log("PlayPage - El estado ha cambiado, actualizando UI...");
            this.updateUI();
        });
    }

    startTimer() {
        this.timeLeft = 7;
        const timerElement = this.shadow?.querySelector("#timer") as HTMLElement;
        const timerContainer = this.shadow?.querySelector(".timer") as HTMLElement;
        if (timerContainer) {
            timerContainer.style.animation = `countdown ${this.timeLeft}s linear forwards`;
        }

        this.stopTimer(); // Asegurarse de que no haya un timer previo corriendo

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            if (timerElement) {
                timerElement.textContent = this.timeLeft.toString();
            }
            if (this.timeLeft === 0) {
                this.stopTimer();
                const moves = this.shadow?.querySelector(".moves") as HTMLElement | null;
                this.checkAndHideMoves(moves);
                this.sendAutomaticMove(); // Enviar un movimiento automático si el tiempo se agota
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        const timerContainer = this.shadow?.querySelector(".timer") as HTMLElement;
        if (timerContainer) {
            timerContainer.style.animation = ''; // Resetear la animación
        }
    }

    async sendAutomaticMove() {
        const moves = ["piedra", "papel", "tijera"] as Play[];
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        console.log("PlayPage - Tiempo agotado, enviando movimiento automático:", randomMove);
        if (this.roomId && this.playerNumber) {
            await stateFunctions.setMove(randomMove);
            this.myMove = randomMove;
            this.updateUI();
            const movesContainer = this.shadow?.querySelector(".moves") as HTMLElement | null;
            this.checkAndHideMoves(movesContainer);
        }
    }

    render() {
        const shadowRoot = this.shadow;
        if (shadowRoot) {
            shadowRoot.innerHTML = `
                <div class="play-container">
                    <h1>Elige tu jugada</h1>
                    <div class="timer">
                        <span id="timer">${this.timeLeft}</span>
                    </div>
                    <div class="moves">
                        <button id="piedra"><img src="${piedraImage}" alt="piedra"/></button>
                        <button id="papel"><img src="${papelImage}" alt ="papel"/></button>
                        <button id="tijera"><img src="${tijeraImage}" alt="Tijera"/></button>
                    </div>
                    <div>
                        <p>Tu jugada: <span id="tu-jugada"></span></p>
                        <p>Jugada del oponente: <span id="jugada-oponente"></span></p>
                        <p>Resultado: <span id="resultado"></span></p>
                    </div>
                    <button id="goToResultButton">Ir a Resultado</button>
                </div>
            `;

            const moves = shadowRoot.querySelector(".moves") as HTMLElement | null;
            const goToResultButton = shadowRoot.getElementById("goToResultButton") as HTMLButtonElement;

            moves?.addEventListener("click", async (e) => {
                const target = (e.target as HTMLElement).closest("button") as HTMLButtonElement;
                if (target && this.roomId && this.playerNumber && !this.myMove) {
                    const buttons = shadowRoot.querySelectorAll(".moves button");
                    buttons.forEach((button) => {
                        const img = button.querySelector("img");
                        if (button === target) {
                            img?.classList.add("selected");
                        } else {
                            img?.classList.add("unselected");
                        }
                    });

                    this.myMove = target.id as Play;
                    this.stopTimer();
                    await stateFunctions.setMove(this.myMove);
                    this.updateUI();
                    this.checkAndHideMoves(moves);
                }
            });

            if (goToResultButton) {
                goToResultButton.addEventListener("click", () => {
                    this.redirectToResultPage();
                });
            }

            const style = document.createElement("style");
            style.textContent = `
                .play-container {
                    background-image: url(${backgroundImage});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                }

                h1 {
                    font-size: 36px;
                    margin-bottom: 30px;
                    color: #333;
                }

                .timer {
                    font-size: 48px;
                    margin-bottom: 30px;
                    color: #333;
                    position: relative;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 5px solid #333;
                }

                .timer::before {
                    content: "";
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    border-radius: 50%;
                    border: 5px solid transparent;
                    border-top-color: #333;
                    animation: spin 3s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes countdown {
                    0% { stroke-dasharray: 283; stroke-dashoffset: 0; }
                    100% { stroke-dasharray: 283; stroke-dashoffset: 283; }
                }

                .moves {
                    display: flex;
                    justify-content: center;
                }

                .moves button {
                    background: none;
                    border: none;
                    padding: 10px;
                    margin: 0 10px;
                    cursor: pointer;
                }

                .moves img {
                    width: 100px;
                    height: 100px;
                    transition: transform 0.3s ease;
                }

                .moves img.selected {
                    transform: scale(1.2);
                }

                .moves img.unselected {
                    opacity: 0.5;
                }

                @media (min-width: 768px) {
                    h1 { font-size: 48px; }
                    .moves img { width: 150px; height: 150px; }
                }

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
            `;
            shadowRoot.appendChild(style);
        }
    }

    async updateUI() {
        const currentState = stateFunctions.getState();
        const currentGameData = currentState.currentGame?.data;
        const tuJugadaElement = this.shadow?.querySelector("#tu-jugada");
        const jugadaOponenteElement = this.shadow?.querySelector("#jugada-oponente");
        const resultadoElement = this.shadow?.querySelector("#resultado");

        if (currentGameData) {
            const player1Move = currentGameData.player1Play;
            const player2Move = currentGameData.player2Play;

            if (this.playerNumber === 1) {
                if (tuJugadaElement) tuJugadaElement.textContent = this.myMove || player1Move || '';
                if (jugadaOponenteElement) jugadaOponenteElement.textContent = player2Move || '';
            } else if (this.playerNumber === 2) {
                if (tuJugadaElement) tuJugadaElement.textContent = this.myMove || player2Move || '';
                if (jugadaOponenteElement) jugadaOponenteElement.textContent = player1Move || '';
            }

            if (currentGameData.gameOver) {
                this.stopTimer();
                const result = currentGameData.result;
                if (resultadoElement) {
                    if (result === 0) {
                        resultadoElement.textContent = "Empate";
                    } else if (this.playerNumber === result) {
                        resultadoElement.textContent = "Ganaste";
                    } else {
                        resultadoElement.textContent = "Perdiste";
                    }
                }
                const moves = this.shadow?.querySelector(".moves") as HTMLElement | null;
                this.checkAndHideMoves(moves);
            }
        }
    }

    determineWinner(player1Move: Play, player2Move: Play): 1 | 2 | 0 {
        if (player1Move === player2Move) {
            return 0; // Empate
        } else if (
            (player1Move === "piedra" && player2Move === "tijera") ||
            (player1Move === "papel" && player2Move === "piedra") ||
            (player1Move === "tijera" && player2Move === "papel")
        ) {
            return 1; // Jugador 1 gana
        } else {
            return 2; // Jugador 2 gana
        }
    }

    checkAndHideMoves(moves: HTMLElement | null) {
        if (moves) {
            moves.style.display = "none";
        }
    }

    redirectToResultPage() {
        const currentState = stateFunctions.getState();
        if (currentState.currentGame && currentState.currentGame.data && currentState.currentGame.data.gameOver) {
            router.goTo("/result");
        } else {
            alert("El juego aún no ha terminado.");
        }
    }
}

customElements.define("play-page", PlayPage);