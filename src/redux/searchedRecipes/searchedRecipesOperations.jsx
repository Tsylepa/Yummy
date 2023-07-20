import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/APIconfig';

export const getRecipesByIngredient = createAsyncThunk(
  'recipes/searchByIngredient',
  async (searchQuery, thunkAPI) => {
    try {
      const { data } = await instance.get(`recipes/ingredients/${searchQuery}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchRecipes = createAsyncThunk(
  'recipes/searchByTitle',
  async (searchQuery, thunkAPI) => {
    try {
      const { data } = await instance.get(`recipes/search/${searchQuery}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
