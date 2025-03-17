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
                // ... otros estilos
            }
            // ... otros estilos CSS
        `;

        this.shadow.appendChild(style);

        const div = document.createElement("div");
        div.classList.add("join-room-container");

        const roomIdInput = document.createElement("input");
        roomIdInput.setAttribute("type", "text");
        roomIdInput.setAttribute("placeholder", "Código de Sala");
        roomIdInput.id = "roomIdInput";

        const nombreInput = document.createElement("input");
        nombreInput.setAttribute("type", "text");
        nombreInput.setAttribute("placeholder", "Tu nombre");
        nombreInput.id = "nombreInput";

        const guestIdInput = document.createElement("input");
        guestIdInput.setAttribute("type", "text");
        guestIdInput.setAttribute("placeholder", "Tu id");
        guestIdInput.id = "guestIdInput";

        const unirseButton = document.createElement("button");
        unirseButton.textContent = "Unirse a Sala";
        unirseButton.id = "unirseButton";

        div.appendChild(roomIdInput);
        div.appendChild(nombreInput);
        div.appendChild(guestIdInput);
        div.appendChild(unirseButton);

        this.shadow.appendChild(div);

        const unirseButtonElement = this.shadow.getElementById("unirseButton");
        if (unirseButtonElement) {
            unirseButtonElement.addEventListener("click", async () => {
                const guestName = nombreInput.value;
                const guestId = guestIdInput.value;
                const roomId = roomIdInput.value;

                stateFunctions.setPlayer2Name(guestName, guestId);
                stateFunctions.setRoomId(roomId);
                await stateFunctions.saveRoomData(null, null, guestId, guestName);
                setTimeout(() => {
                    stateFunctions.listenRoomChanges();
                    router.goTo(`/short-id/${roomId}`);
                }, 100);
            });
        }
    }
}

customElements.define("ingresar-a-sala", IngresarASala);