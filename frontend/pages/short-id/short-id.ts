// frontend/src/components/short-id.ts
import { state, stateFunctions } from "../../state";
import { rtdb } from "../../utils/rtdb";
import { ref, onValue } from "firebase/database";
import { router } from "../../router";

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
        this.shadow.innerHTML = `
            <style>
                /* Estilos aquí */
            </style>
            <div>
                <h2>Compartí este ID de sala:</h2>
                <p>${state.roomId}</p>
                <p>Jugador 1: ${state.player1Name || 'Esperando...'}</p>
                <p>Jugador 2: ${state.player2Name || 'Esperando...'}</p>
                ${state.player1Name && state.player2Name ? `<button id="playButton">Jugar</button>` : `<p>Esperando al segundo jugador...</p>`}
            </div>
        `;
        this.addListeners();
    }

    addListeners() {
        const playButton = this.shadow.getElementById('playButton');
        if (playButton) {
            playButton.addEventListener('click', () => {
                router.goTo('/play');
            });
        }
    }
}

customElements.define('short-id-page', ShortIdPage);