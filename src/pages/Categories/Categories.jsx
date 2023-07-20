import { Outlet } from 'react-router-dom';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import { StyledContainer } from './Categories.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';

const Categories = () => {
  return (
    <>
      <MainTitle text="Categories" />
      <StyledContainer>
        <CategoriesList />
      </StyledContainer>
      <Outlet />
    </>
  );
};

export default Categories;
