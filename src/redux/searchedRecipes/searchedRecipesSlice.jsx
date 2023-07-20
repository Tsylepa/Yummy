import { createSlice } from '@reduxjs/toolkit';
import {
  getRecipesByIngredient,
  searchRecipes,
} from './searchedRecipesOperations';

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState = {
  searchedRecipes: [],
  isLoading: false,
  error: null,
};

const searchedRecipesSlice = createSlice({
  name: 'searchedRecipes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Searched by ingredient Recipes list
      .addCase(getRecipesByIngredient.pending, handlePending)
      .addCase(getRecipesByIngredient.fulfilled, (state, action) => {
        state.searchedRecipes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipesByIngredient.rejected, handleRejected)
      // Searched by title Recipes list
      .addCase(searchRecipes.pending, handlePending)
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.searchedRecipes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(searchRecipes.rejected, handleRejected);
  },
});

export default searchedRecipesSlice.reducer;
