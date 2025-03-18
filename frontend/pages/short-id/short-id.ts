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
        // **Importante:** Escuchar la sala ANTES de suscribirse al estado
        stateFunctions.listenRoom();
        this.unsubscribe = stateFunctions.subscribe(() => this.render());
        this.checkPlayerId(); // Verificar si el ID del jugador está presente
    }

    disconnectedCallback() {
        this.unsubscribe?.();
    }

    unsubscribe: (() => void) | undefined;

    checkPlayerId() {
        const currentState = stateFunctions.getState();
        if (!currentState.id) {
            console.error("ShortIdPage: No se encontró el ID del jugador en el estado.");
            // **Posible solución:** Si el ID no está, podrías intentar recuperarlo de sessionStorage
            const playerIdFromSession = sessionStorage.getItem("playerId");
            if (playerIdFromSession) {
                stateFunctions.setId(playerIdFromSession);
                console.log("ShortIdPage: ID del jugador recuperado de sessionStorage:", playerIdFromSession);
                // **Opcional:** Volver a renderizar para que la información se actualice
                this.render();
            } else {
                // **Si aún no hay ID, considera redirigir a la página de inicio para que el usuario cree/ingrese de nuevo**
                console.warn("ShortIdPage: No se encontró ID ni en el estado ni en sessionStorage. Redirigiendo a /tu-nombre.");
                router.goTo('/tu-nombre');
            }
        } else {
            console.log("ShortIdPage: ID del jugador encontrado en el estado:", currentState.id);
        }
    }

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
