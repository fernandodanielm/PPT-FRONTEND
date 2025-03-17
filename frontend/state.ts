import { ref, onValue, push, update, get } from "firebase/database";
import { rtdb } from "./utils/rtdb";

const API_BASE_URL = "https://ppt-backend-1.onrender.com"; // Reemplaza con la URL de tu backend

export type Jugada = "piedra" | "papel" | "tijera";

export interface Game {
    roomId: string;
    data: any;
    statistics?: {
        player1: { wins: number; losses: number; draws: number };
        player2: { wins: number; losses: number; draws: number };
    } | null;
}

type State = {
    player1Name: string;
    player2Name: string | null;
    roomId: string;
    currentGame: Game | null;
    playerNumber: 1 | 2;
    id: string | null;
    rtdbRoomId: string;
    setCurrentGame: (game: Game | null) => void;
};

const state: State = {
    player1Name: "",
    player2Name: null,
    roomId: "",
    currentGame: null, // Inicializado como null
    playerNumber: 1,
    id: null,
    rtdbRoomId: "",
    setCurrentGame: (game: Game | null) => {
        state.currentGame = game;
    },
};

const listeners: ((currentState: State) => void)[] = [];

const stateFunctions = {
    getState() {
        if (!state.currentGame) {
            state.currentGame = {
                roomId: state.roomId || "", // Asegurar que roomId sea string
                data: {
                    player1Name: "",
                    player2Name: "",
                    player1Play: null,
                    player2Play: null,
                    gameOver: false,
                },
                statistics: {
                    player1: { wins: 0, losses: 0, draws: 0 },
                    player2: { wins: 0, losses: 0, draws: 0 },
                },
            };
        }
        return state;
    },
    setState(newState: Partial<State>) {
        const updatedState = { ...state, ...newState };
        Object.assign(state, updatedState);
        for (const cb of listeners) {
            cb(state);
        }
        console.log("State actualizado:", state);
    },
    subscribe(callback: (currentState: State) => void) {
        listeners.push(callback);
        return () => {
            const index = listeners.indexOf(callback);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        };
    },
    async getRoomData(roomId: string) {
        try {
            console.log("getRoomData buscando roomId:", roomId);
            const roomRef = ref(rtdb, `games/${roomId}`);
            const snapshot = await get(roomRef);
            const roomData = snapshot.val();
            if (roomData) {
                return roomData;
            } else {
                console.error("state.ts:85 No se encontraron datos de la sala.");
                return null;
            }
        } catch (error) {
            console.error("Error al obtener datos de la sala:", error);
            return null;
        }
    },

    listenRoom() {
        if (!state.roomId) {
            console.error("No hay roomId para escuchar.");
            return;
        }
    
        const roomRef = ref(rtdb, `games/${state.roomId}`);
    
        onValue(roomRef, (snapshot) => {
            const data = snapshot.val();
            console.log("Datos recibidos de la base de datos:", data);
    
            if (data && data.users) {
                const users = Object.values(data.users);
                if (users.length === 1) {
                    const player1 = users[0] as { userName: string, role: string, id: string };
                    stateFunctions.setPlayer1Name(player1.userName, player1.id);
                    stateFunctions.setPlayer2Name(null, player1.id);
                    stateFunctions.setState({
                        ...state,
                        playerNumber: state.id === player1.id ? 1 : undefined, // Cambiar null a undefined
                        currentGame: {
                            roomId: state.roomId,
                            data: { player1Name: player1.userName, player2Name: null, player1Play: data.player1Move, player2Play: data.player2Move, gameOver: data.gameOver },
                            statistics: { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
                        },
                    });
                } else if (users.length === 2) {
                    const player1 = users[0] as { userName: string, role: string, id: string };
                    const player2 = users[1] as { userName: string, role: string, id: string };
    
                    let playerNumber: 1 | 2 = 1;
                    if (state.id === player2.id) {
                        playerNumber = 2;
                    }
    
                    stateFunctions.setPlayer1Name(player1.userName, player1.id);
                    stateFunctions.setPlayer2Name(player2.userName, player2.id);
                    stateFunctions.setState({
                        ...state,
                        playerNumber: playerNumber,
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
    },
    setPlayer1Name(player1Name: string, userId: string) {
        // Lógica para determinar playerNumber basado en userId
        const playerNumber = this.determinePlayerNumber(userId);
        this.setState({ player1Name, playerNumber });
    },

    setPlayer2Name(player2Name: string | null, userId: string) {
        // Lógica para determinar playerNumber basado en userId
        const playerNumber = this.determinePlayerNumber(userId);
        this.setState({ player2Name, playerNumber });
    },
    determinePlayerNumber(userId: string): 1 | 2 {
        // Implementa la lógica para determinar playerNumber basado en userId
        // Ejemplo:
        if (userId === state.id) {
            return 2;
        }
        return 1;
    },

    setRoomId(roomId: string) {
        this.setState({ roomId });
    },

    setId(id: string | null) {
        this.setState({ id: id });
    },
    async createUser(nombre: string): Promise<string> {
        const newUserRef = push(ref(rtdb, "users"));
        await update(newUserRef, { nombre });
        return newUserRef.key!;
    },

    async saveRoomData(ownerId: string | null, ownerName: string | null, guestId?: string, guestName?: string, roomId?: string): Promise<string | undefined> {
        try {
            const response = await fetch(`${API_BASE_URL}/api/guardardatos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ownerId, ownerName, guestId, guestName, roomId }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.roomId;
        } catch (error) {
            console.error("Error al guardar datos de la sala:", error);
            return undefined;
        }
    },

    async setMove(move: Jugada) {
        const currentState = stateFunctions.getState();
        const roomId = currentState.roomId;
        const playerNumber = currentState.playerNumber;

        if (!roomId) {
            console.error("No se encontró el roomId");
            return;
        }

        try {
            const gameRef = ref(rtdb, `games/${roomId}`);
            const updateData = playerNumber === 1 ? { player1Move: move } : { player2Move: move };
            await update(gameRef, updateData);
            console.log("Movimiento enviado con éxito");
        } catch (error) {
            console.error("Error al enviar el movimiento:", error);
        }
    }
};

export { state, stateFunctions };