import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import useUser from 'hooks/useUser';
import { Loader } from 'components/Loader/Loader';

const PublicRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useUser();
  const shouldRedirect = !isLoading && isLoggedIn;

  return shouldRedirect ? (
    <Navigate to="/main" />
  ) : (
    <Suspense fallback={<Loader />}>
      {children}
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
