import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://soyummy-backend-kmc6.onrender.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// REGISTER
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
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
  async ({ email, vCode }, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await axios.post(`/auth/verify/${vCode}`, { email });
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
      const {
        data: { data },
      } = await axios.post('/auth/login', credentials);
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
