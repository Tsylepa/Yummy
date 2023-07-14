import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import useUser from 'hooks/useUser';
import SharedLayout from 'components/SharedLayout';
import { Loader } from 'components/Loader/Loader';

const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useUser();
  const shouldRedirect = !isLoading && !isLoggedIn;

  return shouldRedirect ? (
    <Navigate to="/welcome" />
  ) : (
    <SharedLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SharedLayout>
  );
};

export default PrivateRoute;
