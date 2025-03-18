// ingresar-a-una-sala.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { stateFunctions } from "../../state";
import { router } from "../../router";

export class IngresarASala extends HTMLElement {
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
                    padding: 20px;
                    box-sizing: border-box;
                    font-family: sans-serif;
                    color: #333;
                    text-align: center;
                }

                .form-container {
                    background-color: rgba(255, 255, 255, 0.8);
                    padding: 30px;
                    border-radius: 10px;
                    max-width: 400px;
                    width: 100%;
                }

                h2 {
                    font-size: 2.5em;
                    margin-bottom: 20px;
                }

                label {
                    display: block;
                    margin-bottom: 10px;
                    font-size: 1.2em;
                    text-align: left;
                }

                input[type="text"] {
                    width: calc(100% - 22px);
                    padding: 10px;
                    margin-bottom: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 1em;
                }

                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 100%;
                    margin-bottom: 10px;
                }

                button:hover {
                    background-color: #0056b3;
                }

                .back-button {
                    background-color: #6c757d;
                }

                .back-button:hover {
                    background-color: #5a6268;
                }

                .error-message {
                    color: red;
                    margin-top: 10px;
                }
            </style>
            <div class="container">
                <div class="form-container">
                    <h2>Ingresar a una Sala</h2>
                    <label for="name">Tu Nombre:</label>
                    <input type="text" id="name" name="name" placeholder="Ingrese su nombre">
                    <label for="roomId">Código de Sala:</label>
                    <input type="text" id="roomId" name="roomId" placeholder="Ingrese el código de la sala">
                    <p id="errorMessage" class="error-message"></p>
                    <button id="joinRoomButton">Unirse a Sala</button>
                    <button class="back-button" id="backButton">Volver</button>
                </div>
            </div>
        `;
    }

    addEventListeners() {
        const joinRoomButton = this.shadow.getElementById("joinRoomButton");
        const backButton = this.shadow.getElementById("backButton");
        const roomIdInput = this.shadow.getElementById("roomId") as HTMLInputElement;
        const nameInput = this.shadow.getElementById("name") as HTMLInputElement;
        const errorMessage = this.shadow.getElementById("errorMessage");

        if (joinRoomButton) {
            joinRoomButton.addEventListener("click", async () => {
                const roomId = roomIdInput.value.trim();
                const guestName = nameInput.value.trim();
                const playerId = sessionStorage.getItem("playerId"); // Obtener el ID del sessionStorage

                if (guestName && roomId) {
                    if (playerId) {
                        stateFunctions.setId(playerId);
                        const response = await stateFunctions.saveRoomData(null, null, playerId, guestName, roomId);
                        if (response?.roomId) {
                            stateFunctions.setRoomId(response.roomId);
                            router.goTo(`/short-id/${response.roomId}`);
                        } else if (errorMessage) {
                            errorMessage.textContent = "Error al unirse a la sala. Verifica el código.";
                        }
                    } else if (errorMessage) {
                        errorMessage.textContent = "Error: No se encontró el ID del jugador.";
                    }
                } else {
                    if (errorMessage) {
                        errorMessage.textContent = "Por favor, ingresa tu nombre y el código de la sala.";
                    }
                }
            });
        }

        if (backButton) {
            backButton.addEventListener("click", () => {
                window.history.back();
            });
        }

        [roomIdInput, nameInput].forEach(input => {
            if (input) {
                input.addEventListener("input", () => {
                    if (errorMessage && errorMessage.textContent) {
                        errorMessage.textContent = ""; // Limpiar el mensaje de error al escribir
                    }
                });
            }
        });
    }
}

customElements.define("ingresar-a-sala-page", IngresarASala);