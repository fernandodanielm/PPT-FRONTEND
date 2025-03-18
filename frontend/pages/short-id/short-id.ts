// short-id.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import { rtdb } from "../../utils/rtdb";
import { ref, onValue, get } from "firebase/database";
import { router } from "../../router";

// Define la interfaz Game (asegúrate de que coincida con tu definición real)
interface Game {
    roomId: string; // Asegúrate de que roomId siempre sea string si es tu intención
    data: any;
    statistics?: {
        player1: { wins: number; losses: number; draws: number };
        player2: { wins: number; losses: number; draws: number };
    } | null;
}

export class ShortId extends HTMLElement {
    unsubscribe: (() => void) | null = null;
    shadow: ShadowRoot;
    roomId: string | null = null;
    loading: boolean = true; // Estado de carga

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        try {
            let roomId = stateFunctions.getState().currentGame?.roomId;
            console.log("ShortId connectedCallback - roomId from state:", roomId);

            if (!roomId) {
                console.warn("ShortId connectedCallback - roomId no encontrado en el estado. Intentando obtenerlo del URL...");
                const path = window.location.pathname;
                const pathParts = path.split('/');
                roomId = pathParts[2]; // Asumiendo que la ruta es /short-id/{roomId}
                console.log("ShortId connectedCallback - roomId from URL (window.location):", roomId);

                if (roomId) {
                    stateFunctions.setRoomId(roomId); // Actualiza el estado con el roomId del URL
                } else {
                    console.error("ShortId connectedCallback - No se pudo obtener roomId.");
                    this.loading = false;
                    this.render(); // Renderiza para mostrar un posible mensaje de error
                    return;
                }
            }

            // 2. Obtén los datos de la sala utilizando el roomId actual del estado
            if (state.roomId) {
                const roomData = await this.getRoomData(state.roomId);
                console.log("ShortId connectedCallback - roomData:", roomData);

                // Asegúrate de que currentGame siempre tenga un roomId string
                const currentGameUpdate: Partial<Game> = {
                    roomId: state.roomId,
                    data: roomData ? roomData.games?.current : { player1Name: null, player2Name: null }, // Accede a games?.current
                    statistics: roomData?.games?.current?.statistics || { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
                };

                stateFunctions.setState({
                    currentGame: {
                        ...stateFunctions.getState().currentGame,
                        ...currentGameUpdate as any, // Type assertion para evitar el error (revisa tu tipo State)
                    },
                });
            } else {
                console.error("ShortId connectedCallback - state.roomId no está definido antes de getRoomData.");
                this.loading = false;
                this.render();
                return;
            }

            this.loading = false; // Cambiar estado de carga a false
            this.render(); // Renderiza después de cargar los datos iniciales
            this.listenRoomChanges(); // Llamar a listenRoomChanges aquí
        } catch (error) {
            console.error("ShortId connectedCallback - Error:", error);
            this.loading = false;
            this.render(); // Renderiza para mostrar un posible mensaje de error
        }
    }

    async getRoomData(roomId: string) {
        if (!roomId) {
            console.error("ShortId getRoomData - No se proporcionó roomId.");
            return null;
        }
        const roomRef = ref(rtdb, `rooms/${roomId}`);
        try {
            const snapshot = await get(roomRef);
            const data = snapshot.val();
            console.log("ShortId getRoomData - Datos obtenidos:", data);
            return data;
        } catch (error) {
            console.error("ShortId getRoomData - Error al obtener datos:", error);
            return null;
        }
    }

    disconnectedCallback() {
        this.unsubscribeFromState();
        this.stopListeningRoomChanges();
    }

    listenRoomChanges() {
        if (!state.roomId) {
            console.error("ShortId listenRoomChanges - No hay roomId para escuchar.");
            return;
        }

        const roomRef = ref(rtdb, `rooms/${state.roomId}`);
        onValue(roomRef, (snapshot) => {
            const data = snapshot.val();
            console.log("ShortId listenRoomChanges - Datos recibidos de la base de datos:", data);

            if (data && data.users) {
                const users = Object.values(data.users);
                if (users.length === 1) {
                    const player1 = users[0] as { userName: string, id: string };
                    stateFunctions.setPlayer1Name(player1.userName, player1.id); // Pasar userId
                    stateFunctions.setPlayer2Name(null, null);
                    stateFunctions.setState({
                        ...state,
                        currentGame: {
                            ...state.currentGame,
                            roomId: state.roomId, // Asegúrate de que roomId esté aquí
                            data: { ...state.currentGame?.data, player1Name: player1.userName, player2Name: null, player1Play: data.games?.current?.ownerPlay, player2Play: data.games?.current?.guestPlay, gameOver: data.games?.current?.gameOver },
                        },
                    });
                } else if (users.length === 2) {
                    const player1 = users[0] as { userName: string, id: string };
                    const player2 = users[1] as { userName: string, id: string };
                    stateFunctions.setPlayer1Name(player1.userName, player1.id); // Pasar userId
                    stateFunctions.setPlayer2Name(player2.userName, player2.id); // Pasar userId
                    stateFunctions.setState({
                        ...state,
                        currentGame: {
                            ...state.currentGame,
                            roomId: state.roomId, // Asegúrate de que roomId esté aquí
                            data: { ...state.currentGame?.data, player1Name: player1.userName, player2Name: player2.userName, player1Play: data.games?.current?.ownerPlay, player2Play: data.games?.current?.guestPlay, gameOver: data.games?.current?.gameOver },
                        },
                    });
                }
                console.log("ShortId listenRoomChanges - Estado actualizado con users:", state);
                this.render(); // Renderiza cada vez que hay un cambio en la sala
            } else {
                console.warn("ShortId listenRoomChanges - Datos de sala incompletos o nulos:", data);
            }
        }, (error) => {
            console.error("ShortId listenRoomChanges - Error al escuchar la sala:", error);
        });
    }

    stopListeningRoomChanges() {
        if (this.roomId) {
            // Detener la escucha (esto puede requerir guardar la función de unsubscribe de onValue)
            // Por ahora, simplemente evitamos errores si roomId no está definido
        }
    }

    subscribeToState() {
        this.unsubscribe = stateFunctions.subscribe(() => {
            this.render();
        });
    }

    unsubscribeFromState() {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
        }
    }

    render() {
        const currentState = stateFunctions.getState();
        const currentGame = currentState.currentGame;

        let player1Name = "Esperando Jugador 1";
        let player2Name = "Esperando Jugador 2";
        let player1InputName = currentState.player1Name;
        let player2InputName = currentState.player2Name || "Esperando Jugador 2";
        let currentRoomId = currentState.roomId;

        if (currentGame && currentGame.data) {
            player1Name = currentGame.data.player1Name || "Esperando Jugador 1";
            player2Name = currentGame.data.player2Name || "Esperando Jugador 2";
        }

        this.shadow.innerHTML = `
            <style>
                .container {
                    background-image: url(${backgroundImage});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    font-family: sans-serif;
                    color: #333;
                }
                .players-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .players {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    text-align: center;
                }
                .player-names {
                    font-size: 18px;
                    text-align: center;
                }
                .room-info {
                    font-size: 16px;
                    margin-bottom: 20px;
                    text-align: center;
                }
                .instructions-button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .instructions-button:hover {
                    background-color: #3e8e41;
                }
                .loading-container {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                }
                .error-message {
                    font-size: 18px;
                    color: red;
                    margin-top: 20px;
                    text-align: center;
                }
            </style>
            <div class="container">
                ${this.loading ? `
                    <div class="loading-container">
                        <h1>Cargando...</h1>
                    </div>
                ` : currentState.roomId ? `
                    <div class="players-container">
                        <div class="players">
                            ${player1Name} vs ${player2Name}
                        </div>
                        <div class="player-names">
                            ${player1InputName} <br> ${player2InputName}
                        </div>
                    </div>
                    <div class="room-info">
                        Room ID: ${currentRoomId}
                    </div>
                    <button id="instructions-button" class="instructions-button">
                        Instrucciones
                    </button>
                ` : `
                    <div class="error-message">
                        No se pudo cargar la información de la sala. Verifica el código.
                    </div>
                `}
            </div>
        `;

        const instructionsButton = this.shadow.getElementById("instructions-button");
        if (instructionsButton) {
            instructionsButton.addEventListener("click", () => {
                router.goTo("/instructions");
            });
        }
    }

    determinePlayerNumber(userId: string): 1 | 2 {
        // Implementar lógica para determinar playerNumber basado en userId
        // Ejemplo:
        // if (userId === state.id) {
        //     return 2;
        // }
        return 1;
    }
}

customElements.define("short-id-page", ShortId);