// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5jrq6D7zEK_KZuKLvbEsg9fOTAejOQKw",
  authDomain: "myballbnotes.firebaseapp.com",
  projectId: "myballbnotes",
  storageBucket: "myballbnotes.firebasestorage.app",
  messagingSenderId: "310299141154",
  appId: "1:310299141154:web:86abc79f6468ea55b8567b",
  measurementId: "G-14MW7L628Y"
};
// This is the unique identifier for your app's data in Firestore.
// It's important to use a consistent, unique string here.
const APP_ID = 1:310299141154:web:86abc79f6468ea55b8567b;

let db, auth;

/**
 * Initializes Firebase and sets up the Firestore and Auth instances.
 */
function initializeFirebase() {
    try {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);
    } catch (error) {
        console.error("Error initializing Firebase:", error);
    }
}

export { initializeFirebase, db, auth, APP_ID };
