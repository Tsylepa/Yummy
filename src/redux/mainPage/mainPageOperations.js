import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/APIconfig';

export const getMainPageData = createAsyncThunk(
  'mainPage/getMainPageData',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/mainPage');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
