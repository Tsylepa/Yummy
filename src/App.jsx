import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Favorites from 'pages/Favorites/Favoites';
import useUser from 'hooks/useUser';
import { Loader } from 'components/Loader/Loader';

const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Auth = lazy(() => import('./pages/Register/Register'));
const Main = lazy(() => import('./pages/Main/Main'));
const Sigin = lazy(() => import('./pages/Signin/SigninPage'));
const AddRecipe = lazy(() => import('./pages/AddRecipe'));
const NoRoute = lazy(() => import('./pages/404'));
const CategoriesPage = lazy(() => import('./pages/Categories/Categories'));
const CategoriesRecepiesPage = lazy(() =>
  import('./components/CategoriesCardsList/CategoriesCardsList')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useUser();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  console.log(isLoading);
  return (
    <>
      {isLoading && <Loader />}
      <div className={isLoading ? 'blured' : ''}>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route exact index element={<Navigate to="/main" />} />
            <Route path="main" element={<Main />}></Route>
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
          </Route>

          <Route path="/" element={<PublicRoute />}>
            <Route path="/welcome" index element={<Welcome />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/signin" element={<Sigin />} />
          </Route>

          <Route path="*" element={<NoRoute />} />
        </Routes>
      </div>
    </>
  );
};
