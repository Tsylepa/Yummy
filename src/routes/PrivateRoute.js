import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import SharedLayout from 'components/SharedLayout';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
