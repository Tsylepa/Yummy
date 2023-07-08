export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUser = state => state.auth.user;

export const getToken = state => state.auth.token;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getIsLoading = state => state.auth.isLoading;

export const authSelectors = {
  getIsLoggedIn,
  getUser,
  getToken,
  getIsRefreshing,
  getIsLoading,
};
