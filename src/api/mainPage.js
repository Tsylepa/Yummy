import { instance } from './APIconfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMainPageData = createAsyncThunk(
    'mainPage/fetchData',
    async (_, thunkAPI) => {
      try {
        const response = await instance.get('/api/mainPage');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  