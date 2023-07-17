import { instance } from 'api/APIconfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

// REGISTER
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/auth/register', credentials);
      localStorage.setItem('userEmail', JSON.stringify(data.user.email));
      toast.success(
        'Congratulations! To verify your account, follow the link sent to your email',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // theme: 'dark',
        }
      );
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('This email already exists');
        return rejectWithValue(error.message);
      }
      toast.error('This email already exists');
      return rejectWithValue(error.message);
    }
  }
);

export const verification = createAsyncThunk(
  'auth/verification',
  async ({ email, verificationCode }, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await instance.post(`/auth/verification/${verificationCode}`, {
        email,
      });
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// LOGIN
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/auth/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Email or password is wrong');
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

// LOGOUT
export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('auth/logout', credentials);
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// FETCH CURRENT USER
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

// TOGGLE THEME
export const toggleTheme = createAsyncThunk(
  'auth/toggleTheme',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.patch('/users/changeTheme', credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// UPDATE USER
export const updateUserInfo = createAsyncThunk(
  'auth/updateUserInfo',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/users/changeAvatar', userInfo);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  toggleTheme,
  updateUserInfo,
};

export default operations;
