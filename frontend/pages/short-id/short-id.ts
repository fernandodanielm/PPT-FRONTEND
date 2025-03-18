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
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: sans-serif;
                }

                .room-container {
                    width: 322px;
                    height: auto;
                    background-color: white; /* Fondo blanco para el contenido */
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .title-container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 20px;
                }

                h1 {
                    color: #009048;
                    margin: 0;
                    font-size: 3em;
                    text-align: center;
                }

                .room-info {
                    font-size: 1.5em;
                    color: #333;
                    margin-bottom: 15px;
                    text-align: center;
                }

                .players-info {
                    font-size: 1.2em;
                    color: #555;
                    margin-bottom: 10px;
                    text-align: center;
                }

                .instructions-button, .play-button {
                    width: 322px;
                    height: 60px;
                    background-color: #2979FF;
                    color: white;
                    border: 5px solid #1976D2;
                    border-radius: 5px;
                    font-size: 1.2em;
                    margin: 10px 0;
                    cursor: pointer;
                }

                .instructions-button:hover, .play-button:hover {
                    background-color: #1E60C7;
                }
            </style>
            <div class="container">
                <div class="room-container">
                    <div class="title-container">
                        <h1>Piedra</h1>
                        <h1>Papel</h1>
                        <h1>Tijera</h1>
                    </div>
                    <div class="room-info">
                        Room ID: ${currentRoomId}
                    </div>
                    <div class="players-info">
                        ${player1Name} vs ${player2Name}
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
        if (playButton && stateFunctions.getState().player1Name && stateFunctions.getState().player2Name) {
            playButton.addEventListener('click', () => {
                router.goTo('/play');
            });
        }
    }
}

customElements.define('short-id-page', ShortIdPage);

// Exporta la clase ShortIdPage
