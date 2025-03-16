// rtdb.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBqoATuWSOg3ZDbSBOsvLiww1xc5xLSxak",
    authDomain: "desafio-ppt-e6f00.firebaseapp.com",
    databaseURL: "https://desafio-ppt-e6f00-default-rtdb.firebaseio.com",
    projectId: "desafio-ppt-e6f00",
    storageBucket: "desafio-ppt-e6f00.firebasestorage.app",
    messagingSenderId: "1005620596792",
    appId: "1:1005620596792:web:186bd21929786d9e1f16cd",
    measurementId: "G-QYCNTVFR3L"
  };

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);

// Inicializa Realtime Database
export const rtdb = getDatabase(app);