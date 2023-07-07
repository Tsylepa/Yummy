import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import useUser from 'hooks/useUser';

function SharedLayout() {
  const { user } = useUser();

  return (
    <div data-theme={user.theme}>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default SharedLayout;
