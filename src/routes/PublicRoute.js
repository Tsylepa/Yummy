import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import useUser from 'hooks/useUser';

const PublicRoute = () => {
  const { isLoggedIn, isLoading } = useUser();
  const shouldRedirect = !isLoading && isLoggedIn;

  return shouldRedirect ? (
    <Navigate to="/main" />
  ) : (
    <Suspense fallback={<p>Loading...</p>}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
