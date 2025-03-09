import { state } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";

export class ResultPage extends HTMLElement {
    shadow: ShadowRoot | null;
    roomId: string | null = null;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    setRoomId(roomId: string) {
        this.roomId = roomId;
    }

    async connectedCallback() {
        if (!this.roomId) {
            const currentState = state.getState();
            this.roomId = currentState.currentGame.shortId;
        }

        if (!this.roomId) {
            (window as any).goTo("/");
            return;
        }

        const gameResult = await this.getGameResult();
        this.render(gameResult);
    }

    async getGameResult() {
        try {
            const response = await fetch(`https://ppt-backend-three.vercel.app/api/rooms/${this.roomId}`);
            if (!response.ok) {
                throw new Error(`Error al obtener los resultados del juego: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al obtener los resultados del juego:", error);
            alert("Hubo un error al obtener los resultados del juego. Inténtalo de nuevo.");
            return null;
        }
    }

    render(gameResult: any) {
        const shadowRoot = this.shadow;
        if (!gameResult) {
            return;
        }

        const { player1Name, player2Name, player1Play, player2Play, statistics } = gameResult;

        let message = "Es un empate.";
        let starColor = "yellow";

        if (player1Play === player2Play) {
            message = "Es un empate.";
            starColor = "yellow";
        } else if (
            (player1Play === "piedra" && player2Play === "tijera") ||
            (player1Play === "tijera" && player2Play === "papel") ||
            (player1Play === "papel" && player2Play === "piedra")
        ) {
            message = "¡Ganaste!";
            starColor = "green";
        } else {
            message = "Perdiste.";
            starColor = "red";
        }

        if (shadowRoot) {
            shadowRoot.innerHTML = `
                <div class="result-container">
                    <div class="star"></div>
                    <h1>${message}</h1>
                    <h2>Resultados</h2>
                    <p>${player1Name} jugó: ${player1Play}</p>
                    <p>${player2Name} jugó: ${player2Play}</p>
                    <p>Victorias de ${player1Name}: ${statistics[player1Name].wins}</p>
                    <p>Derrotas de ${player1Name}: ${statistics[player1Name].losses}</p>
                    <p>Empates de ${player1Name}: ${statistics[player1Name].draws}</p>
                    <p>Victorias de ${player2Name}: ${statistics[player2Name].wins}</p>
                    <p>Derrotas de ${player2Name}: ${statistics[player2Name].losses}</p>
                    <p>Empates de ${player2Name}: ${statistics[player2Name].draws}</p>
                    <button class="button" id="play-again-button">Volver a jugar</button>
                </div>
            `;

            const playAgainButton = shadowRoot.querySelector("#play-again-button");
            if (playAgainButton) {
                playAgainButton.addEventListener("click", () => {
                    state.resetGame();
                    (window as any).goTo("/play");
                });
            }

            const style = document.createElement("style");
            style.textContent = `
                @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

                .result-container {
                    background-image: url(${backgroundImage});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                    font-family: 'Odibee Sans', cursive;
                }

                h1 {
                    font-size: 48px;
                    margin-bottom: 20px;
                    color: #333;
                }

                h2 {
                    font-size: 36px;
                    margin-bottom: 30px;
                    color: #333;
                }

                p {
                    font-size: 24px;
                    margin-bottom: 10px;
                    color: #333;
                }

                .button {
                    width: 322px;
                    height: 87px;
                    border: none;
                    background-color: #2979FF;
                    color: white;
                    font-size: 24px;
                    margin-top: 20px;
                    border-radius: 6px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: bold;
                    border: 15px solid #1976D2;
                    font-family: 'Odibee Sans', cursive;
                }

                .button:hover {
                    background-color: #0056b3;
                }

                @media (min-width: 768px) {
                    .result-container {
                        padding: 40px;
                    }

                    h1 {
                        font-size: 64px;
                    }

                    h2 {
                        font-size: 48px;
                    }

                    p {
                        font-size: 32px;
                    }

                    .button {
                        width: 400px;
                        height: 100px;
                        font-size: 32px;
                    }
                }
            `;
            shadowRoot.appendChild(style);
        }
    }
}

customElements.define("result-page", ResultPage);