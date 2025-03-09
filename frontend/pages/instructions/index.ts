import { state } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";

export class InstructionsPage extends HTMLElement {
    shadow: ShadowRoot | null;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const currentState = state.getState();
        const roomId = currentState.currentGame.shortId;
        if (!roomId) {
            (window as any).goTo("/");
            return;
        }

        this.render();
    }
    render() {
        if (this.shadow) {
            this.shadow.innerHTML = `
                <div class="instructions-container">
                    <h3>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
                    <button class="button" id="play-button">Jugar</button>
                </div>
            `;
            const playButton = this.shadow.querySelector('#play-button');
            if (playButton) {
                playButton.addEventListener('click', () => {
                    (window as any).goTo('/play');
                });
            }

            const style = document.createElement("style");
            style.textContent = `
                @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

                .instructions-container {
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

                h3 {
                    font-size: 32px;
                    margin-bottom: 30px;
                    color: #333;
                    padding: 0 20px;
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
                    .instructions-container {
                        padding: 40px;
                    }

                    h3 {
                        font-size: 48px;
                    }

                    .button {
                        width: 400px;
                        height: 100px;
                        font-size: 32px;
                    }
                }
            `;
            this.shadow.appendChild(style);
        }
    }
}
customElements.define('instructions-page', InstructionsPage);