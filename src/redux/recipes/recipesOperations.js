import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-backend-kmc6.onrender.com/api/';
axios.defaults.headers.common.Authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWVhM2M1NDg2YTUwZDNhNzc0MGJmYSIsImlhdCI6MTY4OTE2Njc4OSwiZXhwIjoxNjg5MjAyNzg5fQ.EMhYR_NYf3NqpeQVh33SSGt4KWMmFWLrwcqiEJEETzE`;

// GET ALL RECIPES
export const getAllRecipes = createAsyncThunk(
  'recipes/getAllrecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('recipes');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

// GET RECIPES BY INGREDIENT
export const getRecipesByIngredient = createAsyncThunk(
  'recipes/getRecipesByIngredient',
  async ({ ingredient }, thunkAPI) => {
    try {
      const { data } = await axios.get(`recipes/${ingredient}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET RECIPES BY CATEGORY
export const getRecipesByCategory = createAsyncThunk(
  'recipes/getRecipesByCategory',
  async ({ category }, thunkAPI) => {
    try {
      const { data } = await axios.get(`recipes/categories/${category}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// SEARCH RECIPES BY TITLE
export const searchRecipes = createAsyncThunk(
  'recipes/searchRecipes',
  async ({ title }, thunkAPI) => {
    try {
      const { data } = await axios.get(`recipes/search/${title}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET CATEGORIES LIST
export const getCategories = createAsyncThunk(
  'recipes/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('category-list');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET INGREDIENTS LIST
export const getIngredients = createAsyncThunk(
  'recipes/ingredients',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('ingredients');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
