// frontend/src/components/resultpage.ts
import { state, stateFunctions } from "../../state";
import { router } from "../../router";
import backgroundImage from "../../assets/piedrapapelotijera.jpg"; // Asegúrate de que la ruta sea correcta

export class ResultPage extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.unsubscribe = stateFunctions.subscribe(() => this.render());
    }

    disconnectedCallback() {
        this.unsubscribe?.();
    }

    unsubscribe: (() => void) | undefined;

    render() {
        const game = state.currentGame;
        const player1Name = state.player1Name;
        const player2Name = state.player2Name;
        const player1Id = state.player1Id;
        const player2Id = state.player2Id;
        const player1Play = game?.data.player1Play;
        const player2Play = game?.data.player2Play;
        const result = game?.data.result;
        const statistics = game?.statistics;

        let resultText = '';
        if (result === 'ownerWins') {
            resultText = `${player1Name} gana!`;
        } else if (result === 'guestWins') {
            resultText = `${player2Name} gana!`;
        } else if (result === 'draw') {
            resultText = 'Empate!';
        }

        this.shadow.innerHTML = `
            <style>
                .container {
                    background-image: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    font-family: sans-serif;
                    color: #333;
                }
                .result-container {
                    background-color: rgba(255, 255, 255, 0.8);
                    padding: 30px;
                    border-radius: 10px;
                    text-align: center;
                }
                h2 {
                    font-size: 2.5em;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 1.2em;
                    margin-bottom: 10px;
                }
                .player-info {
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    padding: 15px;
                    border-radius: 5px;
                    text-align: left;
                    background-color: white;
                }
                .statistics-info {
                    margin-top: 20px;
                    border: 1px solid #ccc;
                    padding: 15px;
                    border-radius: 5px;
                    text-align: center;
                    background-color: rgba(255, 255, 255, 0.9);
                }
                .play-again-button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                }
                .play-again-button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="container">
                <div class="result-container">
                    <h2>Resultado</h2>
                    ${resultText ? `<p>${resultText}</p>` : '<p>Esperando resultado...</p>'}

                    <div class="player-info">
                        <h3>Jugador 1:</h3>
                        <p>Nombre: ${player1Name || "Desconocido"}</p>
                        <p>ID: ${player1Id || "No ID"}</p>
                        ${player1Play ? `<p>Movimiento: ${player1Play}</p>` : '<p>Movimiento: No jugó</p>'}
                    </div>

                    <div class="player-info">
                        <h3>Jugador 2:</h3>
                        <p>Nombre: ${player2Name || "Desconocido"}</p>
                        <p>ID: ${player2Id || "No ID"}</p>
                        ${player2Play ? `<p>Movimiento: ${player2Play}</p>` : '<p>Movimiento: No jugó</p>'}
                    </div>

                    ${statistics ? `
                        <div class="statistics-info">
                            <h3>Estadísticas:</h3>
                            <p>${player1Name || "Jugador 1"}: Victorias ${statistics.player1?.wins || 0}, Derrotas ${statistics.player1?.losses || 0}, Empates ${statistics.player1?.draws || 0}</p>
                            <p>${player2Name || "Jugador 2"}: Victorias ${statistics.player2?.wins || 0}, Derrotas ${statistics.player2?.losses || 0}, Empates ${statistics.player2?.draws || 0}</p>
                        </div>
                    ` : '<p>Cargando estadísticas...</p>'}

                    <button id="playAgainButton" class="play-again-button">Volver a jugar</button>
                </div>
            </div>
        `;
        this.addListeners();
    }

    addListeners() {
        const playAgainButton = this.shadow.getElementById('playAgainButton');
        if (playAgainButton) {
            playAgainButton.addEventListener('click', () => {
                stateFunctions.resetGame(state.roomId);
                router.goTo('/play');
            });
        }
    }
}

customElements.define('result-page', ResultPage);