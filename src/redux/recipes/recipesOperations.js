import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/APIconfig';

axios.defaults.baseURL = 'https://soyummy-backend-kmc6.onrender.com/api/';

// ADD NEW RECIPE
export const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('recipes', body);

      return { ...body, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE RECIPE
export const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
  async ({ recipeId }, thunkAPI) => {
    try {
      const { data } = await axios.delete(`recipes/${recipeId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET RECIPEBYID
export const getRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async ({recipeId}, thunkAPI) => {
    try {
      const { data } = await instance.get(`recipes/${recipeId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

