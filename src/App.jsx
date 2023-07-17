import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import Favorites from 'pages/Favorites/Favoites';
import { Loader } from 'components/Loader/Loader';

const Auth = lazy(() => import('./pages/Register/Register'));
const Main = lazy(() => import('./pages/Main/Main'));
const Sigin = lazy(() => import('./pages/Signin/SigninPage'));
const AddRecipe = lazy(() => import('./pages/AddRecipe'));
const NoPage = lazy(() => import('./pages/404'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const CategoriesPage = lazy(() => import('./pages/Categories/Categories'));
const CategoriesRecepiesPage = lazy(() =>
  import('./components/CategoriesCardsList/CategoriesCardsList')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<PrivateRoute />} restricted>
          <Route exact index element={<Navigate to="/main" />} />
          <Route path="/main" index element={<Home />} />
          <Route path="/recipe" element={<AddRecipe />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route
            path="/categories"
            categoriesFirst={'Beef'}
            element={<CategoriesPage />}
          >
            <Route
              path="/categories/:categoryName"
              element={<CategoriesRecepiesPage />}
            />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route exact index element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/register" element={<Auth />} />
          <Route path="/signin" element={<Sigin />} />
        </Route>

        <Route path="*" element={<NoRoute />} />
      </Routes>
    </Suspense>
  );
};
