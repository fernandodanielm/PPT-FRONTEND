import { state } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import piedraImage from "../../assets/piedra.png";
import tijeraImage from "../../assets/tijera.png";
import papelImage from "../../assets/papel.png";

export class ShortId extends HTMLElement {
    shadow: ShadowRoot | null;
    roomId: string | null = null;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    setRoomId(roomId: string) {
        this.roomId = roomId;
    }

    async connectedCallback() {
        this.roomId = window.location.pathname.split('/').pop() ?? null;

        console.log("ShortId: roomId recibido:", this.roomId);

        if (!this.roomId) {
            console.error("ShortId: roomId no encontrado en la URL.");
            (window as any).goTo("/");
            return;
        }

        await this.waitForBothPlayers();
        this.render();
    }

    async waitForBothPlayers() {
        return new Promise((resolve) => {
            const intervalId = setInterval(async () => {
                try {
                    const currentState = state.getState();
                    const roomData = currentState.currentGame.data;
                    const ownerName = roomData.player1Name;
                    const guestName = roomData.player2Name;

                    console.log("ShortId: Esperando jugadores. Owner:", ownerName, "Guest:", guestName);

                    if (ownerName && guestName) {
                        clearInterval(intervalId);
                        resolve(true);
                    }
                } catch (error) {
                    console.error("Error en waitForBothPlayers:", error);
                }
            }, 1000);
        });
    }

    render() {
        if (this.shadow) {
            const currentState = state.getState();
            const roomId = this.roomId || currentState.currentGame.shortId;
            const ownerName = currentState.currentGame.data.player1Name;
            const guestName = currentState.currentGame.data.player2Name;

            console.log("ShortId: Renderizando con roomId:", roomId);

            this.shadow.innerHTML = `
                <div class="short-id-container">
                    <div class="header">
                        <div class="players">
                            <p>${ownerName || "Esperando..."}</p>
                            <p>${guestName || 'Esperando...'}</p>
                        </div>
                        <div class="room-info">
                            <p>Sala</p>
                            <p>${roomId}</p>
                        </div>
                    </div>
                    <div class="share-code">Compartí el código:</div>
                    <div class="room-id">${roomId}</div>
                    <div class="share-with">Con tu contrincante</div>
                    <div class="moves">
                        <img src="${piedraImage}" alt="Piedra">
                        <img src="${papelImage}" alt="Papel">
                        <img src="${tijeraImage}" alt="Tijera">
                    </div>
                </div>
            `;

            if (ownerName && guestName) {
                console.log("ShortId: Ambos jugadores listos. Redirigiendo a /instructions.");
                (window as any).goTo('/instructions');
            }

            const style = document.createElement("style");
            style.textContent = `
                .short-id-container {
                    background-image: url(${backgroundImage});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                    font-family: 'Arial Rounded MT Bold', sans-serif;
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    margin-bottom: 20px;
                }

                .players, .room-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .share-code {
                    font-size: 24px;
                    margin-bottom: 10px;
                    color: #333;
                }

                .room-id {
                    font-size: 36px;
                    margin-bottom: 10px;
                    color: #007bff;
                }

                .share-with {
                    font-size: 18px;
                    margin-bottom: 30px;
                    color: #333;
                }

                .moves {
                    display: flex;
                    justify-content: center;
                    margin-top: 30px;
                }

                .moves img {
                    width: 80px;
                    height: 80px;
                    margin: 0 10px;
                }

                @media (min-width: 768px) {
                    .moves img {
                        width: 120px;
                        height: 120px;
                    }
                }
            `;
            this.shadow.appendChild(style);
        }
    }
}

customElements.define('short-id', ShortId);