import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import useUser from 'hooks/useUser';
import SharedLayout from 'components/SharedLayout';

const PrivateRoute = () => {
  const { isLoggedIn } = useUser();
  const shouldRedirect = !isLoggedIn;

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
