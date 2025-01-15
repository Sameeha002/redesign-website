// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ2_sE4U7BHiVP4P_xvagE4b0B_Qvsx9Y",
  authDomain: "internee-login-auth.firebaseapp.com",
  projectId: "internee-login-auth",
  storageBucket: "internee-login-auth.firebasestorage.app",
  messagingSenderId: "470145916841",
  appId: "1:470145916841:web:69f6be07dc7a9e010baeb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;