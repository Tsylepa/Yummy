import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import useUser from 'hooks/useUser';
import SharedLayout from 'components/SharedLayout';
import { Loader } from 'components/Loader/Loader';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useUser();
  const shouldRedirect = !isLoading && !isLoggedIn;

  return shouldRedirect ? (
    <Navigate to="/welcome" />
  ) : (
    <Suspense fallback={<Loader />}>
      <SharedLayout>
        {children}
        <Outlet />
      </SharedLayout>
    </Suspense>
  );
};

export default PrivateRoute;
