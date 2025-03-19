// frontend/src/state.ts
import { ref, onValue, push, update, get } from "firebase/database";
import { database } from "./utils/rtdb";
import { v4 as uuidv4 } from 'uuid';

const API_BASE_URL = "https://ppt-backend-1.onrender.com";

export type Jugada = "piedra" | "papel" | "tijera";

export interface Player { // Agrega 'export' aquí
    name: string | null;
    id: string | null;
}

export interface Scoreboard {
    player1: { wins: number; losses: number; draws: number };
    player2: { wins: number; losses: number; draws: number };
}

export interface Game {
    roomId: string;
    data: {
        player1Name: string | null;
        player2Name: string | null;
        player1Move: Jugada | null;
        player2Move: Jugada | null;
        gameOver: boolean;
        result: "draw" | "ownerWins" | "guestWins" | null;
    };
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
    setCurrentGame: (game: Game | null) => void;
    player1Id: string | null;
    player2Id: string | null;
    owner: Player | null;
    guest: Player | null;
    scoreboard: Scoreboard | null;
};

const state: State = {
    player1Name: null,
    player2Name: null,
    roomId: "",
    currentGame: null,
    playerNumber: undefined,
    id: null,
    setCurrentGame: (game: Game | null) => {
        state.currentGame = game;
    },
    player1Id: null,
    player2Id: null,
    owner: null,
    guest: null,
    scoreboard: null,
};

const listeners: ((currentState: State) => void)[] = [];

const stateFunctions = {
    getState() {
        if (!state.currentGame) {
            state.currentGame = {
                roomId: state.roomId || "",
                data: {
                    player1Name: state.player1Name,
                    player2Name: state.player2Name,
                    player1Move: null,
                    player2Move: null,
                    gameOver: false,
                    result: null,
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
            const roomRef = ref(database, `rooms/${roomId}/games/current`);
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
        console.log("Valor de state.roomId al inicio de listenRoom:", state.roomId, typeof state.roomId);
        console.log("state.id:", state.id);
        if (!state.roomId) {
            console.error("No hay roomId para escuchar.");
            return;
        }
    
        const roomRef = ref(database, `rooms/${state.roomId}/games/current`);
    
        onValue(roomRef, (snapshot) => {
            const data = snapshot.val();
            console.log("Datos recibidos de la base de datos (games/current):", data);
    
            if (data) {
                stateFunctions.setState({
                    currentGame: {
                        roomId: state.roomId,
                        data: {
                            player1Name: state.player1Name,
                            player2Name: state.player2Name,
                            player1Move: data.player1Move,
                            player2Move: data.player2Move,
                            gameOver: data.gameOver,
                            result: data.result,
                        },
                        statistics: state.currentGame?.statistics || { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
                    },
                });
                console.log("Estado del juego actualizado:", state.currentGame);
            } else {
                console.log("No hay datos iniciales del juego en games/current.");
            }
        }, (error) => {
            console.error("Error al escuchar la sala (games/current):", error);
        });
    
        const usersRef = ref(database, `rooms/${state.roomId}/users`);
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const usersData = Object.entries(data);
                const users: { userName: string | null, role: string, id: string }[] = [];
    
                usersData.forEach(([userId, userData]) => {
                    if (typeof userData === 'object' && userData !== null && 'userName' in userData && 'role' in userData) {
                        users.push({
                            userName: userData.userName as string | null,
                            role: userData.role as string,
                            id: userId,
                        });
                    } else {
                        console.warn("Datos de usuario con estructura inesperada:", userData);
                    }
                });
    
                console.log("users:", users);
    
                if (users.length === 1) {
                    const player1 = users[0];
                    stateFunctions.setPlayer1Name(player1.userName || null, player1.id);
                    stateFunctions.setPlayer2Name(null, null);
                    stateFunctions.setPlayerNumber(state.id === player1.id ? 1 : undefined);
                    console.log("state.playerNumber (1 usuario):", state.playerNumber);
                } else if (users.length === 2) {
                    const player1 = users.find(user => user.role === 'owner');
                    const player2 = users.find(user => user.role === 'guest');
                    if (player1 && player2) {
                        stateFunctions.setPlayer1Name(player1.userName || null, player1.id);
                        stateFunctions.setPlayer2Name(player2.userName || null, player2.id);
                        if (state.id === player1.id) {
                            stateFunctions.setPlayerNumber(1);
                        } else if (state.id === player2.id) {
                            stateFunctions.setPlayerNumber(2);
                        } else {
                            stateFunctions.setPlayerNumber(undefined);
                        }
                        console.log("state.playerNumber (2 usuarios):", state.playerNumber);
                    }
                } else {
                    stateFunctions.setPlayer1Name(null, null);
                    stateFunctions.setPlayer2Name(null, null);
                    stateFunctions.setPlayerNumber(undefined);
                    console.log("state.playerNumber (otros casos):", state.playerNumber);
                }
                console.log("Estado actualizado con users:", state);
            } else {
                console.log("No hay usuarios en la sala.");
                stateFunctions.setPlayer1Name(null, null);
                stateFunctions.setPlayer2Name(null, null);
                stateFunctions.setPlayerNumber(undefined);
                console.log("state.playerNumber (no hay usuarios):", state.playerNumber);
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
    
        if (playerNumber === undefined) {
            console.error("No se ha asignado un número de jugador.");
            return;
        }
    
        try {
            console.log(`Enviando movimiento: ${move} para el jugador ${playerNumber} en la sala ${roomId}`);
            const response = await fetch(`${API_BASE_URL}/api/rooms/${roomId}/move`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    playerNumber: playerNumber,
                    move: move,
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error al enviar el movimiento:", errorData);
            } else {
                // Actualiza el estado con el movimiento enviado
                if (playerNumber === 1) {
                    stateFunctions.setState({
                        currentGame: {
                            roomId: currentState.currentGame?.roomId ?? "",
                            data: {
                                player1Name: currentState.currentGame?.data.player1Name ?? null,
                                player2Name: currentState.currentGame?.data.player2Name ?? null,
                                player1Move: move,
                                player2Move: currentState.currentGame?.data.player2Move ?? null,
                                gameOver: currentState.currentGame?.data.gameOver ?? false,
                                result: currentState.currentGame?.data.result ?? null,
                            },
                            statistics: currentState.currentGame?.statistics ?? { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
                        },
                    });
                } else if (playerNumber === 2) {
                    stateFunctions.setState({
                        currentGame: {
                            roomId: currentState.currentGame?.roomId ?? "",
                            data: {
                                player1Name: currentState.currentGame?.data.player1Name ?? null,
                                player2Name: currentState.currentGame?.data.player2Name ?? null,
                                player1Move: currentState.currentGame?.data.player1Move ?? null,
                                player2Move: move,
                                gameOver: currentState.currentGame?.data.gameOver ?? false,
                                result: currentState.currentGame?.data.result ?? null,
                            },
                            statistics: currentState.currentGame?.statistics ?? { player1: { wins: 0, losses: 0, draws: 0 }, player2: { wins: 0, losses: 0, draws: 0 } },
                        },
                    });
                }
                console.log("Movimiento enviado con éxito.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    },
    setRoomId: (roomId: string) => {
        state.roomId = roomId;
        stateFunctions.setState(state); // Actualiza el estado
      },
    setId: (id: string | null) => {
        stateFunctions.setState({ id });
    },
    setPlayer1Name(name: string | null, id: string | null) {
        stateFunctions.setState({ player1Name: name, player1Id: id });
    },
    setPlayer2Name(name: string | null, id: string | null) {
        stateFunctions.setState({ player2Name: name, player2Id: id });
    },
    setPlayerNumber(number: 1 | 2 | undefined) {
        stateFunctions.setState({ playerNumber: number });
    },
    async saveRoomData(ownerId: string | null, ownerName: string | null, guestId: string | null, guestName: string | null, roomId?: string) {
        try {
            console.log("Enviando petición para guardar datos:", { ownerId, ownerName, guestId, guestName, roomId });
            const response = await fetch(`${API_BASE_URL}/api/guardardatos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ownerId, ownerName, guestId, guestName, roomId }),
            });
            if (!response.ok) {
                console.error("Error al guardar datos en el backend:", response.status, await response.text());
                return null;
            }
            const data = await response.json();
            console.log("Respuesta del backend al guardar datos:", data);
            return data;
        } catch (error) {
            console.error("Error de red al guardar datos:", error);
            return null;
        }
    },
    async resetGame(roomId: string | null) {
        if (!roomId) {
            console.error("resetGame - No se proporcionó roomId.");
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/api/rooms/${roomId}/reset`, {
                method: 'POST',
            });
            if (!response.ok) {
                console.error("resetGame - Error al resetear la sala:", response.status);
            } else {
                const data = await response.json();
                console.log("resetGame - Sala reseteada:", data);
            }
        } catch (error) {
            console.error("resetGame - Error de red al resetear la sala:", error);
        }
    },
};

export { state, stateFunctions };