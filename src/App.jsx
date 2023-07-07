import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const Welcome = lazy(() => import('./pages/Welcome'));
const Auth = lazy(() => import('./pages/Auth'));
const Home = lazy(() => import('./pages/Home'));
const NoRoute = lazy(() => import('./pages/404'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route exact index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />}></Route>
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
        </Route>

        <Route path="*" element={<NoRoute />} />
      </Routes>
    </>
  );
};
