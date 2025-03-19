import { state, stateFunctions, Jugada } from "../../state";
import { router } from "../../router";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import piedraImg from "../../assets/piedra.png";
import papelImg from "../../assets/papel.png";
import tijeraImg from "../../assets/tijera.png";

const API_BASE_URL = "https://ppt-backend-1.onrender.com";

export class PlayPage extends HTMLElement {
    shadow: ShadowRoot;
    myMove: Jugada | null = null;
    unsubscribe: (() => void) | undefined;
    areButtonsDisabled: boolean = false;

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

    render() {
        const currentState = stateFunctions.getState();
        const currentGame = currentState.currentGame;
        const playerNumber = currentState.playerNumber;
        let opponentMove: Jugada | null = null;

        console.log("Renderizando PlayPage. PlayerNumber:", playerNumber);
        console.log("CurrentGame Data:", currentGame?.data);

        if (!currentGame?.data) {
            return `<div class="container"><h2>Cargando juego...</h2></div>`;
        }

        if (currentGame.data) {
            if (playerNumber === 1) {
                opponentMove = currentGame.data.player2Move;
            } else if (playerNumber === 2) {
                opponentMove = currentGame.data.player1Move;
            }
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
                    padding: 20px;
                    box-sizing: border-box;
                    font-family: sans-serif;
                    color: #333;
                    text-align: center;
                }

                .title {
                    font-size: 2.5em;
                    margin-bottom: 20px;
                }

                .buttons-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                }

                .move-button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 10px 20px;
                    margin: 0 10px;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .move-button img {
                    width: 50px;
                    height: 50px;
                    margin-bottom: 5px;
                }

                .move-button:hover {
                    background-color: #0056b3;
                }

                .move-button:disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }

                .my-move, .opponent-move {
                    font-size: 1.2em;
                    margin-bottom: 10px;
                }

                #resultButton {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #28a745;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                #resultButton:disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }
            </style>
            <div class="container">
                <h2 class="title">Elige tu jugada</h2>
                <div class="buttons-container">
                    <button class="move-button ${this.areButtonsDisabled ? 'disabled' : ''}" id="piedra" ${this.areButtonsDisabled ? 'disabled' : ''}>
                        <img src="${piedraImg}" alt="Piedra">
                    </button>
                    <button class="move-button ${this.areButtonsDisabled ? 'disabled' : ''}" id="papel" ${this.areButtonsDisabled ? 'disabled' : ''}>
                        <img src="${papelImg}" alt="Papel">
                    </button>
                    <button class="move-button ${this.areButtonsDisabled ? 'disabled' : ''}" id="tijera" ${this.areButtonsDisabled ? 'disabled' : ''}>
                        <img src="${tijeraImg}" alt="Tijera">
                    </button>
                </div>
                ${this.myMove ? `<p class="my-move">Tu jugada: ${this.myMove}</p>` : ''}
                ${opponentMove ? `<p class="opponent-move">Jugada del oponente: ${opponentMove}</p>` : '<p class="opponent-move">Esperando jugada del oponente...</p>'}
                <button id="resultButton" ${currentGame?.data.gameOver ? '' : 'disabled'}>Ver Resultado</button>
            </div>
        `;
        this.addListeners();
    }

    addListeners() {
        this.shadow.querySelectorAll('.move-button').forEach(button => {
            button.addEventListener('click', async (e) => {
                if (!this.areButtonsDisabled) {
                    const target = e.target as HTMLButtonElement;
                    const move = target.id as Jugada;
                    this.myMove = move;
                    this.areButtonsDisabled = true;

                    console.log("Enviando jugada:", move, "PlayerNumber:", state.playerNumber);

                    try {
                        const response = await fetch(`${API_BASE_URL}/api/rooms/${state.roomId}/move`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                playerNumber: state.playerNumber,
                                move: move,
                            }),
                        });

                        if (!response.ok) {
                            const errorData = await response.json();
                            console.error("Error al enviar la jugada:", errorData);
                            alert(`Error al enviar la jugada: ${errorData.message || 'Inténtalo de nuevo.'}`);
                            this.areButtonsDisabled = false;
                            this.myMove = null;
                            this.render();
                            return;
                        }

                        stateFunctions.setMove(move);
                        console.log("Jugada enviada con éxito.");
                    } catch (error) {
                        console.error("Error en la solicitud para enviar la jugada:", error);
                        alert("Ocurrió un error al enviar la jugada. Inténtalo de nuevo.");
                        this.areButtonsDisabled = false;
                        this.myMove = null;
                        this.render();
                    }
                }
            });
        });

        const resultButton = this.shadow.getElementById('resultButton');
        if (resultButton) {
            resultButton.addEventListener('click', () => {
                if (state.currentGame?.data.gameOver) {
                    console.log("Navegando a la página de resultados.");
                    router.goTo('/result');
                } else {
                    alert('Espera a que ambos jugadores hagan su movimiento.');
                }
            });
        }
    }
}

customElements.define('play-page', PlayPage);