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
    player1Name: string | null;
    player2Name: string | null;
    roomId: string;
    currentGame: Game | null;
    playerNumber: 1 | 2 | undefined;
    id: string | null;
    rtdbRoomId: string;
    setCurrentGame: (game: Game | null) => void;
    player1Id: string | null;
    player2Id: string | null;
};

const state: State = {
    player1Name: null,
    player2Name: null,
    roomId: "",
    currentGame: null, // Inicializado como null
    playerNumber: undefined,
    id: null,
    rtdbRoomId: "",
    setCurrentGame: (game: Game | null) => {
        state.currentGame = game;
    },
    player1Id: null,
    player2Id: null,
};

const listeners: ((currentState: State) => void)[] = [];

const stateFunctions = {
    getState() {
        if (!state.currentGame) {
            state.currentGame = {
                roomId: state.roomId || "", // Asegurar que roomId sea string
                data: {
                    player1Name: null,
                    player2Name: null,
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
            // La ruta ahora apunta a la partida actual dentro del nodo 'games' de la sala
            const roomRef = ref(rtdb, `rooms/${roomId}/games/current`);
            const snapshot = await get(roomRef);
            const roomData = snapshot.val();
            if (roomData) {
                return roomData;
            } else {
                console.error("state.ts:85 No se encontraron datos de la sala (games/current).");
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

        const roomRef = ref(rtdb, `rooms/${state.roomId}/games/current`);

        onValue(roomRef, (snapshot) => {
            const data = snapshot.val();
            console.log("Datos recibidos de la base de datos (games/current):", data);

            if (data) {
                // Ahora los datos del juego (player1Move, player2Move, gameOver) estarán directamente en 'data'
                const player1Name = state.player1Name;
                const player2Name = state.player2Name;

                stateFunctions.setState({
                    ...state,
                    currentGame: {
                        roomId: state.roomId,
                        data: {
                            player1Name: player1Name,
                            player2Name: player2Name,
                            player1Play: data.player1Move,
                            player2Play: data.player2Move,
                            gameOver: data.gameOver,
                        },
                        statistics: state.currentGame?.statistics || { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
                    },
                });
                console.log("Estado del juego actualizado:", state.currentGame);
            } else {
                console.error("Datos de la partida actual incompletos o nulos en games/current:", data);
            }
        }, (error) => {
            console.error("Error al escuchar la sala (games/current):", error);
        });

        // También podrías querer escuchar los cambios en los usuarios de la sala (si aún lo necesitas)
        const usersRef = ref(rtdb, `rooms/${state.roomId}/users`);
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const usersData = Object.values(data);
                const users: { userName: string | null, role: string, id: string }[] = [];

                usersData.forEach(userData => {
                    if (
                        typeof userData === 'object' &&
                        userData !== null &&
                        'userName' in userData &&
                        'role' in userData &&
                        'id' in userData
                    ) {
                        users.push({
                            userName: userData.userName as string | null,
                            role: userData.role as string,
                            id: userData.id as string,
                        });
                    } else {
                        console.warn("Datos de usuario con estructura inesperada:", userData);
                    }
                });

                if (users.length === 1) {
                    const player1 = users[0];
                    stateFunctions.setPlayer1Name(player1.userName, player1.id);
                    stateFunctions.setPlayer2Name(null, null);
                    stateFunctions.setPlayerNumber(state.id === player1.id ? 1 : undefined);
                } else if (users.length === 2) {
                    const player1 = users.find(user => user.role === 'owner');
                    const player2 = users.find(user => user.role === 'guest');
                    if (player1 && player2) {
                        stateFunctions.setPlayer1Name(player1.userName, player1.id);
                        stateFunctions.setPlayer2Name(player2.userName, player2.id);
                        stateFunctions.setPlayerNumber(state.id === player1.id ? 1 : (state.id === player2.id ? 2 : undefined));
                    }
                } else {
                    stateFunctions.setPlayer1Name(null, null);
                    stateFunctions.setPlayer2Name(null, null);
                    stateFunctions.setPlayerNumber(undefined);
                }
                console.log("Estado actualizado con users:", state);
            } else {
                console.log("No hay usuarios en la sala.");
                stateFunctions.setPlayer1Name(null, null);
                stateFunctions.setPlayer2Name(null, null);
                stateFunctions.setPlayerNumber(undefined);
            }
        });
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
            const gameRef = ref(rtdb, `rooms/${roomId}/games/current`);
            const updateData = playerNumber === 1 ? { player1Move: move } : { player2Move: move };
            await update(gameRef, updateData);
            console.log("Movimiento enviado con éxito");
        } catch (error) {
            console.error("Error al enviar el movimiento:", error);
        }
    },
    setId: (id: string | null) => {
        stateFunctions.setState({ id });
    },
    setPlayer1Name: (name: string | null, id: string | null) => {
        stateFunctions.setState({ player1Name: name, player1Id: id });
    },
    setPlayer2Name: (name: string | null, id: string | null) => {
        stateFunctions.setState({ player2Name: name, player2Id: id });
    },
    setPlayerNumber: (number: 1 | 2 | undefined) => {
        stateFunctions.setState({ playerNumber: number });
    },
    setRoomId: (roomId: string) => {
        stateFunctions.setState({ roomId });
    },
    saveRoomData: async (ownerId: string | null, ownerName: string | null, guestId: string | null, guestName: string | null, roomId?: string) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/guardardatos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ownerId, ownerName, guestId, guestName, roomId }),
            });
            if (!response.ok) {
                console.error("Error al guardar datos en el backend:", response.status);
                return null;
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error de red al guardar datos:", error);
            return null;
        }
    },
};

export { state, stateFunctions };