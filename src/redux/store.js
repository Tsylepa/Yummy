import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import recipesReducer from './recipes/recipesSlice';
import mainPageReducer from './mainPage/mainPageSlice';
import favoriteReducer from './favorite/favoriteSlice';
import searchedRecipesReducer from './searchedRecipes/searchedRecipesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const recipesPersistConfig = {
  key: 'recipes',
  storage,
};
const mainPagePersistConfig = {
  key: 'mainPage',
  storage,
};
const favoritePersistConfig = {
  key: 'favorite',
  storage,
};
const searchedRecipesPersistConfig = {
  key: 'searchedRecipes',
  storage,
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipes: persistReducer(recipesPersistConfig, recipesReducer),
    mainPage: persistReducer(mainPagePersistConfig, mainPageReducer),
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
    searchedRecipes: persistReducer(
      searchedRecipesPersistConfig,
      searchedRecipesReducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
