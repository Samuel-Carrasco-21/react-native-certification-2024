import { AppState } from "./app/appState";
import { AuthState } from "./auth/authState";

export type State = AuthState & AppState;
