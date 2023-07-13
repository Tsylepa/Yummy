import { createSlice } from '@reduxjs/toolkit';
import {
  getAllRecipes,
  addRecipe,
  deleteRecipe,
  getRecipesByIngredient,
  getRecipesByCategory,
  searchRecipes,
  getCategories,
  getIngredients,
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
  all: [],
  byIngredient: [],
  byCategory: [],
  search: [],
  categories: [],
  ingredients: [],
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder =>
    builder
      // GET ALL RECIPES
      .addCase(getAllRecipes.fulfilled, (state, action) => {
        state.all = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAllRecipes.pending, handlePending)
      .addCase(getAllRecipes.rejected, handleRejected)

      // ADD RECIPE
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.all = [...state.all, action.payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addRecipe.pending, handlePending)
      .addCase(addRecipe.rejected, handleRejected)

      // DELETE RECIPE
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.all.findIndex(
          recipe => recipe.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteRecipe.pending, handlePending)
      .addCase(deleteRecipe.rejected, handleRejected)

      // GET RECIPES BY INGREDIENT
      .addCase(getRecipesByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.byIngredient = action.payload;
      })
      .addCase(getRecipesByIngredient.pending, handlePending)
      .addCase(getRecipesByIngredient.rejected, handleRejected)

      // GET RECIPES BY CATEGORY
      .addCase(getRecipesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.byCategory = action.payload;
      })
      .addCase(getRecipesByCategory.pending, handlePending)
      .addCase(getRecipesByCategory.rejected, handleRejected)

      // SEARCH RECIPES
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.search = action.payload;
      })
      .addCase(searchRecipes.pending, handlePending)
      .addCase(searchRecipes.rejected, handleRejected)

      // GET CATEGORIES
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.rejected, handleRejected)

      // GET INGREDIENTS
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingredients = action.payload;
        console.log('object');
      })
      .addCase(getIngredients.pending, handlePending)
      .addCase(getIngredients.rejected, handleRejected),
});

const recipesReducer = recipesSlice.reducer;
export default recipesReducer;
