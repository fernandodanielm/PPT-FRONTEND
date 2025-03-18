// Instructions.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import { router } from "../../router";

export class InstructionsPage extends HTMLElement {
    shadow: ShadowRoot;
    unsubscribe: (() => void) | null = null;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.subscribeToState();
    }

    disconnectedCallback() {
        this.unsubscribeFromState();
    }

    subscribeToState() {
        this.unsubscribe = stateFunctions.subscribe(() => {
            this.render();
        });
    }

    unsubscribeFromState() {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
        }
    }

    render() {
        const currentState = stateFunctions.getState();
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
                }
                .instructions {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    text-align: center;
                    padding: 20px;
                    background-color: rgba(255, 255, 255, 0.8);
                    border-radius: 10px;
                }
                .play-button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .play-button:hover {
                    background-color: #3e8e41;
                }
                .player-info {
                    font-size: 16px;
                    margin-top: 20px;
                    background-color: rgba(255, 255, 255, 0.8);
                    padding: 10px;
                    border-radius: 5px;
                }
            </style>
            <div class="container">
                <div class="instructions">
                    <p>Presioná jugar y elegí piedra, papel o tijera antes de que pasen los 3 segundos.</p>
                </div>
                <button class="play-button">JUGAR</button>
                <div class="player-info">
                    <p>Player 1 Name: ${currentState.player1Name || "Esperando..."}</p>
                    <p>Player 1 ID: ${currentState.player1Id || "No ID"}</p>
                    <p>Player 2 Name: ${currentState.player2Name || "Esperando..."}</p>
                    <p>Player 2 ID: ${currentState.player2Id || "No ID"}</p>
                    <p>Room ID: ${currentState.roomId || "No ID"}</p>
                </div>
            </div>
        `;

        const playButton = this.shadow.querySelector(".play-button");
        if (playButton) {
            playButton.addEventListener("click", () => {
                router.goTo("/play"); // Redirigir a la página de juego usando router
            });
        }
    }
}

customElements.define("instructions-page", InstructionsPage);