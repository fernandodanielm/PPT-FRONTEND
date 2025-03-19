import { ref, onValue, off } from "firebase/database";
import { state, stateFunctions } from "../state";
import { router } from "../router";
import { database } from "./rtdb"; // Importa database desde el frontend SDK

async function updateGameState(data: any) {
    const { owner, guest, scoreboard } = data || {};
    const currentState = stateFunctions.getState(); // Usa stateFunctions.getState()

    // Actualiza las propiedades guest, owner y scoreboard
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
    const data = snapshot.val();
    await updateGameState(data);
    if (areBothChoicesMade()) { // Usa la función areBothChoicesMade
        // En el unico caso que voy es si ambos ya seleccionaron
        const currentState = stateFunctions.getState(); // Usa stateFunctions.getState()
        const rtdbRoomId = currentState.rtdbRoomId;
        const dbRef = ref(database, `roomsPPT/${rtdbRoomId}`);
        off(dbRef, "value", onValueCallbackChoice);
        router.goTo("/game"); // Usa router.goTo
    }
};

export function initFirebase() {
    // Inicializa Firebase y espera el nuevo estado para ver si ya hubo seleccion del otro player
    const currentState = stateFunctions.getState(); // Usa stateFunctions.getState()
    const rtdbRoomId = currentState.rtdbRoomId;
    const dbRef = ref(database, `roomsPPT/${rtdbRoomId}`);
    onValue(dbRef, onValueCallbackChoice);
}

// Función para verificar si ambos jugadores han hecho sus elecciones
function areBothChoicesMade(): boolean {
    const currentState = stateFunctions.getState();
    return currentState.currentGame?.data.player1Move !== null && currentState.currentGame?.data.player2Move !== null;
}