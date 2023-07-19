export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUser = state => state.auth.user;

export const getToken = state => state.auth.token;

export const getIsLoading = state => state.auth.isLoading;

export const getShoppingList = state => state.auth.user.shoppingList

export const authSelectors = {
  getIsLoggedIn,
  getUser,
  getToken,
  getIsLoading,
};
