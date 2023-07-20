import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipe,
  deleteRecipe,
  getRecipeById,
  getRecipeList,
} from 'redux/recipes/recipesOperations';

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState = {
  isLoading: false,
  error: null,
  recipeById: {},
  recipe: [],
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder =>
    builder
      // ADD RECIPE
      .addCase(addRecipe.fulfilled, (state, action) => {
        // state.all = [...state.all, action.payload];
        state.myRecipe = [action.payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addRecipe.pending, handlePending)
      .addCase(addRecipe.rejected, handleRejected)

      // DELETE RECIPE
      .addCase(deleteRecipe.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteRecipe.pending, handlePending)
      .addCase(deleteRecipe.rejected, handleRejected)

      // GET RECIPY BY ID
      .addCase(getRecipeById.fulfilled, (state, action) => {
        const recipe = action.payload;
        state.recipeById = { ...state.recipeById, [recipe._id]: recipe };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipeById.pending, handlePending)
      .addCase(getRecipeById.rejected, handleRejected)

      // my recipe
      .addCase(getRecipeList.pending, handlePending)
      .addCase(getRecipeList.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipeList.rejected, handleRejected),
});

const recipesReducer = recipesSlice.reducer;
export default recipesReducer;
