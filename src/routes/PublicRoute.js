import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import useUser from 'hooks/useUser';

const PublicRoute = () => {
  const { isLoggedIn } = useUser();

  return isLoggedIn ? (
    <Navigate to="/home" />
  ) : (
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
