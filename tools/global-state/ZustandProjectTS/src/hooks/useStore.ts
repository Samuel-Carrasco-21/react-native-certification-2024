import { StoreAdditionalFunction } from "../models/store";
import { Action } from "../store/actions/action";
import { globalState } from "../store/initialValues-functions";
import { State } from "../store/states/state";

export const useStore = (): State & Action & StoreAdditionalFunction => {
  return {
    // instance of values
    auth: globalState((state) => state.auth),
    currentUser: globalState((state) => state.currentUser),

    // setter functions declarations
    setAuth: globalState((state) => state.setAuth),
    setCurrentUser: globalState((state) => state.setCurrentUser),

    // clear functions declarations
    clearAuth: globalState((state) => state.clearAuth),
    clearCurrentUser: globalState((state) => state.clearCurrentUser),
  
    // clear all functions
    clearAll: () => {
      (globalState((state) => state.clearAuth))();
      (globalState((state) => state.clearCurrentUser))();
    },
  };
};
