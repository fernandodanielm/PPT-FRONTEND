// instructions.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { router } from "../../router";

export class InstructionsPage extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                .instructions-container {
                    background-image: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    padding: 20px;
                    box-sizing: border-box;
                    font-family: sans-serif;
                    color: #333;
                    text-align: center;
                }

                .instructions-content {
                    background-color: rgba(255, 255, 255, 0.8);
                    padding: 30px;
                    border-radius: 10px;
                    max-width: 600px;
                    width: 100%;
                }

                h2 {
                    font-size: 2.5em;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 1.2em;
                    line-height: 1.6;
                    margin-bottom: 15px;
                    text-align: left;
                }

                .back-button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;
                }

                .back-button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="instructions-container">
                <div class="instructions-content">
                    <h2>¿Cómo Jugar Piedra, Papel o Tijera?</h2>
                    <p>El juego es simple y se juega entre dos personas.</p>
                    <p>Cada jugador elige simultáneamente una de tres opciones: piedra, papel o tijera.</p>
                    <h3>Las reglas son las siguientes:</h3>
                    <ul>
                        <li><strong>Piedra</strong> vence a <strong>Tijera</strong> (la rompe).</li>
                        <li><strong>Tijera</strong> vence a <strong>Papel</strong> (lo corta).</li>
                        <li><strong>Papel</strong> vence a <strong>Piedra</strong> (la envuelve).</li>
                    </ul>
                    <p>Si ambos jugadores eligen la misma opción, es un empate.</p>
                    <p>¡El objetivo es ganar la mayoría de las rondas!</p>
                    <button class="back-button" id="backButton">Volver</button>
                </div>
            </div>
        `;
    }

    addEventListeners() {
        const backButton = this.shadow.getElementById("backButton");
        if (backButton) {
            backButton.addEventListener("click", () => {
                window.history.back();
            });
        }
    }
}

customElements.define("instructions-page", InstructionsPage);