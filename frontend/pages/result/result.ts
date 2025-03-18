// frontend/src/components/resultpage.ts
import { state, stateFunctions } from "../../state";
import { router } from "../../router";

export class ResultPage extends HTMLElement {
    shadow: ShadowRoot;

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
        const game = state.currentGame;
        const player1Name = state.player1Name;
        const player2Name = state.player2Name;
        const player1Id = state.player1Id;
        const player2Id = state.player2Id;
        const player1Play = game?.data.player1Play;
        const player2Play = game?.data.player2Play;
        const result = game?.data.result;
        const statistics = game?.statistics;

        let resultText = '';
        if (result === 'ownerWins') {
            resultText = `${player1Name} gana!`;
        } else if (result === 'guestWins') {
            resultText = `${player2Name} gana!`;
        } else if (result === 'draw') {
            resultText = 'Empate!';
        }

        this.shadow.innerHTML = `
            <style>
                /* Estilos aquí */
            </style>
            <div>
                <h2>Resultado</h2>
                ${resultText ? `<p>${resultText}</p>` : '<p>Esperando resultado...</p>'}
                <h3>Jugador 1</h3>
                <p>Nombre: ${player1Name || 'Desconocido'}</p>
                <p>ID: ${player1Id || 'No ID'}</p>
                <p>Jugada: ${player1Play || 'No jugó'}</p>
                <h3>Jugador 2</h3>
                <p>Nombre: ${player2Name || 'Desconocido'}</p>
                <p>ID: ${player2Id || 'No ID'}</p>
                <p>Jugada: ${player2Play || 'No jugó'}</p>
                ${statistics ? `
                    <h3>Estadísticas</h3>
                    <p>${player1Name}: Victorias ${statistics.player1.wins}, Derrotas ${statistics.player1.losses}, Empates ${statistics.player1.draws}</p>
                    <p>${player2Name}: Victorias ${statistics.player2.wins}, Derrotas ${statistics.player2.losses}, Empates ${statistics.player2.draws}</p>
                ` : '<p>Cargando estadísticas...</p>'}
                <button id="playAgainButton">Jugar Otra Vez</button>
            </div>
        `;
        this.addListeners();
    }

    addListeners() {
        const playAgainButton = this.shadow.getElementById('playAgainButton');
        if (playAgainButton) {
            playAgainButton.addEventListener('click', () => {
                stateFunctions.resetGame(state.roomId);
                router.goTo('/play');
            });
        }
    }
}

customElements.define('result-page', ResultPage);