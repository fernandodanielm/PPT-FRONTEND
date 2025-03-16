import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { router } from "../../router"; // Importar router

export class WelcomePage extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="welcome-container">
        <div class="title-container">
          <h1>Piedra</h1>
          <h1>Papel</h1>
          <h1>Tijera</h1>
        </div>
        <button class="new-game-button">Nuevo Juego</button>
        <button class="join-room-button">Ingresar a una Sala</button>
      </div>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .welcome-container {
        background-image: url(${backgroundImage});
        background-size: cover;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
      }

      .title-container {
        width: 308px;
        height: 219px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      h1 {
        color: #009048;
        margin: 0;
        font-size: 3em;
      }

      .new-game-button, .join-room-button {
        width: 322px;
        height: 87px;
        background-color: #2979FF;
        color: white;
        border: 5px solid #1976D2;
        border-radius: 5px;
        font-size: 1.5em;
        margin: 10px 0;
        cursor: pointer;
      }

      .new-game-button:hover, .join-room-button:hover {
        background-color: #1E60C7;
      }
    `;

    this.appendChild(style);

    // Agregar manejadores de eventos a los botones
    this.addEventListeners();
  }

  addEventListeners() {
    const newGameButton = this.querySelector(".new-game-button");
    const joinRoomButton = this.querySelector(".join-room-button");

    if (newGameButton) {
      newGameButton.addEventListener("click", () => {
        router.goTo("/tu-nombre"); // Redirigir a la página de nombre usando router
      });
    }

    if (joinRoomButton) {
      joinRoomButton.addEventListener("click", () => {
        router.goTo("/ingresar-a-sala"); // Redirigir a la página de ingresar a sala usando router
      });
    }
  }
}

customElements.define("welcome-page", WelcomePage);