export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUser = state => state.auth.user;

export const getAccessToken = state => state.auth.accessToken;

export const getIsLoading = state => state.auth.isLoading;

export const getShoppingList = state => state.auth.user.shoppingList;

export const authSelectors = {
  getIsLoggedIn,
  getUser,
  getAccessToken,
  getIsLoading,
  getShoppingList,
};
