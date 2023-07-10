import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import useUser from 'hooks/useUser';
import Container from 'components/Container';

function SharedLayout() {
  const { user } = useUser();

  return (
    <div className="app" data-theme={user.theme}>
      <Container>
        <Header />
      </Container>
      <Suspense>
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
