import { instance } from 'api/APIconfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

// GET MY FAVORITES LIST - add by Oleg.
export const getFavoritesList = createAsyncThunk(
  'favorite',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`favorite`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Remove from Favorite byId
export const deleteFavorite = createAsyncThunk(
  'favorite/deleteFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const response = await instance.delete(`favorite/${recipeId}`);
      window.location.reload();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// add to favorite
export const addToFavorite = createAsyncThunk(
  'favorite/addFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const response = await instance.post(`favorite/${recipeId}`);
      return response.data.recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// GET favorite RECIPEBYID
export const getFavoriteRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (recipeId, thunkAPI) => {
    try {
      const { data } = await instance.get(`recipes/${recipeId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
