import { instance } from 'api/APIconfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
  'auth/verifyEmail',
  async (verificationCode, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `/auth/verifyEmail/${verificationCode}`
      );
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
      token.set(data.accessToken);

      localStorage.setItem('refreshToken1', data.refreshToken);
      localStorage.setItem('accessToken1', data.accessToken);
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
  'auth/current',
  async (_, thunkAPI) => {
    const persistedToken = localStorage.getItem('accessToken1');
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

// UPDATE USER NAME
export const updateUserName = createAsyncThunk(
  'auth/changeName',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('/users/changeName', name);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// UPDATE USER AVATAR
export const updateUserAvatar = createAsyncThunk(
  'auth/changeAvatar',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('/users/changeAvatar', formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Add to ShoppingList
export const addToShoppingList = createAsyncThunk(
  'auth/addToShoppingList',
  async (data, thunkAPI) => {
    try {
      await instance.post('shoppingList', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Remove from ShoppingList
export const removeFromShoppingList = createAsyncThunk(
  'auth/removeFromShoppingList',
  async (data, thunkAPI) => {
    try {
      await instance.delete('shoppingList', { data });
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
  verification,
  fetchCurrentUser,
  toggleTheme,
  updateUserName,
  updateUserAvatar,
  addToShoppingList,
  removeFromShoppingList,
};

export default operations;
