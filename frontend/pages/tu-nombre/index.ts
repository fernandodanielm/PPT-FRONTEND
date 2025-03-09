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
            /* ... (estilos CSS) ... */
        `;
        this.shadowRoot.appendChild(style);
    }
}

customElements.define("tu-nombre", TuNombre);