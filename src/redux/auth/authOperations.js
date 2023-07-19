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
      } = await instance.post(`/auth/verify/${vCode}`, { email });
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
      const { data } = await instance.post('users/logout', credentials);
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

// Add To Favorite byId
export const addToFavorite = createAsyncThunk(
  "auth/addToFavorite",
  async (recipeId, thunkAPI) => {
    try {
      console.log("Starting addToFavorite request");
      await instance.post(`favorite/${recipeId}`);
    
      return recipeId;
    } catch (error) {
      console.error("addToFavorite error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Remove from Favorite byId
export const deleteFromFavorite = createAsyncThunk(
  "auth/deleteFromFavorite",
  async (recipeId, thunkAPI) => {
    try {
      await instance.delete(`favorite/${recipeId}`);
      return recipeId;
    } catch (error) {
      console.error("deleteFromFavorite error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Add to ShoppingList
export const addToShoppingList = createAsyncThunk(
  "auth/addToShoppingList",
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
  "auth/removeFromShoppingList",
  async (data, thunkAPI) => {
    try {
      await instance.delete('shoppingList', {data});
      console.log(data.ingredient._id)
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
  addToFavorite,
  deleteFromFavorite,
  addToShoppingList,
  removeFromShoppingList
};

export default operations;
