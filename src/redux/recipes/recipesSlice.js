import { createSlice } from '@reduxjs/toolkit';
import recipesOperations from 'redux/recipes/recipesOperations';

const { getAllRecipes } = recipesOperations;

const handlePending = state => {
  state.error = null;
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isRefreshing = false;
};

const initialState = {
  all: ['sss'],
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder =>
    builder
      // GET ALL RECIPES
      .addCase(getAllRecipes.fulfilled, (state, action) => {
        state.all = action.payload;
      })
      .addCase(getAllRecipes.pending, handlePending)
      .addCase(getAllRecipes.rejected, handleRejected),
});

const recipesReducer = recipesSlice.reducer;
export default recipesReducer;
