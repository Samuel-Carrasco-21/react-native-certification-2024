export const AuthActions = {
  LOGIN: 'IS_LOGIN',
  LOGOUT: 'IS_LOGOUT',
};

export const isLogin = () => {
  return {
    type: AuthActions.LOGIN,
  };
};

export const isLogout = () => {
  return {
    type: AuthActions.LOGOUT,
  };
};
