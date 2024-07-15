import { loginLogoutInitialValues, loginLogoutReducer, loginLogoutTypes, loginLogoutTypesArray } from "./auth/loginLogoutReducer";

export const reducerTypes = {
  ...loginLogoutTypes,
};

export const initialValues = {
  ...loginLogoutInitialValues,
};

const arrayReducers = [
  {
    reducerFunction: loginLogoutReducer,
    types: [...loginLogoutTypesArray] // ["login user", "logout user"],
  }
];

// action = { type: string, value: any }
export const storeReducer = (state, action) => {
  const { type } = action;
  const reducer = arrayReducers.find((reducer) => reducer.types.includes(type));
  if(reducer){
    return reducer.reducerFunction(state, action);
  }
  return state;
};
