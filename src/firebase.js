// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCf5-kwtqeIciNobQ5AwKuyxVXcTtToN3o",
  authDomain: "todo-498a0.firebaseapp.com",
  projectId: "todo-498a0",
  storageBucket: "todo-498a0.appspot.com",
  messagingSenderId: "696291670454",
  appId: "1:696291670454:web:078be9ea06759b9311a917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
export const auth = getAuth()