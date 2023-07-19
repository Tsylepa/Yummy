import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateUserName,
  updateUserAvatar,
  toggleTheme,
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
  token: null,
  isLoggedIn: false,
  isLoading: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
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
        state.token = payload.token;
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
        state.token = null;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.user = {};
        state.isLoggedIn = false;
        state.isLoading = false;
        state.token = null;
        state.error = payload;
      })

      // FETCH CURRENT USER
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        handleRejected(state, action);
        state.user = {};
        state.isLoggedIn = false;
        state.token = null;
      })
      // UPDATE USER NAME
      .addCase(updateUserName.pending, handlePending)
      .addCase(updateUserName.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        console.log(payload);
        state.user = payload;
      })
      .addCase(updateUserName.rejected, handleRejected)

      // UPDATE USER AVATAR
      .addCase(updateUserAvatar.pending, handlePending)
      .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        console.log(payload);
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
      .addCase(toggleTheme.rejected, handleRejected),
});

const authReducer = authSlice.reducer;
export default authReducer;
