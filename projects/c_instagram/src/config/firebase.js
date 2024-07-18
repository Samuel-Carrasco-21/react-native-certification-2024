import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth, signInWithEmailAndPassword, onAuthStateChanged};
