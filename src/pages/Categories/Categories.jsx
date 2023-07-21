import { Outlet } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import { Container, StyledContainer } from './Categories.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { Loader } from 'components/Loader/Loader';


const Categories = () => {
  const containerRef = useRef(null);

  const handleWheel = event => {
    const container = containerRef.current;
    container.scrollLeft += event.deltaY;
  };

  return (
    <Container>
      <MainTitle text="Categories" />
      <StyledContainer ref={containerRef} onWheel={handleWheel}>
        <CategoriesList />
      </StyledContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Categories;
