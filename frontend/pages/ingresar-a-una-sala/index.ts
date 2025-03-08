import { state } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";

export class IngresarAsala extends HTMLElement {
    roomIdInput: HTMLInputElement;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) {
            return;
        }

        this.shadowRoot.innerHTML = `
            <div class="ingresar-asala-container">
                <h2>Ingresar a una sala</h2>
                <form class="sala-form">
                    <input type="text" name="roomId" placeholder="Código de sala">
                    <button class="button" type="submit">Ingresar</button>
                </form>
            </div>
        `;

        this.roomIdInput = this.shadowRoot.querySelector("input[name='roomId']") as HTMLInputElement;
        const form = this.shadowRoot.querySelector(".sala-form") as HTMLFormElement;

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.ingresarASala();
        });

        const style = document.createElement("style");
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

            .ingresar-asala-container {
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
        this.shadowRoot.appendChild(style);
    }

    ingresarASala() {
        const roomId = this.roomIdInput.value;
        state.setRoomId(roomId); // Almacenar el roomId en el estado
        (window as any).goTo('/tu-nombre');
    }
}

customElements.define("ingresar-asala", IngresarAsala);