import { stateFunctions } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg"; // Importa la imagen de fondo

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

        const player1Move = currentGame.data.player1Move;
        const player2Move = currentGame.data.player2Move;
        const player1Name = currentGame.data.player1Name;
        const player2Name = currentGame.data.player2Name;

        let resultMessage = "";

        if (player1Move && player2Move && currentGame.statistics) {
            // Ambos movimientos están disponibles y hay estadísticas, podemos mostrar el resultado
            const statistics = currentGame.statistics;

            if (statistics.player1.wins > statistics.player2.wins) {
                resultMessage = `${player1Name} gana!`;
            } else if (statistics.player2.wins > statistics.player1.wins) {
                resultMessage = `${player2Name} gana!`;
            } else {
                resultMessage = "¡Empate!";
            }
        } else {
            // Uno o ambos movimientos son null, o no hay estadísticas
            resultMessage = "Esperando movimientos...";
        }

        this.innerHTML = `
            <div class="result-container">
                <h1>Resultado</h1>
                <p>${player1Name}: ${player1Move || "Esperando..."}</p>
                <p>${player2Name}: ${player2Move || "Esperando..."}</p>
                <h2>${resultMessage}</h2>
                ${currentGame.statistics ? `
                    <p>Estadísticas:</p>
                    <p>${player1Name}: Victorias ${currentGame.statistics.player1.wins}, Derrotas ${currentGame.statistics.player1.losses}, Empates ${currentGame.statistics.player1.draws}</p>
                    <p>${player2Name}: Victorias ${currentGame.statistics.player2.wins}, Derrotas ${currentGame.statistics.player2.losses}, Empates ${currentGame.statistics.player2.draws}</p>
                ` : ''}
                <button class="restart-button">Volver a jugar</button>
            </div>
        `;

        const restartButton = this.querySelector(".restart-button");
        if (restartButton) {
            restartButton.addEventListener("click", () => {
                // Aquí debes implementar la lógica para reiniciar el juego en el backend
                // y luego redirigir a /play
                (window as any).goTo("/play");
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

            .restart-button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
            }
        `;
        this.appendChild(style);
    }
}

customElements.define("result-page", ResultPage);