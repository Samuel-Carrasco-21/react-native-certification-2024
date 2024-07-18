import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACnUYSt1H6BXQ9mDk6qq019M3cImDEea0",
  authDomain: "c-instagram-c072e.firebaseapp.com",
  projectId: "c-instagram-c072e",
  storageBucket: "c-instagram-c072e.appspot.com",
  messagingSenderId: "157624323621",
  appId: "1:157624323621:web:b5d2363997f36233bdb9cc",
  measurementId: "G-LXX5B4SF0Z",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth, signInWithEmailAndPassword};
