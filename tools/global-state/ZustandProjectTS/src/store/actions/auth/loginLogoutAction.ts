import { LoginLogoutState } from "../../states/auth/loginLogoutState";

export type LoginLogoutAction = {
  setAuth: (auth: LoginLogoutState['auth']) => void;
  clearAuth: () => void;
};
