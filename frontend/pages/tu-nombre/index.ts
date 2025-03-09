import { state } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";

export class TuNombre extends HTMLElement {
    roomId: string | null = null;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const pathSegments = window.location.pathname.split('/');
        this.roomId = pathSegments[pathSegments.length - 1] || null; // Obtener el roomId de la URL
        this.render();
    }

    render() {
        if (!this.shadowRoot) {
            return;
        }

        this.shadowRoot.innerHTML = `
            <div class="tu-nombre-container">
                <h2>Ingresa tu nombre</h2>
                <form class="nombre-form">
                    <input type="text" name="nombre" placeholder="Tu nombre">
                    <button class="button" type="submit">Unirse a la sala</button>
                </form>
            </div>
        `;

        const form = this.shadowRoot.querySelector(".nombre-form") as HTMLFormElement;
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const nombre = (form.nombre as any).value;
            if (this.roomId) {
                try {
                    const response = await fetch(
                        `https://ppt-backend-three.vercel.app/api/rooms/${this.roomId}/join`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ playerName: nombre }),
                        }
                    );

                    if (!response.ok) {
                        console.error("Error al unirse a la sala:", response.statusText);
                        alert("Hubo un error al unirse a la sala. Inténtalo de nuevo.");
                        return;
                    }

                    const data = await response.json();
                    const playerNumber = data.playerNumber;

                    state.setPlayerName(nombre);

                    if (playerNumber === 1) {
                        (window as any).goTo(`/short-id/${this.roomId}`);
                    } else {
                        (window as any).goTo("/instructions");
                    }
                } catch (error) {
                    console.error("Error al unirse a la sala:", error);
                    alert("Hubo un error al unirse a la sala. Inténtalo de nuevo.");
                }
            }
        });

        const style = document.createElement("style");
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

            .tu-nombre-container {
                background-image: url(${backgroundImage});
                background-size: cover;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                text-align: center;
                font-family: 'Odibee Sans', cursive;
            }

            h2 {
                font-size: 36px;
                margin-bottom: 30px;
                color: #333;
            }

            .nombre-form {
                display: flex;
                flex-direction: column;
                width: 80%;
                max-width: 400px;
            }

            input[type="text"] {
                padding: 15px;
                margin-bottom: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 16px;
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
                font-family: 'Odibee Sans', cursive;
            }

            .button:hover {
                background-color: #0056b3;
            }

            @media (min-width: 768px) {
                h2 {
                    font-size: 48px;
                }

                .nombre-form {
                    width: 60%;
                }

                input[type="text"] {
                    font-size: 20px;
                }

                .button {
                    width: 400px;
                    height: 100px;
                    font-size: 32px;
                }
            }
        `;
        this.shadowRoot.appendChild(style);
    }
}

customElements.define("tu-nombre", TuNombre);