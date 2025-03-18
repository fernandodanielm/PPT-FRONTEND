// tu-nombre.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import { router } from "../../router";
import { v4 as uuidv4 } from "uuid";

export class TuNombre extends HTMLElement {
    shadow: ShadowRoot; // Declarar la propiedad shadow

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' }); // Inicializar el Shadow DOM
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
                        // Generar un ID único para el owner en el frontend
                        const ownerId = uuidv4();
                        stateFunctions.setId(ownerId);
                        stateFunctions.setPlayer1Name(playerName, ownerId);

                        // Enviar los datos al backend para crear la sala y guardar la información del owner
                        const response = await stateFunctions.saveRoomData(ownerId, playerName, null, null);
                        console.log("Respuesta completa del backend (creación de sala):", response);

                        if (response && response.roomId) {
                            const roomId = response.roomId;
                            console.log("Valor de roomId recibido del backend:", roomId, typeof roomId);
                            stateFunctions.setRoomId(roomId);
                            stateFunctions.listenRoom(); // Comenzar a escuchar los cambios en la sala

                            // Redirigir a la página de la sala después de un breve delay para asegurar que el estado se actualice
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