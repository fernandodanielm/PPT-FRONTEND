// frontend/src/components/playpage.ts
import { state, stateFunctions, Jugada } from "../../state";
import { router } from "../../router";
import backgroundImage from "../../assets/piedrapapelotijera.jpg"; // Asegúrate de que la ruta sea correcta
import piedraImg from "../../assets/piedra.png"; // Asegúrate de que la ruta sea correcta
import papelImg from "../../assets/papel.png"; // Asegúrate de que la ruta sea correcta
import tijeraImg from "../../assets/tijera.png"; // Asegúrate de que la ruta sea correcta

export class PlayPage extends HTMLElement {
    shadow: ShadowRoot;
    myMove: Jugada | null = null;

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
                    background-color: transparent; /* Fondo transparente para mostrar la imagen */
                }
                .move-button:hover {
                    opacity: 0.8;
                }
                .move-button img {
                    width: 80px; /* Ajusta el tamaño según necesites */
                    height: 80px;
                    display: block; /* Evita espacio extra debajo de la imagen */
                }
                .my-move {
                    color: white;
                    font-size: 1.5em;
                    margin-bottom: 20px;
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
            </style>
            <div class="container">
                <h2 class="title">Elige tu jugada</h2>
                <div class="buttons-container">
                    <button class="move-button" id="piedra">
                        <img src="${piedraImg}" alt="Piedra">
                    </button>
                    <button class="move-button" id="papel">
                        <img src="${papelImg}" alt="Papel">
                    </button>
                    <button class="move-button" id="tijera">
                        <img src="${tijeraImg}" alt="Tijera">
                    </button>
                </div>
                ${this.myMove ? `<p class="my-move">Tu jugada: ${this.myMove}</p>` : ''}
                <button id="resultButton">Ver Resultado</button>
            </div>
        `;
        this.addListeners();
    }

    addListeners() {
        this.shadow.querySelectorAll('.move-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const target = e.target as HTMLButtonElement;
                const move = target.id as Jugada;
                this.myMove = move;
                stateFunctions.setMove(move);
            });
        });

        const resultButton = this.shadow.getElementById('resultButton');
        if (resultButton) {
            resultButton.addEventListener('click', () => {
                if (state.currentGame?.data.gameOver) {
                    router.goTo('/result');
                } else {
                    alert('El juego aún no termina.');
                }
            });
        }
    }
}

customElements.define('play-page', PlayPage);