import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import { rtdb } from "../../utils/rtdb";
import { ref, onValue, get } from "firebase/database";
import { router } from "../../router";

export class IngresarASala extends HTMLElement {
    shadow: ShadowRoot; // Declarar la propiedad shadow

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" }); // Inicializar shadow en el constructor
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

        // Ya no se muestra el input para el guestId
        // const guestIdInput = document.createElement("input");
        // guestIdInput.setAttribute("type", "text");
        // guestIdInput.setAttribute("placeholder", "Tu id");
        // guestIdInput.id = "guestIdInput";
        // div.appendChild(guestIdInput);

        const unirseButton = document.createElement("button");
        unirseButton.textContent = "Unirse a Sala";
        unirseButton.id = "unirseButton";
        div.appendChild(unirseButton);

        this.shadow.appendChild(div);

        const unirseButtonElement = this.shadow.getElementById("unirseButton");
        const roomIdInputElement = this.shadow.getElementById("roomIdInput") as HTMLInputElement;
        const nombreInputElement = this.shadow.getElementById("nombreInput") as HTMLInputElement;
        // const guestIdInputElement = this.shadow.getElementById("guestIdInput") as HTMLInputElement;

        if (unirseButtonElement && roomIdInputElement && nombreInputElement) {
            unirseButtonElement.addEventListener("click", async () => {
                const guestName = nombreInputElement.value;
                // Ahora el guestId se generará o se manejará internamente
                const roomId = roomIdInputElement.value;

                // Aquí deberías tener una lógica para obtener o generar el guestId
                // Por ejemplo, podrías tener una función en stateFunctions para esto
                const guestId = state.id || Math.random().toString(36).substring(2, 15); // Ejemplo básico

                stateFunctions.setPlayer2Name(guestName, guestId);
                stateFunctions.setRoomId(roomId);
                await stateFunctions.saveRoomData(null, null, guestId, guestName);
                setTimeout(() => {
                    stateFunctions.listenRoom();
                    router.goTo(`/short-id/${roomId}`);
                }, 100);
            });
        }
    }
}

customElements.define("ingresar-a-sala", IngresarASala);