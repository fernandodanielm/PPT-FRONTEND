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

    connectedCallback() {
        // Obtener el roomId de la URL
        const pathSegments = window.location.pathname.split('/');
        this.roomId = pathSegments[pathSegments.length - 1] || null;

        console.log("ShortId: roomId recibido:", this.roomId);

        if (!this.roomId) {
            console.error("ShortId: roomId no encontrado en la URL.");
            (window as any).goTo("/");
            return;
        }

        console.log("ShortId: roomId válido. Continuando con la espera de jugadores.");

        this.render(); // Renderizar la interfaz inicial
        this.checkGuestConnection(); // Iniciar la verificación de la conexión del guest
    }

    async checkGuestConnection() {
        const intervalId = setInterval(async () => {
            try {
                const currentState = state.getState();
                const roomData = currentState.currentGame.data;
                const guestName = roomData.player2Name;

                if (guestName) {
                    clearInterval(intervalId);
                    console.log("ShortId: Guest conectado:", guestName);
                    setTimeout(() => {
                        (window as any).goTo("/instructions");
                    }, 2000); // Redirigir a Instructions después de unos segundos
                }
            } catch (error) {
                console.error("Error en checkGuestConnection:", error);
            }
        }, 1000);
    }

    render() {
        if (this.shadow) {
            const currentState = state.getState();
            const roomId = this.roomId || currentState.currentGame.shortId;
            const ownerName = currentState.currentGame.data.player1Name;
            const guestName = currentState.currentGame.data.player2Name;

            const guestDisplayName = guestName ? guestName : "Contrincante en espera...";

            this.shadow.innerHTML = `
                <div class="short-id-container">
                    <div class="header">
                        <div class="players">
                            <p>${ownerName || "Esperando..."}</p>
                            <p>${guestDisplayName}</p>
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