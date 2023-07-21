import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import { StyledContainer } from './Categories.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { Loader } from 'components/Loader/Loader';

const Categories = () => {
  return (
    <>
      <MainTitle text="Categories" />
      <StyledContainer>
        <CategoriesList />
      </StyledContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Categories;
