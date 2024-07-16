import { AuthActions } from "../actions/authAction";

const initialState = {
  auth: false,
};

export default (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        auth: true,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};
