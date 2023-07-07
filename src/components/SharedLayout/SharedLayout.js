import Header from 'components/Header';
import Footer from 'components/Footer';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default SharedLayout;
