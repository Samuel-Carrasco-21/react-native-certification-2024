import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth, signInWithEmailAndPassword};
