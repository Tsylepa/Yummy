import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import { HiOutlineMenu } from 'react-icons/hi';

const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Auth = lazy(() => import('./pages/Register/Register'));
const Home = lazy(() => import('./pages/Home'));
const Sigin = lazy(() => import('./pages/Signin/SigninPage'));
const NoRoute = lazy(() => import('./pages/404'));
const CategoriesPage = lazy(() => import('./pages/Categories/Categories'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route exact index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />}></Route>
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route exact index element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route
            path="/categories/:categoryName"
            element={<CategoriesPage />}
          />

          {/* <Route
            path="/categories"
            element={
              <PrivateRoute
                component={<CategoriesPage />}
                redirectTo="/login"
              ></PrivateRoute>
            }
          /> */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<Sigin />} />
        </Route>

        <Route path="*" element={<NoRoute />} />
      </Routes>
    </>
  );
};
