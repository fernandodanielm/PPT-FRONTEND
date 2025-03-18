import { state, stateFunctions } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg"; // Importa la imagen de fondo
import { router } from "../../router"; // Importa el router

export class ResultPage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const currentState = stateFunctions.getState();
        const currentGame = currentState.currentGame;

        if (!currentGame || !currentGame.data) {
            this.innerHTML = `
                <div class="result-container">
                    <h1>Error: No se encontró la información del juego.</h1>
                </div>
            `;
            return;
        }

        const player1Move = currentGame.data.player1Play;
        const player2Move = currentGame.data.player2Play;
        const player1Name = currentState.player1Name;
        const player2Name = currentState.player2Name;
        const player1Id = currentState.player1Id;
        const player2Id = currentState.player2Id;
        const result = currentGame.data.result;

        let resultMessage = "";

        if (player1Move && player2Move && result !== undefined) {
            if (result === 0) {
                resultMessage = "¡Empate!";
            } else if (result === 1) {
                resultMessage = `${player1Name} gana!`;
            } else if (result === 2) {
                resultMessage = `${player2Name} gana!`;
            }
        } else {
            resultMessage = "Esperando resultado...";
        }

        this.innerHTML = `
            <div class="result-container">
                <h1>Resultado</h1>
                <div class="player-info">
                    <p>Jugador 1:</p>
                    <p>Nombre: ${player1Name || "Desconocido"}</p>
                    <p>ID: ${player1Id || "No ID"}</p>
                    <p>Movimiento: ${player1Move || "No jugó"}</p>
                </div>
                <div class="player-info">
                    <p>Jugador 2:</p>
                    <p>Nombre: ${player2Name || "Desconocido"}</p>
                    <p>ID: ${player2Id || "No ID"}</p>
                    <p>Movimiento: ${player2Move || "No jugó"}</p>
                </div>
                <h2>${resultMessage}</h2>
                ${currentGame.statistics ? `
                    <div class="statistics">
                        <h3>Estadísticas:</h3>
                        <p>${player1Name}: Victorias ${currentGame.statistics.player1.wins}, Derrotas ${currentGame.statistics.player1.losses}, Empates ${currentGame.statistics.player1.draws}</p>
                        <p>${player2Name}: Victorias ${currentGame.statistics.player2.wins}, Derrotas ${currentGame.statistics.player2.losses}, Empates ${currentGame.statistics.player2.draws}</p>
                    </div>
                ` : ''}
                <button class="restart-button">Volver a jugar</button>
            </div>
        `;

        const restartButton = this.querySelector(".restart-button");
        if (restartButton) {
            restartButton.addEventListener("click", async () => {
                if (currentState.roomId) {
                    // Llama a una función en stateFunctions para resetear el juego en el backend
                    await stateFunctions.resetGame(currentState.roomId);
                    router.goTo("/play");
                } else {
                    alert("Error: No se encontró el ID de la sala para reiniciar.");
                    router.goTo("/"); // O redirige a otra página apropiada
                }
            });
        }

        // Agregar estilos con la imagen de fondo
        const style = document.createElement("style");
        style.textContent = `
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
                color: white; /* Ajusta el color del texto para que sea legible sobre la imagen */
            }

            .player-info {
                margin-bottom: 15px;
                padding: 15px;
                border-radius: 8px;
                background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para mejor legibilidad */
            }

            .player-info p {
                margin: 5px 0;
            }

            h1, h2, h3 {
                margin-bottom: 20px;
            }

            .statistics {
                margin-top: 20px;
                padding: 15px;
                border-radius: 8px;
                background-color: rgba(0, 0, 0, 0.5);
            }

            .restart-button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                margin-top: 20px;
            }

            .restart-button:hover {
                background-color: #0056b3;
            }
        `;
        this.appendChild(style);
    }
}

customElements.define("result-page", ResultPage);