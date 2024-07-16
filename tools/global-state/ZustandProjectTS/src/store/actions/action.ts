import { AppAction } from "./app/appAction";
import { AuthAction } from "./auth/authAction";

export type Action = AuthAction & AppAction;
