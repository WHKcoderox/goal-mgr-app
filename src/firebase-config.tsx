import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Database, getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_SVC_API_KEY,
  authDomain: "goal-manager-3e656.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "goal-manager-3e656",
  storageBucket: "goal-manager-3e656.appspot.com",
  messagingSenderId: "108559446011",
  appId: "1:108559446011:web:ee6b8a45d51eba9f9da55e",
  measurementId: "G-7LEF8V7DY8"
};

// Initialize Firebase
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export const database: Database = getDatabase(firebaseApp);
export const firebaseAuth: Auth = getAuth(firebaseApp);