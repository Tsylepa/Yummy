import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import useUser from 'hooks/useUser';
import Container from 'components/Container';
import { Loader } from 'components/Loader/Loader';
import { Main } from './SharedLayout.styled';

function SharedLayout() {
  const { user } = useUser();

  return (
    <div className="app" data-theme={user?.theme}>
      <Container>
        <Header />
      </Container>
      <Suspense fallback={<Loader />}>
        <Container>
          <Main>
            <Outlet />
          </Main>
        </Container>
      </Suspense>

      <Footer />
    </div>
  );
}

export default SharedLayout;
