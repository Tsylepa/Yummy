import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? (
    <Navigate to="/home" />
  ) : (
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
