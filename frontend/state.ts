type Play = "piedra" | "papel" | "tijera";

type GameData = {
  player1Name: string;
  player2Name: string;
  player1Play: Play | null;
  player2Play: Play | null;
  statistics: {
    [playerName: string]: {
      wins: number;
      losses: number;
      draws: number;
    };
  };
  gameOver: boolean;
  readyForNextRound: boolean;
};

type State = {
  currentGame: {
    data: GameData;
    shortId: string | null;
  };
  listeners: ((currentState: State) => void)[]; // Definido correctamente como un array de funciones
  getState: () => State;
  setState: (newState: State) => void;
  subscribe: (callback: (currentState: State) => void) => void;
  setPlayerName: (name: string) => void;
  createRoom: () => Promise<string>;
  joinRoom: (roomId: string, playerName: string) => Promise<number>;
  setMove: (roomId: string, playerNumber: number, move: Play) => Promise<void>;
  resetGame: () => Promise<void>;
};

const state: State = {
  currentGame: {
    data: {
      player1Name: "",
      player2Name: "",
      player1Play: null,
      player2Play: null,
      statistics: {
        player1: { wins: 0, losses: 0, draws: 0 },
        player2: { wins: 0, losses: 0, draws: 0 },
      },
      gameOver: false,
      readyForNextRound: false,
    },
    shortId: null,
  },
  listeners: [], // Inicializado correctamente como un array vacío
  getState() {
    return this;
  },
  setState(newState: State) {
    this.currentGame = newState.currentGame;
    for (const cb of this.listeners) {
      cb(newState); // Ejecuta cada función de los listeners
    }
  },
  subscribe(callback: (currentState: State) => void) {
    this.listeners.push(callback); // Añade la función al array de listeners
  },
  setPlayerName(name: string) {
    const currentState = this.getState();
    currentState.name = name;
    this.setState(currentState);
},
  async createRoom() {
    const response = await fetch("https://ppt-backend-three.vercel.app/api/rooms", { // URL actualizada
      method: "POST",
    });
    const data = await response.json();
    const currentState = state.getState();
    currentState.currentGame.shortId = data.roomId;
    state.setState(currentState);
    return data.roomId;
  },
  async joinRoom(roomId: string, playerName: string) {
    const response = await fetch(`https://ppt-backend-three.vercel.app/api/rooms/${roomId}/join`, { // URL actualizada
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playerName }),
    });
    const data = await response.json();
    return data.playerNumber;
  },
  async setMove(roomId: string, playerNumber: number, move: Play) {
    await fetch(`https://ppt-backend-three.vercel.app/api/rooms/${roomId}/move`, { // URL actualizada
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playerNumber, move }),
    });
  },
  async resetGame() {
    const currentState = this.getState();
    const roomId = currentState.currentGame.shortId;
    if (roomId) {
      try {
        const response = await fetch(`https://ppt-backend-three.vercel.app/api/rooms/${roomId}/reset`, { // URL actualizada
          method: "PUT",
        });

        if (!response.ok) {
          throw new Error(`Error al reiniciar la sala: ${response.statusText}`);
        }

        // Restablecer los valores del estado local
        currentState.currentGame.data = {
          player1Name: "",
          player2Name: "",
          player1Play: null,
          player2Play: null,
          statistics: {
            player1: { wins: 0, losses: 0, draws: 0 },
            player2: { wins: 0, losses: 0, draws: 0 },
          },
          gameOver: false,
          readyForNextRound: false,
        };
        this.setState(currentState);
      } catch (error) {
        console.error("Error al reiniciar la sala:", error);
        // Mostrar un mensaje de error al usuario
        alert("Hubo un error al reiniciar la sala. Inténtalo de nuevo.");
      }
    }
  },
};

export { state, Play };
