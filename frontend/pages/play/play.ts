// PlayPage.ts
import { state, stateFunctions } from "../../state";
import piedraImage from "../../assets/piedra.png";
import tijeraImage from "../../assets/tijera.png";
import papelImage from "../../assets/papel.png";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";

type Play = "piedra" | "papel" | "tijera";

export class PlayPage extends HTMLElement {
    shadow: ShadowRoot | null;
    roomId: string | null = null;
    playerNumber: 1 | 2 = 1;
    unsubscribe: (() => void) | null = null;
    myMove: Play | null = null;
    opponentMove: Play | null = null;
    timerInterval: NodeJS.Timeout | number | null = null;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    // instructionsPage.ts y playPage.ts
    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    render() {
        const shadowRoot = this.shadow;
        if (shadowRoot) {
            shadowRoot.innerHTML = `
                <div class="play-container">
                    <h1>Elige tu jugada</h1>
                    <div class="timer">
                        <span id="timer">7</span>
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
                    <button id="goToResultButton" style="display: none;">Ir a Resultado</button>
                </div>
            `;

            const moves = shadowRoot.querySelector(".moves") as HTMLElement | null;
            const timerElement = shadowRoot.querySelector("#timer") as HTMLElement;
            const timerContainer = shadowRoot.querySelector(".timer") as HTMLElement;
            const goToResultButton = shadowRoot.getElementById("goToResultButton") as HTMLButtonElement; // Obtener el botón aquí

            let timeLeft = 7;
            timerContainer.style.animation = `countdown ${timeLeft}s linear forwards`;

            this.timerInterval = setInterval(() => {
                timeLeft--;
                if (timerElement) {
                    timerElement.textContent = timeLeft.toString();
                }
                if (timeLeft === 0) {
                    clearInterval(this.timerInterval!);
                    this.checkAndHideMoves(moves);
                }
            }, 1000);

            moves?.addEventListener("click", async (e) => {
                const target = (e.target as HTMLElement).closest("button") as HTMLButtonElement;
                if (target) {
                    const buttons = shadowRoot.querySelectorAll(".moves button");
                    buttons.forEach((button) => {
                        const img = button.querySelector("img");
                        if (button === target) {
                            img?.classList.add("selected");
                        } else {
                            img?.classList.add("unselected");
                        }
                    });

                    const myMove = target.id as Play;
                    if (this.roomId) {
                        await stateFunctions.setMove(myMove);
                        this.updateUI();
                        this.checkAndHideMoves(moves);
                    }
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

    updateUI() {
        const currentState = stateFunctions.getState();

        // Mostrar nombres de los jugadores
        if (currentState.player1Name) {
            const player1NameElement = this.shadow?.querySelector("#player1-name");
            if (player1NameElement) {
                player1NameElement.textContent = currentState.player1Name;
            }
        }

        if (currentState.player2Name) {
            const player2NameElement = this.shadow?.querySelector("#player2-name");
            if (player2NameElement) {
                player2NameElement.textContent = currentState.player2Name;
            }
        } else {
            const player2NameElement = this.shadow?.querySelector("#player2-name");
            if (player2NameElement) {
                player2NameElement.textContent = "Esperando Jugador 2...";
            }
        }

        // Mostrar jugadas de los jugadores
        const tuJugadaElement = this.shadow?.querySelector("#tu-jugada");
        const jugadaOponenteElement = this.shadow?.querySelector("#jugada-oponente");
        const resultadoElement = this.shadow?.querySelector("#resultado");

        if (currentState.currentGame) {
            const player1Move = currentState.currentGame.data.player1Move;
            const player2Move = currentState.currentGame.data.player2Move;

            if (this.playerNumber === 1) {
                if (tuJugadaElement) tuJugadaElement.textContent = player1Move ? player1Move : "Esperando...";
                if (jugadaOponenteElement) jugadaOponenteElement.textContent = player2Move ? player2Move : "Esperando...";
            } else {
                if (tuJugadaElement) tuJugadaElement.textContent = player2Move ? player2Move : "Esperando...";
                if (jugadaOponenteElement) jugadaOponenteElement.textContent = player1Move ? player1Move : "Esperando...";
            }

            // Mostrar resultado del juego
            if (resultadoElement && player1Move && player2Move) {
                const winner = currentState.currentGame.statistics;
                if (winner) {
                    if (winner.player1.wins > winner.player2.wins) {
                        resultadoElement.textContent = this.playerNumber === 1 ? "Ganaste!" : "Perdiste!";
                    } else if (winner.player2.wins > winner.player1.wins) {
                        resultadoElement.textContent = this.playerNumber === 2 ? "Ganaste!" : "Perdiste!";
                    } else {
                        resultadoElement.textContent = "Empate";
                    }
                }
            } else if (resultadoElement) {
                resultadoElement.textContent = "Jugando...";
            }
        }
    }
    checkAndHideMoves(moves: HTMLElement | null) {
        const currentGame = stateFunctions.getState().currentGame;
        if (currentGame) {
            const player1Move = currentGame.data.player1Move;
            const player2Move = currentGame.data.player2Move;

            if (moves) {
                if (player1Move && player2Move) {
                    moves.style.display = "none";
                    this.animateMoves(this.playerNumber === 1 ? player1Move : player2Move);
                    this.showGoToResultButton(); // Mostrar el botón "Ir a Resultado"
                }
            }
        }
    }

    animateMoves(myMove: Play) {
        const currentGame = stateFunctions.getState().currentGame;
        if (currentGame) {
            const opponentMove = this.playerNumber === 1 ? currentGame.data.player2Move : currentGame.data.player1Move;

            if (opponentMove) {
                const myMoveImg = this.shadow?.querySelector(`#${myMove} img`) as HTMLImageElement;
                const opponentMoveImg = this.shadow?.querySelector(`#${opponentMove} img`) as HTMLImageElement;

                if (myMoveImg && opponentMoveImg) {
                    myMoveImg.style.position = "absolute";
                    opponentMoveImg.style.position = "absolute";

                    const myMoveRect = myMoveImg.getBoundingClientRect();
                    const opponentMoveRect = opponentMoveImg.getBoundingClientRect();

                    myMoveImg.style.left = `${myMoveRect.left}px`;
                    myMoveImg.style.top = `${myMoveRect.top}px`;
                    opponentMoveImg.style.left = `${opponentMoveRect.left}px`;
                    opponentMoveImg.style.top = `${opponentMoveRect.top}px`;

                    const containerRect = this.shadow?.querySelector(".play-container")?.getBoundingClientRect();

                    if (containerRect) {
                        const containerCenterX = containerRect.left + containerRect.width / 2;
                        const containerCenterY = containerRect.top + containerRect.height / 2;

                        myMoveImg.style.transition = "transform 0.5s ease-in-out";
                        opponentMoveImg.style.transition = "transform 0.5s ease-in-out";

                        requestAnimationFrame(() => {
                            myMoveImg.style.transform = `translate(${containerCenterX - myMoveRect.left - myMoveRect.width / 2}px, ${containerCenterY - myMoveRect.top - myMoveRect.height / 2}px)`;
                            opponentMoveImg.style.transform = `translate(${containerCenterX - opponentMoveRect.left - opponentMoveRect.width / 2}px, ${containerCenterY - opponentMoveRect.top - opponentMoveRect.height / 2}px)`;
                        });

                        setTimeout(() => {
                            myMoveImg.style.transition = "none";
                            opponentMoveImg.style.transition = "none";
                            myMoveImg.style.position = "static";
                            opponentMoveImg.style.position = "static";
                            myMoveImg.style.transform = "none";
                            opponentMoveImg.style.transform = "none";
                        }, 500);
                    }
                }
            }
        }
    }
    redirectToResultPage() {
        (window as any).goTo("/result");
    }

    showGoToResultButton() {
        const goToResultButton = this.shadow?.getElementById("goToResultButton") as HTMLButtonElement;
        if (goToResultButton) {
            goToResultButton.style.display = "block";
        }
    }
    
}

customElements.define("play-page", PlayPage);