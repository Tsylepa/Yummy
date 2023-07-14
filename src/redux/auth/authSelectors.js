export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUser = state => state.auth.user;

export const getToken = state => state.auth.token;

export const getIsLoading = state => state.auth.isLoading;

export const getTheme = state => state.auth.user.theme;

export const authSelectors = {
  getIsLoggedIn,
  getUser,
  getToken,
  getIsLoading,
};
