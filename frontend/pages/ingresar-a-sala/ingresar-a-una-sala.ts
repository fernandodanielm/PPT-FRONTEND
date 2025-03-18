import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import { router } from "../../router";
import { v4 as uuidv4 } from "uuid"; // Importa uuid para generar un ID si no existe en el estado

export class IngresarASala extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const style = document.createElement("style");
        style.textContent = `
            .join-room-container {
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
            }

            .form-group {
                margin-bottom: 20px;
                width: 100%;
                max-width: 300px;
            }

            input[type="text"] {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 16px;
                box-sizing: border-box;
            }

            button {
                padding: 10px 20px;
                font-size: 18px;
                border: none;
                border-radius: 5px;
                background-color: #007bff;
                color: white;
                cursor: pointer;
                width: 100%;
                max-width: 300px;
                box-sizing: border-box;
            }

            button:hover {
                background-color: #0056b3;
            }

            h2 {
                color: #333;
                margin-bottom: 30px;
                text-align: center;
            }
        `;
        this.shadow.appendChild(style);

        const div = document.createElement("div");
        div.classList.add("join-room-container");

        const heading = document.createElement("h2");
        heading.textContent = "Ingresar a una Sala";
        div.appendChild(heading);

        const roomIdInputDiv = document.createElement("div");
        roomIdInputDiv.classList.add("form-group");
        const roomIdInput = document.createElement("input");
        roomIdInput.setAttribute("type", "text");
        roomIdInput.setAttribute("placeholder", "Código para ingresar a la sala");
        roomIdInput.id = "roomIdInput";
        roomIdInputDiv.appendChild(roomIdInput);
        div.appendChild(roomIdInputDiv);

        const nombreInputDiv = document.createElement("div");
        nombreInputDiv.classList.add("form-group");
        const nombreInput = document.createElement("input");
        nombreInput.setAttribute("type", "text");
        nombreInput.setAttribute("placeholder", "Tu nombre");
        nombreInput.id = "nombreInput";
        nombreInputDiv.appendChild(nombreInput);
        div.appendChild(nombreInputDiv);

        const unirseButton = document.createElement("button");
        unirseButton.textContent = "Unirse a Sala";
        unirseButton.id = "unirseButton";
        div.appendChild(unirseButton);

        this.shadow.appendChild(div);

        const unirseButtonElement = this.shadow.getElementById("unirseButton");
        const roomIdInputElement = this.shadow.getElementById("roomIdInput") as HTMLInputElement;
        const nombreInputElement = this.shadow.getElementById("nombreInput") as HTMLInputElement;

        if (unirseButtonElement && roomIdInputElement && nombreInputElement) {
            unirseButtonElement.addEventListener("click", async () => {
                const guestName = nombreInputElement.value.trim();
                const roomId = roomIdInputElement.value.trim();
                let guestId = state.id; // Intenta usar el ID del estado

                if (!guestId) {
                    guestId = uuidv4(); // Genera un nuevo ID si no existe en el estado
                    stateFunctions.setId(guestId); // Guarda el nuevo ID en el estado
                }

                if (guestName && roomId) {
                    stateFunctions.setPlayer2Name(guestName, guestId);
                    stateFunctions.setRoomId(roomId);
                    await stateFunctions.saveRoomData(null, null, guestId, guestName, roomId); // Pasar roomId y guestId
                    setTimeout(() => {
                        stateFunctions.listenRoom();
                        router.goTo(`/short-id/${roomId}`);
                    }, 100);
                } else {
                    alert("Por favor, ingresa tu nombre y el código de la sala.");
                }
            });
        }
    }

    render() {
        // No es necesario un render explícito aquí ya que el contenido es estático
    }
}

customElements.define("ingresar-a-sala", IngresarASala);