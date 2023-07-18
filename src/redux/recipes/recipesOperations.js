import { instance } from 'api/APIconfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
  async ({ recipeId }, thunkAPI) => {
    try {
      const { data } = await instance.get(`recipes/${recipeId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Add To Favorite byId
export const addToFavorite = createAsyncThunk(
  'recipes/addFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const response = await instance.post(`favorite/${recipeId}`);
      return response.data.recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Remove from Favorite byId
export const deleteFavorite = createAsyncThunk(
  'recipes/deleteFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const response = await instance.delete(`favorite/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET POPULAR RECIPES
export const getPopularRecipes = createAsyncThunk(
  'recipes/popular',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`recipes/popular`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Add to ShoppingList
export const addToShoppingList = createAsyncThunk(
  'recipes/addToShoppingList',
  async ({ ingredient, recipeId, measure }, thunkAPI) => {
    try {
      const response = await instance.post(`shoppingList`, {
        ingredient,
        recipeId,
        measure,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
