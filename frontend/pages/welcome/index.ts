import { state } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";

export class Welcome extends HTMLElement {
    shadow: ShadowRoot | null;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadow) {
            this.shadow.innerHTML = `
                <style>
                    body {
                        background-color: white;
                    }
                    .welcome-container {
                        width: 375px;
                        height: 667px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-image: url(${backgroundImage});
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .title-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 20px;
                    }
                    h1 {
                        font-size: 36px;
                        text-align: center;
                        background: linear-gradient(to right, green, lightgreen);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-family: 'Arial Rounded MT Bold', sans-serif;
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
                    }
                    @media (min-width: 965px) {
                        .welcome-container {
                            width: 1280px;
                            height: 720px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                </style>
                <div class="welcome-container">
                    <div class="title-container">
                        <h1>Piedra</h1>
                        <h1>Papel ó</h1>
                        <h1>Tijera</h1>
                    </div>
                    <button class="button" id="new-game-button">Nuevo Juego</button>
                    <button class="button" id="join-room-button">Ingresa a una sala</button>
                </div>
            `;
            const newGameButton = this.shadow.querySelector('#new-game-button');
            const joinRoomButton = this.shadow.querySelector('#join-room-button');
            if (newGameButton) {
                newGameButton.addEventListener('click', async () => {
                    const roomId = await state.createRoom();
                    (window as any).goTo(`/rooms/${roomId}/join`); // Corrección aquí
                });
            }
            if (joinRoomButton) {
                joinRoomButton.addEventListener('click', () => {
                    (window as any).goTo('/ingresar-a-sala');
                });
            }
        }
    }
}
customElements.define('welcome-page', Welcome);