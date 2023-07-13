import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Auth = lazy(() => import('./pages/Register/Register'));
const Home = lazy(() => import('./pages/Home'));
const Sigin = lazy(() => import('./pages/Signin/SigninPage'));
const AddRecipe = lazy(() => import('./pages/AddRecipe'));
const NoRoute = lazy(() => import('./pages/404'));

const SharedLayout = lazy(() => import ('./components/SharedLayout/SharedLayout'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route exact index element={<Navigate to="/home" />} />
          
          <Route path="/" element={<SharedLayout />} >
            <Route path="home" element={<Home />}></Route>
            <Route path="recipe" element={<AddRecipe />} />

            <Route path="*" element={<NoRoute />} />
          </Route>

        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route exact index element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<Sigin />} />
        </Route>

        
      </Routes>
    </>
  );
};
