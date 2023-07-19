import { instance } from 'api/APIconfig';
 import { createAsyncThunk } from '@reduxjs/toolkit';


// GET MY FAVORITES LIST - add by Oleg.
export const getFavoritesList = createAsyncThunk(
    'favorite',
    async (_, thunkAPI) => {
      try {
        const { data } = await instance.get(`favorite`);
        console.log(`favOperation`,data)
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
