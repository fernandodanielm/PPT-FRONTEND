import { state } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";

export class IngresarASala extends HTMLElement {
    shadow: ShadowRoot | null;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadow) {
            this.shadow.innerHTML = `
                <div class="ingresar-sala-container">
                    <h2>Ingresa el código de la sala</h2>
                    <form class="sala-form">
                        <input type="text" name="roomId" placeholder="Código de sala">
                        <button class="button" type="submit">Ingresar</button>
                    </form>
                </div>
            `;

            const form = this.shadow.querySelector(".sala-form") as HTMLFormElement;
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const roomId = (form.roomId as any).value;
                (window as any).goTo(`/rooms/${roomId}/join`);
            });

            const style = document.createElement("style");
            style.textContent = `
                @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

                .ingresar-sala-container {
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

                h2 {
                    font-size: 36px;
                    margin-bottom: 30px;
                    color: #333;
                }

                .sala-form {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    max-width: 400px;
                }

                input[type="text"] {
                    padding: 15px;
                    margin-bottom: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 16px;
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
                    h2 {
                        font-size: 48px;
                    }

                    .sala-form {
                        width: 60%;
                    }

                    input[type="text"] {
                        font-size: 20px;
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

customElements.define("ingresar-a-sala", IngresarASala);