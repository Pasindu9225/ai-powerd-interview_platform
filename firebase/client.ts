import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC4EefSeulNkGnmzQU2C145_UQ1Xhu4x8",
  authDomain: "prepwise-db43a.firebaseapp.com",
  projectId: "prepwise-db43a",
  storageBucket: "prepwise-db43a.firebasestorage.app",
  messagingSenderId: "630997216587",
  appId: "1:630997216587:web:996785029edd0f20bdccce",
  measurementId: "G-L3WW1GPRSE",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
