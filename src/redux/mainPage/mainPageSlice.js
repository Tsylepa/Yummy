import { createSlice } from '@reduxjs/toolkit';
import { getMainPageData } from './mainPageOperations';

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
    data: {},
  };

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    extraReducers: (builder) =>
      builder
        .addCase(getMainPageData.fulfilled, (state, action) => {
            state.data = action.payload; 
            state.isLoading = false;
          state.error = null;
        })
        .addCase(getMainPageData.pending, handlePending)
      .addCase(getMainPageData.rejected, handleRejected)
  });

const mainPageReducer = mainPageSlice.reducer;
export default mainPageReducer;