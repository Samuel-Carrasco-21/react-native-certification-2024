import { CurrentUserState } from "../../states/app/currentUserState";

export type CurrenUserAction = {
  setCurrentUser: (currentUser: CurrentUserState['currentUser']) => void;
  clearCurrentUser: () => void;
};
