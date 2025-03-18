// frontend/src/components/playpage.ts
import { state, stateFunctions, Jugada } from "../../state";
import { router } from "../../router";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import piedraImg from "../../assets/piedra.png";
import papelImg from "../../assets/papel.png";
import tijeraImg from "../../assets/tijera.png";

export class PlayPage extends HTMLElement {

    shadow: ShadowRoot;
    myMove: Jugada | null = null;
    unsubscribe: (() => void) | undefined;
    areButtonsDisabled: boolean = false; // Nuevo estado para controlar la habilitación de botones

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
        const currentGame = state.currentGame;
        const playerNumber = state.playerNumber;
        let opponentMove: Jugada | null = null;

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
                    font-family: sans-serif;
                    color: #333;
                }
                .title {
                    font-size: 2.5em;
                    margin-bottom: 30px;
                    color: white;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                .buttons-container {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 30px;
                }
                .move-button {
                    padding: 10px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: opacity 0.3s ease;
                    background-color: transparent;
                }
                .move-button:hover {
                    opacity: 0.8;
                }
                .move-button img {
                    width: 80px;
                    height: 80px;
                    display: block;
                }
                .my-move {
                    color: white;
                    font-size: 1.5em;
                    margin-bottom: 20px;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
                }
                .opponent-move {
                    color: yellow;
                    font-size: 1.2em;
                    margin-bottom: 15px;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
                }
                #resultButton {
                    padding: 12px 25px;
                    font-size: 1em;
                    background-color: #9b59b6;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                }
                .disabled {
                    opacity: 0.5;
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
            button.addEventListener('click', (e) => {
                if (!this.areButtonsDisabled) {
                    const target = e.target as HTMLButtonElement;
                    const move = target.id as Jugada;
                    this.myMove = move;
                    this.areButtonsDisabled = true; // Deshabilitar botones al hacer clic
                    stateFunctions.setMove(move);
                }
            });
        });

        const resultButton = this.shadow.getElementById('resultButton');
        if (resultButton) {
            resultButton.addEventListener('click', () => {
                if (state.currentGame?.data.gameOver) {
                    router.goTo('/result');
                } else {
                    alert('Espera a que ambos jugadores hagan su movimiento.');
                }
            });
        }
    }
}

customElements.define('play-page', PlayPage);