import { instance } from 'api/APIconfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/APIconfig';

// ADD NEW RECIPE
export const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async (body, thunkAPI) => {
    try {
      const { data } = await instance.post('recipes', body);
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
      const { data } = await instance.delete(`recipes/${recipeId}`);

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