import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const { register, logIn, logOut, verification, fetchCurrentUser, toggleTheme } =
  authOperations;

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
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
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = false;
        state.token = null;
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isLoading = false;
      })

      // FETCH CURRENT USER
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.rejected, state => {
        handleRejected();
        state.token = null;
        state.isLoggedIn = false;
        state.user = null;
      })

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
