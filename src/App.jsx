import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Favorites from 'pages/Favorites/Favoites';
import { Loader } from 'components/Loader/Loader';

const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Auth = lazy(() => import('./pages/Register/Register'));
const Main = lazy(() => import('./pages/Main/Main'));
const Sigin = lazy(() => import('./pages/Signin/SigninPage'));
const AddRecipe = lazy(() => import('./pages/AddRecipe'));
const NoPage = lazy(() => import('./pages/404'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const CategoriesPage = lazy(() => import('./pages/Categories/Categories'));
const RecipePage = lazy(() => import('./pages/RecipePage/RecipePage'));
const CategoriesRecepiesPage = lazy(() =>
  import('./components/CategoriesCardsList/CategoriesCardsList')
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route exact index element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />}></Route>
          <Route path="/recipe" element={<AddRecipe />} />
          <Route path="/recipe/recipeId" element={<RecipePage />}/>
          <Route path="/favorite" element={<Favorites />} />
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
        </Route>
      </Routes>
    </Suspense>
  );
};