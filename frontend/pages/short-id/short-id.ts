// short-id.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import { rtdb } from "../../utils/rtdb";
import { ref, onValue, get } from "firebase/database";
import { router } from "../../router";

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
            const roomData = await this.getRoomData();
            let roomId = stateFunctions.getState().currentGame?.roomId;
            if (!roomId) {
                roomId = "";
            }

            stateFunctions.setState({
                currentGame: {
                    ...stateFunctions.getState().currentGame,
                    roomId: roomId,
                    data: roomData,
                    statistics: roomData.statistics,
                },
            });
            this.loading = false; // Cambiar estado de carga a false
            this.listenRoomChanges(); // Llamar a listenRoomChanges aquí
        } catch (error) {
            console.error("Error al obtener roomData:", error);
        }
    }

    async getRoomData() {
        // Implementar lógica real para obtener datos de la sala
        const roomRef = ref(rtdb, `rooms/${state.roomId}`);
        const snapshot = await get(roomRef);
        const data = snapshot.val();
        return data;
    }

    disconnectedCallback() {
        this.unsubscribeFromState();
        this.stopListeningRoomChanges();
    }

    listenRoomChanges() {
      if (!state.roomId) {
          console.error("No hay roomId para escuchar.");
          return;
      }
  
      const roomRef = ref(rtdb, `rooms/${state.roomId}`);
      onValue(roomRef, (snapshot) => {
          const data = snapshot.val();
          console.log("Datos recibidos de la base de datos:", data);
  
          if (data && data.users) {
              const users = Object.values(data.users);
              if (users.length === 1) {
                  const player1 = users[0] as { userName: string, id: string };
                  stateFunctions.setPlayer1Name(player1.userName, player1.id); // Pasar userId
                  stateFunctions.setPlayer2Name(null, player1.id); // Pasar userId
                  stateFunctions.setState({
                      ...state,
                      currentGame: {
                          roomId: state.roomId,
                          data: { player1Name: player1.userName, player2Name: null, player1Play: data.player1Move, player2Play: data.player2Move, gameOver: data.gameOver },
                          statistics: { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
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
                          roomId: state.roomId,
                          data: { player1Name: player1.userName, player2Name: player2.userName, player1Play: data.player1Move, player2Play: data.player2Move, gameOver: data.gameOver },
                          statistics: { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
                      },
                  });
              }
              console.log("Estado actualizado con users:", state);
          } else {
              console.error("Datos de sala incompletos o nulos:", data);
          }
      }, (error) => {
          console.error("Error al escuchar la sala:", error);
      });
  }

    stopListeningRoomChanges() {
        if (this.roomId) {
            onValue(ref(rtdb, `rooms/${this.roomId}/currentGame/data`), () => { });
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

        if (currentGame && currentGame.data) {
            player1Name = currentGame.data.player1Name || "Esperando Jugador 1";
            player2Name = currentGame.data.player2Name || "Esperando Jugador 2";
        }

        if (this.loading) {
            this.shadow.innerHTML = `
                <style>
                    .loading-container {
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                </style>
                <div class="loading-container">
                    <h1>Cargando...</h1>
                </div>
            `;
        } else {
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
                    }
                    .player-names {
                        font-size: 18px;
                        text-align: center;
                    }
                    .room-info {
                        font-size: 16px;
                        margin-bottom: 20px;
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
                </style>
                <div class="container">
                    <div class="players-container">
                        <div class="players">
                            ${player1Name} vs ${player2Name}
                        </div>
                        <div class="player-names">
                            ${player1InputName} <br> ${player2InputName}
                        </div>
                    </div>
                    <div class="room-info">
                        Room ID: ${currentState.roomId}
                    </div>
                    <button id="instructions-button" class="instructions-button">
                        Instrucciones
                    </button>
                </div>
            `;

            const instructionsButton = this.shadow.getElementById("instructions-button");
            if (instructionsButton) {
                instructionsButton.addEventListener("click", () => {
                    router.goTo("/instructions");
                });
            }
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