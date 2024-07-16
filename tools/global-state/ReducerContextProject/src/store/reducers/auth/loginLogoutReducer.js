export const loginLogoutTypes = {
  login: "login user",
  logout: "logout user"
};

export const loginLogoutInitialValues = {
  auth: false,
};

export const loginLogoutTypesArray = Object.values(loginLogoutTypes).map(type => type); // ["login user", "logout user"]

export const loginLogoutReducer = (state, action) => {
  // en este caso no será necesario pasar un valor por medio de action
  const { type } = action;
  switch (type) {
    case loginLogoutTypes.login:
      return {
        ...state,
        auth: true
      };
    case loginLogoutTypes.logout:
      return {
        ...state,
        auth: false
      };
    default:
      return state;
  }
};
