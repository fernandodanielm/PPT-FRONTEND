// ingresar-a-sala.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import {router} from "../../router";
import { v4 as uuidv4 } from 'uuid';

export class IngresarASala extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="join-room-container">
        <h1>Ingresar a una Sala</h1>
        <input type="text" id="roomIdInput" placeholder="Room ID">
        <input type="text" id="nombreInput" placeholder="Tu nombre">
        <input type="hidden" id="guestIdInput" value="${uuidv4()}">
        <button id="unirseButton">Unirse</button>
      </div>
    `;

    const roomIdInput = this.querySelector("#roomIdInput");
    const nombreInput = this.querySelector("#nombreInput");
    const guestIdInput = this.querySelector("#guestIdInput");
    const unirseButton = this.querySelector("#unirseButton");

    if (unirseButton && roomIdInput && nombreInput && guestIdInput) {
        unirseButton.addEventListener("click", async () => {
            const roomId = (roomIdInput as HTMLInputElement).value.trim();
            const guestName = (nombreInput as HTMLInputElement).value.trim();
            const guestId = (guestIdInput as HTMLInputElement).value;
          
            if (roomId && guestName) {
              try {
                stateFunctions.setId(guestId);
                stateFunctions.setPlayer2Name(guestName);
                stateFunctions.setRoomId(roomId);
                await stateFunctions.saveRoomData(null, null, guestId, guestName, roomId); // Nombres coincidentes
                setTimeout(() => {
                  stateFunctions.listenRoom();
                  router.goTo(`/short-id/${roomId}`);
                }, 100);
              } catch (error) {
                console.error("Error al unirse a la sala:", error);
                // ... (manejo de errores)
              }
            }
          });
    }

    const style = document.createElement("style");
    style.textContent = `
      .join-room-container {
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

customElements.define("ingresar-a-sala", IngresarASala);