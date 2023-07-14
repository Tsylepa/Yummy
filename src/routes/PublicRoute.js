import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import useUser from 'hooks/useUser';
import { Loader } from 'components/Loader/Loader';

const PublicRoute = () => {
  const { isLoggedIn, isLoading } = useUser();
  const shouldRedirect = !isLoading && isLoggedIn;

  return shouldRedirect ? (
    <Navigate to="/main" />
  ) : (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
