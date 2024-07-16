import { createContext, useContext, useReducer } from "react";
import { initialValues, storeReducer } from "./reducers/storeReducer";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useReducer(storeReducer, initialValues)}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext)[0];
export const useDispatch = () => useContext(StoreContext)[1];
