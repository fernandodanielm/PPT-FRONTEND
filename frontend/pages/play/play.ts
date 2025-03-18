// frontend/src/components/playpage.ts
import { state, stateFunctions, Jugada } from "../../state";
import { router } from "../../router";

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
                /* Estilos aquí */
            </style>
            <div>
                <h2>Elige tu jugada</h2>
                <button id="piedra">Piedra</button>
                <button id="papel">Papel</button>
                <button id="tijera">Tijera</button>
                ${this.myMove ? `<p>Tu jugada: ${this.myMove}</p>` : ''}
                <button id="resultButton">Ver Resultado</button>
            </div>
        `;
        this.addListeners();
    }

    addListeners() {
        this.shadow.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (e) => {
                const target = e.target as HTMLButtonElement;
                const move = target.id as Jugada;
                if (move === 'piedra' || move === 'papel' || move === 'tijera') {
                    this.myMove = move;
                    stateFunctions.setMove(move);
                } else if (target.id === 'resultButton' && state.currentGame?.data.gameOver) {
                    router.goTo('/result');
                } else if (target.id === 'resultButton' && !state.currentGame?.data.gameOver) {
                    alert('El juego aún no termina.');
                }
            });
        });
    }
}

customElements.define('play-page', PlayPage);