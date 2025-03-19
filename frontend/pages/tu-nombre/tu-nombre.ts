// tu-nombre.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import { router } from "../../router";
import { v4 as uuidv4 } from "uuid";

const API_BASE_URL = "https://ppt-backend-1.onrender.com"; // Asegúrate de que esta URL sea correcta

export class TuNombre extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                .welcome-container {
                    background-image: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: sans-serif;
                }
                h1 {
                    color: #333;
                    margin-bottom: 20px;
                }
                input[type="text"] {
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    width: 80%;
                    max-width: 300px;
                }
                button {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 80%;
                    max-width: 200px;
                }
                button:hover {
                    background-color: #0056b3;
                }
                @media (max-width: 600px) {
                    h1 {
                        font-size: 1.5em;
                    }
                    input, button {
                        width: 90%;
                    }
                }
            </style>
            <div class="welcome-container">
                <h1>Ingresa tu Nombre</h1>
                <input type="text" id="nombreInput" placeholder="Tu nombre">
                <button id="comenzarButton">Comenzar</button>
            </div>
        `;

        const nombreInput = this.shadow.querySelector("#nombreInput");
        const comenzarButton = this.shadow.querySelector("#comenzarButton");

        if (comenzarButton && nombreInput) {
            comenzarButton.addEventListener("click", async () => {
                const playerName = (nombreInput as HTMLInputElement).value.trim();
                if (playerName) {
                    try {
                        const ownerId = uuidv4();
                        stateFunctions.setState({ id: ownerId, player1Name: playerName, player1Id: ownerId });

                        const response = await fetch(`${API_BASE_URL}/api/rooms`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                ownerId: ownerId,
                                ownerName: playerName,
                            }),
                        });

                        if (!response.ok) {
                            const errorData = await response.json();
                            console.error("Error al crear la sala:", errorData);
                            alert("Error al crear la sala. Inténtalo de nuevo.");
                            return;
                        }

                        const roomData = await response.json();
                        if (roomData && roomData.roomId) {
                            const roomId = roomData.roomId;
                            stateFunctions.setState({ roomId: roomId });
                            stateFunctions.listenRoom();

                            setTimeout(() => {
                                router.goTo(`/short-id/${roomId}`);
                            }, 100);
                        } else {
                            alert("Error al crear la sala. La respuesta del servidor fue inesperada.");
                        }
                    } catch (error) {
                        console.error("Error al crear la sala:", error);
                        alert("Ocurrió un error al crear la sala. Inténtalo de nuevo.");
                    }
                } else {
                    alert("Por favor, ingresa tu nombre.");
                }
            });
        }
    }
}

customElements.define("tu-nombre", TuNombre);