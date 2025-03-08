// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2r_pvLXjP9dESIOyYAOuENm77uL_LxbI",
  authDomain: "nevarez-yee-76086.firebaseapp.com",
  projectId: "nevarez-yee-76086",
  storageBucket: "nevarez-yee-76086.firebasestorage.app",
  messagingSenderId: "168489809726",
  appId: "1:168489809726:web:1b92a0e336cbbbd7235e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app