import { GlobalStore, StoreAdditionalFunction } from "../models/store";
import { globalState } from "../store/initialValues-functions";

export const useStore = (): GlobalStore & StoreAdditionalFunction => {
  return {
    // instance of values
    auth: globalState((state: GlobalStore) => state.auth),
    currentUser: globalState((state: GlobalStore) => state.currentUser),

    // setter functions declarations
    setAuth: globalState((state: GlobalStore) => state.setAuth),
    setCurrentUser: globalState((state: GlobalStore) => state.setCurrentUser),

    // clear functions declarations
    clearAuth: globalState((state: GlobalStore) => state.clearAuth),
    clearCurrentUser: globalState((state: GlobalStore) => state.clearCurrentUser),
  
    // clear all functions
    clearAll: () => {
      const clearAuth = globalState((state: GlobalStore) => state.clearAuth);
      clearAuth();
      const clearCurrentUser = globalState((state: GlobalStore) => state.clearCurrentUser);
      clearCurrentUser();
    },
  };
};
