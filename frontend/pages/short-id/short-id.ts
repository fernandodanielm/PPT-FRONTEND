// short-id.ts
import backgroundImage from "../../assets/piedrapapelotijera.jpg";
import { state, stateFunctions } from "../../state";
import { rtdb } from "../../utils/rtdb";
import { ref, onValue } from "firebase/database";

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
    this.roomId = stateFunctions.getState().roomId;
    if (this.roomId) {
      try {
        const roomData = await stateFunctions.getRoomData(this.roomId);
        if (roomData) {
          stateFunctions.setState({
            ...stateFunctions.getState(),
            currentGame: {
              ...stateFunctions.getState().currentGame,
              data: roomData,
              statistics: roomData.statistics,
            },
          });
        } else {
          console.error("short-id.ts:33 No se encontraron datos de la sala.");
        }
      } catch (error) {
        console.error("Error al obtener datos de la sala:", error);
      }
      this.listenRoomChanges(this.roomId);
    }
    this.loading = false; // Datos iniciales cargados
    this.render();
    this.subscribeToState();
  }

  disconnectedCallback() {
    this.unsubscribeFromState();
    this.stopListeningRoomChanges();
  }

  // short-id.ts
// ... (resto del código)

listenRoomChanges(roomId: string) {
  onValue(ref(rtdb, `rooms/${roomId}/users`), (snapshot) => {
    const usersData = snapshot.val();
    if (usersData) {
      const users = Object.values(usersData);
      if (users.length === 1) {
        const player1 = users[0] as { userName: string };
        stateFunctions.setState({
          ...stateFunctions.getState(),
          player1Name: player1.userName,
          player2Name: null,
          currentGame: {
            data: { player1Name: player1.userName, player2Name: null, player1Play: null, player2Play: null, gameOver: false },
            statistics: { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
          },
        });
      } else if (users.length === 2) {
        const player1 = users[0] as { userName: string };
        const player2 = users[1] as { userName: string };
        stateFunctions.setState({
          ...stateFunctions.getState(),
          player1Name: player1.userName,
          player2Name: player2.userName,
          currentGame: {
            data: { player1Name: player1.userName, player2Name: player2.userName, player1Play: null, player2Play: null, gameOver: false },
            statistics: { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
          },
        });
      }
      this.render();
    } else {
      console.error("short-id.ts:64 Error: datos de la sala no válidos.");
    }
  });
}

// ... (resto del código)

  stopListeningRoomChanges() {
    if (this.roomId) {
      onValue(ref(rtdb, `rooms/${this.roomId}/currentGame/data`), () => {});
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
          window.location.href = "/instructions";
        });
      }
    }
  }
}

customElements.define("short-id-page", ShortId);