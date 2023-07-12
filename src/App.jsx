import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Auth = lazy(() => import('./pages/Register/Register'));
const Main = lazy(() => import('./pages/Main/Main'));
const Sigin = lazy(() => import('./pages/Signin/SigninPage'));
const AddRecipe = lazy(() => import('./pages/AddRecipe'));
const NoRoute = lazy(() => import('./pages/404'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route exact index element={<Navigate to="/main" />} />
          <Route path="main" element={<Main />}></Route>
          <Route path="recipe" element={<AddRecipe />} />
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route exact index element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<Sigin />} />
        </Route>

        <Route path="*" element={<NoRoute />} />
      </Routes>
    </>
  );
};
