import { createSlice } from '@reduxjs/toolkit';
import { getFavoritesList } from './favoriteOperations';



const initialState = {
  favoriteRecipes: [],
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoritesList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavoritesList.fulfilled, (state, action) => {
        state.favoriteRecipes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavoritesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default favoriteSlice.reducer;