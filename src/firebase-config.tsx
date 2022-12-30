import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { config } from "dotenv";

// set environment variables
config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_SVC_API_KEY,
  authDomain: "goal-manager-3e656.firebaseapp.com",
  databaseURL: "https://goal-manager-3e656-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "goal-manager-3e656",
  storageBucket: "goal-manager-3e656.appspot.com",
  messagingSenderId: "108559446011",
  appId: "1:108559446011:web:ee6b8a45d51eba9f9da55e",
  measurementId: "G-7LEF8V7DY8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);