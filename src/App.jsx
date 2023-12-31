import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUser from 'hooks/useUser';

const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Auth = lazy(() => import('./pages/Register/Register'));
const Main = lazy(() => import('./pages/Main/Main'));
const Sigin = lazy(() => import('./pages/Signin/SigninPage'));
const VerificationPage = lazy(() => import('./pages/Verification/Verfication'));
const AddRecipe = lazy(() => import('./pages/AddRecipe/AddRecipe'));
const ShoppingList = lazy(() => import('./pages/ShoppingList/ShoppingList'));
const NoPage = lazy(() => import('./pages/404'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const CategoriesPage = lazy(() => import('./pages/Categories/Categories'));
const RecipePage = lazy(() => import('./pages/RecipePage/RecipePage'));
const CategoriesRecepiesPage = lazy(() =>
  import('./components/CategoriesCardsList/CategoriesCardsList')
);

const Favorites = lazy(() => import('./pages/Favorites/Favoites'));
const MyRecipes = lazy(() => import('./pages/MyRecipes/MyRecipes'));

export const App = () => {
  const dispatch = useDispatch();
  const { accessToken } = useUser();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch, accessToken]);

  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route exact index element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />}></Route>
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/my" element={<MyRecipes />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/recipe" element={<MyRecipes />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/categories" element={<CategoriesPage />}>
            <Route
              path="/categories/:categoryName"
              element={<CategoriesRecepiesPage />}
            />
            <Route
              path="/categories"
              element={<Navigate to="Beef" replace />}
            />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route path="/welcome" index element={<Welcome />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/signin" element={<Sigin />} />
          <Route
            path="/verification/:verificationCode"
            element={<VerificationPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
