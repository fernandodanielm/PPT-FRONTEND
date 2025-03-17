// tu-nombre.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import { router } from "../../router";
import { v4 as uuidv4 } from "uuid";

export class TuNombre extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="welcome-container">
                <h1>Ingresa tu Nombre</h1>
                <input type="text" id="nombreInput" placeholder="Tu nombre">
                <input type="hidden" id="ownerIdInput" value="${uuidv4()}">
                <button id="comenzarButton">Comenzar</button>
            </div>
        `;

        const nombreInput = this.querySelector("#nombreInput");
        const ownerIdInput = this.querySelector("#ownerIdInput");
        const comenzarButton = this.querySelector("#comenzarButton");

        if (comenzarButton && nombreInput && ownerIdInput) {
            comenzarButton.addEventListener("click", async () => {
                const playerName = (nombreInput as HTMLInputElement).value.trim();
                const ownerId = (ownerIdInput as HTMLInputElement).value;
                if (playerName) {
                    try {
                        stateFunctions.setId(ownerId);
                        stateFunctions.setPlayer1Name(playerName, ownerId); // Pasar ownerId como userId
                        const roomId = await stateFunctions.saveRoomData(ownerId, playerName, null, null);
                        if (roomId) {
                            console.log("Valor de roomId recibido del backend:", roomId, typeof roomId); // Agrega este log
                            stateFunctions.setRoomId(roomId);
                            setTimeout(() => {
                                stateFunctions.listenRoom();
                                router.goTo(`/short-id/${roomId}`);
                            }, 100);
                        } else {
                            alert("Error al crear la sala. Inténtalo de nuevo.");
                        }
                    } catch (error) {
                        console.error("Error al crear la sala:", error);
                        // ... (manejo de errores)
                    }
                }
            });
        }

        const style = document.createElement("style");
        style.textContent = `
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
            input {
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
            @media (max-width: 600px) {
                h1 {
                    font-size: 1.5em;
                }
                input, button {
                    width: 90%;
                }
            }
        `;

        this.appendChild(style);
    }
}

customElements.define("tu-nombre", TuNombre);