import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-backend-kmc6.onrender.com/api/';
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWQyMTU0NDk0NmUzNDA0YTEzZjU0ZCIsImlhdCI6MTY4OTA3NjE4OCwiZXhwIjoxNjg5MTEyMTg4fQ.YwR8N0B1Mu6coepsVigC2hZul2f7zDtbxYUwH5hs7GM`;

const getAllRecipes = createAsyncThunk(
  'recipes/getAllrecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('recipes');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  getAllRecipes,
};

export default operations;