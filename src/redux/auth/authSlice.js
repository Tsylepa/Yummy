import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  verification,
  updateUserName,
  updateUserAvatar,
  toggleTheme,
  addToShoppingList,
  removeFromShoppingList,
} = authOperations;

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState = {
  user: {},
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedin(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder =>
    builder
      // REGISTER
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // LOGIN

      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
        state.isLoggedIn = true;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // LOGOUT
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.isLoggedIn = false;
        state.isLoading = false;
        state.accessToken = null;
        state.refreshToken = null;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.user = {};
        state.isLoggedIn = false;
        state.isLoading = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.error = payload;
      })

      // FETCH CURRENT USER
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        handleRejected(state, action);
        state.user = {};
        state.isLoggedIn = false;
        state.accessToken = null;
        state.refreshToken = null;
      })

      // EMAIL VERIFICATION
      .addCase(verification.fulfilled, (state, action) => {
        state.user = action.payload;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(verification.pending, handlePending)
      .addCase(verification.rejected, handleRejected)

      // UPDATE USER NAME
      .addCase(updateUserName.pending, handlePending)
      .addCase(updateUserName.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
      })
      .addCase(updateUserName.rejected, handleRejected)

      // UPDATE USER AVATAR
      .addCase(updateUserAvatar.pending, handlePending)
      .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
      })
      .addCase(updateUserAvatar.rejected, handleRejected)

      // TOGGLE THEME
      .addCase(toggleTheme.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(toggleTheme.pending, (state, action) => {
        state.user.theme = action.meta.arg.theme;
      })
      .addCase(toggleTheme.rejected, handleRejected)

      // ADD TO SHOPPING LIST
      .addCase(addToShoppingList.fulfilled, (state, action) => {
        state.user.shoppingList.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addToShoppingList.pending, handlePending)
      .addCase(addToShoppingList.rejected, handleRejected)

      // REMOVE FROM SHOPPING LIST
      .addCase(removeFromShoppingList.fulfilled, (state, action) => {
        const ingredientIdToRemove = action.payload.ingredient._id;
        state.user.shoppingList = state.user.shoppingList.filter(
          item => item.ingredient._id !== ingredientIdToRemove
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeFromShoppingList.pending, handlePending)
      .addCase(removeFromShoppingList.rejected, handleRejected),
});

export const { setIsLoggedin } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
