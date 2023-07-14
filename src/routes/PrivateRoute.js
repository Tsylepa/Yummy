import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import useUser from 'hooks/useUser';
import SharedLayout from 'components/SharedLayout';

const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useUser();
  const shouldRedirect = !isLoading && !isLoggedIn;

  return shouldRedirect ? (
    <Navigate to="/welcome" />
  ) : (
    <SharedLayout>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </SharedLayout>
  );
};

export default PrivateRoute;
