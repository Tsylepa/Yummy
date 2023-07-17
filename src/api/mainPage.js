// import { instance } from './APIconfig';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getRecipeById = createAsyncThunk(
//     'recipes/fetchdataforMainPage',
//     async ({recipeId}, thunkAPI) => {
//       try {
//         const { data } = await instance.get(`/mainPage`);
  
//         return data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );