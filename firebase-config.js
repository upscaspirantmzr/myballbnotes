// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// IMPORTANT: Replace the placeholder below with your actual Firebase project settings.
// You can find this in your Firebase console under Project settings.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzlbVpsLSQECmVUs5wyaXKy-fz8nfhjkM",
  authDomain: "schooladmsn.firebaseapp.com",
  projectId: "schooladmsn",
  storageBucket: "schooladmsn.firebasestorage.app",
  messagingSenderId: "355479237462",
  appId: "1:355479237462:web:2f27bad032f6cbde4d5cf7",
  measurementId: "G-PYGEWXKSH8"
};

// This is the unique identifier for your app's data in Firestore.
// It's important to use a consistent, unique string here.
const APP_ID = "1:355479237462:web:2f27bad032f6cbde4d5cf7";

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
