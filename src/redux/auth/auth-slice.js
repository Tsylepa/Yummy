import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const { register, logIn, logOut, fetchCurrentUser, toggleTheme } =
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
  user: { name: null, email: null, theme: 'light' },
  token: null,
  isLoggedIn: true,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      // REGISTER
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)

      // LOGIN
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)

      // LOGOUT
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)

      // FETCH CURRENT USER
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
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
