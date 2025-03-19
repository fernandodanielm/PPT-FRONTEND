import { ref, onValue, off } from "firebase/database";
import { state, stateFunctions } from "../state";
import { router } from "../router";
import { database } from "./rtdb";

async function updateGameState(data: any) {
    const { owner, guest, scoreboard } = data || {};
    const currentState = stateFunctions.getState();

    stateFunctions.setState({
        owner: {
            ...currentState.owner,
            ...owner,
        },
        guest: {
            ...currentState.guest,
            ...guest,
        },
        scoreboard: {
            ...currentState.scoreboard,
            ...scoreboard,
        },
    });
}

export const onValueCallbackChoice = async (snapshot: any) => {
    try {
        const data = snapshot.val();
        await updateGameState(data);
        console.log("Datos recibidos de Firebase:", data);

        if (areBothChoicesMade()) {
            const currentState = stateFunctions.getState();
            const roomId = currentState.roomId; // Usamos roomId en lugar de rtdbRoomId
            const dbRef = ref(database, `roomsPPT/${roomId}`); // Usamos roomId aquí
            off(dbRef, "value", onValueCallbackChoice);
            console.log("Ambos jugadores han elegido. Navegando a /game.");
            router.goTo("/game");
        }
    } catch (error) {
        console.error("Error en onValueCallbackChoice:", error);
    }
};

export function initFirebase() {
    const currentState = stateFunctions.getState();
    const roomId = currentState.roomId; // Usamos roomId aquí
    const dbRef = ref(database, `roomsPPT/${roomId}`); // Usamos roomId aquí
    console.log("Inicializando Firebase con roomId:", roomId);
    onValue(dbRef, onValueCallbackChoice);
}

function areBothChoicesMade(): boolean {
    const currentState = stateFunctions.getState();
    console.log("currentGame?.data:", currentState.currentGame?.data);
    return currentState.currentGame?.data?.player1Move !== null && currentState.currentGame?.data?.player2Move !== null;
}