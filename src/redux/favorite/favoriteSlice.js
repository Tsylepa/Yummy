import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavorite,
  deleteFavorite,
  getFavoritesList,
} from './favoriteOperations';

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState = {
  favoriteRecipes: [],
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Favorite Recipes list
      .addCase(getFavoritesList.pending, handlePending)
      .addCase(getFavoritesList.fulfilled, (state, action) => {
        state.favoriteRecipes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavoritesList.rejected, handleRejected)

      //delete fav recipes
      .addCase(deleteFavorite.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFavorite.pending, handlePending)
      .addCase(deleteFavorite.rejected, handleRejected)

      //add to favorite list
      .addCase(addToFavorite.fulfilled, (state, action) => {
        // state.all = [...state.all, action.payload];
        state.myRecipe = [action.payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addToFavorite.pending, handlePending)
      .addCase(addToFavorite.rejected, handleRejected);
  },
});

export default favoriteSlice.reducer;
