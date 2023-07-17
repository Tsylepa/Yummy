import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer';
import useUser from 'hooks/useUser';
import Container from 'components/Container';
import { Loader } from 'components/Loader/Loader';

function SharedLayout() {
  const { user } = useUser();

  return (
    <div className="app" data-theme={user?.theme}>
      <Container>
        <Header />
      </Container>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default SharedLayout;
