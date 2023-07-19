import { instance } from './APIconfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

// GET ALL RECIPES
// export const getAllRecipes = createAsyncThunk(
//   'recipes/getAllrecipes',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await instance.get(`recipes`);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getAllRecipes = async () => {
  try {
    const { data } = await instance.get('/recipes');
    console.log('data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//
export const getOwnRecipes = async()=> {
  try {
    const { data } = await instance.get('/ownRecipes');
    console.log('ownRecipes :', data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getFavoriteRecipes = async () => {
  try {
    const { data } = await instance.get('/favorite');
    console.log(`favorite API`, data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

// GET RECIPES BY INGREDIENT
export const getRecipesByIngredient = createAsyncThunk(
  'recipes/getRecipesByIngredient',
  async ({ ingredient }, thunkAPI) => {
    try {
      const { data } = await instance.get(`recipes/${ingredient}`);

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
      const { data } = await instance.get(`recipes/categories/${category}`);

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
      const { data } = await instance.get(`recipes/search/${title}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET CATEGORIES LIST
export const getCategories = async () => {
  try {
    const { data } = await instance.get('/categoryList');
    return data;
  } catch (error) {
    console.log(error);
  }
};

// GET INGREDIENTS LIST
export const getIngredients = async () => {
  try {
    const { data } = await instance.get('/ingredients');

    return data;
  } catch (error) {
    console.log(error);
  }
};

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
