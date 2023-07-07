import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// REGISTER
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

// LOGIN
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

// LOGOUT
const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    const { data } = await axios.post('users/logout', credentials);
    token.unset();
    return data;
  } catch (error) {}
});

// FETCH CURRENT USER
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  }
);

// TOGGLE THEME
const toggleTheme = createAsyncThunk(
  'auth/toggleTheme',
  async (theme, thunkAPI) => {
    try {
      const { data } = await axios.patch('user/theme', {
        theme,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  toggleTheme,
};

export default operations;
