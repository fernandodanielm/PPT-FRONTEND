// frontend/src/components/short-id.ts
import { state, stateFunctions } from "../../state";
import { rtdb } from "../../utils/rtdb";
import { ref, onValue } from "firebase/database";
import { router } from "../../router";
import backgroundImage from "../../assets/piedrapapelotijera.jpg"; // Asegúrate de que la ruta sea correcta

export class ShortIdPage extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        stateFunctions.listenRoom();
        this.unsubscribe = stateFunctions.subscribe(() => this.render());
    }

    disconnectedCallback() {
        this.unsubscribe?.();
    }

    unsubscribe: (() => void) | undefined;

    render() {
        const currentState = stateFunctions.getState();
        const player1Name = currentState.player1Name || 'Esperando Jugador 1';
        const player2Name = currentState.player2Name || 'Esperando Jugador 2';
        const currentRoomId = currentState.roomId;

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
                    height: 100vh;
                    font-family: sans-serif;
                    color: #333;
                }
                .players-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .players {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    text-align: center;
                }
                .player-names {
                    font-size: 18px;
                    text-align: center;
                }
                .room-info {
                    font-size: 16px;
                    margin-bottom: 20px;
                    text-align: center;
                }
                .instructions-button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .instructions-button:hover {
                    background-color: #3e8e41;
                }
                .play-button {
                    padding: 15px 30px;
                    font-size: 20px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                }
                .play-button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="container">
                <div class="players-container">
                    <div class="players">
                        ${player1Name} vs ${player2Name}
                    </div>
                    <div class="player-names">
                        ${currentState.player1Name || " "} <br> ${currentState.player2Name || " "}
                    </div>
                </div>
                <div class="room-info">
                    Room ID: ${currentRoomId}
                </div>
                <button id="instructions-button" class="instructions-button">
                    Instrucciones
                </button>
                ${currentState.player1Name && currentState.player2Name ? `
                    <button id="play-button" class="play-button">
                        Jugar
                    </button>
                ` : ''}
            </div>
        `;
        this.addListeners();
    }

    addListeners() {
        const instructionsButton = this.shadow.getElementById('instructions-button');
        if (instructionsButton) {
            instructionsButton.addEventListener('click', () => {
                router.goTo('/instructions');
            });
        }

        const playButton = this.shadow.getElementById('play-button');
        if (playButton) {
            playButton.addEventListener('click', () => {
                router.goTo('/play');
            });
        }
    }
}

customElements.define('short-id-page', ShortIdPage);

// Exporta la clase ShortIdPage
