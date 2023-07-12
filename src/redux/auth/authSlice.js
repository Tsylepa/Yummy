import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const { register, logIn, logOut, verification, fetchCurrentUser, toggleTheme } =
  authOperations;

const handlePending = state => {
  state.error = null;
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
};

const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrl: null,
    createdAt: null,
    verify: false,
    theme: 'light',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
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
      // VERIFICATION
      // .addCase(verification.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.user = payload.user;
      //   state.token = payload.token;
      //   state.isLoggedIn = true;
      // })
      // .addCase(verification.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      // LOGIN

      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // LOGOUT
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = false;
        state.token = null;
        state.error = payload;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // FETCH CURRENT USER
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.rejected, handleRejected)

      // TOGGLE THEME
      .addCase(toggleTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
      })
      .addCase(toggleTheme.pending, handlePending)
      .addCase(toggleTheme.rejected, (state, action) => {
        state.user.theme = action.meta.arg;
      }),
});

const authReducer = authSlice.reducer;
export default authReducer;
