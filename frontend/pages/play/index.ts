import { state, Play } from "../../state";
import piedraImage from "../../assets/piedra.png";
import tijeraImage from "../../assets/tijera.png";
import papelImage from "../../assets/papel.png";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";

export class PlayPage extends HTMLElement {
    shadow: ShadowRoot | null;
    roomId: string | null = null;
    playerNumber: 1 | 2 = 1;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const currentState = state.getState();
        this.roomId = currentState.currentGame.shortId;
        const player1Name = currentState.currentGame.data.player1Name;
        const player2Name = currentState.currentGame.data.player2Name;

        if (player1Name) {
            this.playerNumber = player2Name ? 2 : 1;
        }

        if (!this.roomId) {
            (window as any).goTo("/");
            return;
        }

        this.render();
        await this.waitForGameResult();
    }

    async waitForGameResult() {
        return new Promise((resolve) => {
            state.subscribe(async (currentState) => {
                if (currentState.currentGame.data.gameOver) {
                    resolve(true);
                    (window as any).goTo("/result");
                }
            });
        });
    }

    render() {
        const shadowRoot = this.shadow;
        if (shadowRoot) {
            shadowRoot.innerHTML = `
                <div class="play-container">
                    <h1>Elige tu jugada</h1>
                    <div class="timer">
                        <span id="timer">3</span>
                    </div>
                    <div class="moves">
                        <button id="piedra"><img src="${piedraImage}" alt="Piedra"></button>
                        <button id="papel"><img src="${papelImage}" alt="Papel"></button>
                        <button id="tijera"><img src="${tijeraImage}" alt="Tijera"></button>
                    </div>
                </div>
            `;

            const moves = shadowRoot.querySelector(".moves") as HTMLElement | null;
            const timerElement = shadowRoot.querySelector("#timer") as HTMLElement;
            const timerContainer = shadowRoot.querySelector(".timer") as HTMLElement;

            let timeLeft = 3;
            timerContainer.style.animation = `countdown ${timeLeft}s linear forwards`;

            const timerInterval = setInterval(() => {
                timeLeft--;
                if (timerElement) {
                    timerElement.textContent = timeLeft.toString();
                }
                if (timeLeft === 0) {
                    clearInterval(timerInterval);
                    if (moves) {
                        moves.style.display = 'none';
                    }
                }
            }, 1000);

            moves?.addEventListener("click", async (e) => {
                const target = (e.target as HTMLElement).closest('button') as HTMLButtonElement;
                if (target) {
                    clearInterval(timerInterval);
                    const buttons = shadowRoot.querySelectorAll(".moves button");
                    buttons.forEach(button => {
                        const img = button.querySelector('img');
                        if (button === target) {
                            img?.classList.add('selected');
                        } else {
                            img?.classList.add('unselected');
                        }
                    });

                    const myMove = target.id as Play;
                    if (this.roomId) {
                        await state.setMove(this.roomId, this.playerNumber, myMove);
                    } else {
                        console.error("roomId es null. No se puede realizar el movimiento.");
                    }
                }
            });

            const style = document.createElement("style");
            style.textContent = `
                .play-container {
                    background-image: url(${backgroundImage});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                }

                h1 {
                    font-size: 36px;
                    margin-bottom: 30px;
                    color: #333;
                }

                .timer {
                    font-size: 48px;
                    margin-bottom: 30px;
                    color: #333;
                    position: relative;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 5px solid #333;
                }

                .timer::before {
                    content: "";
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    border-radius: 50%;
                    border: 5px solid transparent;
                    border-top-color: #333;
                    animation: spin 3s linear infinite;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes countdown {
                    0% {
                        stroke-dasharray: 283;
                        stroke-dashoffset: 0;
                    }
                    100% {
                        stroke-dasharray: 283;
                        stroke-dashoffset: 283;
                    }
                }

                .moves {
                    display: flex;
                    justify-content: center;
                }

                .moves button {
                    background: none;
                    border: none;
                    padding: 10px;
                    margin: 0 10px;
                    cursor: pointer;
                }

                .moves img {
                    width: 100px;
                    height: 100px;
                    transition: transform 0.3s ease;
                }

                .moves img.selected {
                    transform: scale(1.2);
                }

                .moves img.unselected {
                    opacity: 0.5;
                }

                @media (min-width: 768px) {
                    h1 {
                        font-size: 48px;
                    }

                    .moves img {
                        width: 150px;
                        height: 150px;
                    }
                }
            `;
            shadowRoot.appendChild(style);
        }
    }
}

customElements.define('play-page', PlayPage);