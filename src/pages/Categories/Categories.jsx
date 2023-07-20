import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getCategories } from '../../api/recipes';

import CategoriesList from 'components/CategoriesList/CategoriesList';
import { StyledContainer } from './Categories.styled';
import { MainTitle } from 'components/MainTitle/MainTitle';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(categories => setCategories(categories))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <>
      <MainTitle text="Categories" />
      <StyledContainer>
        <>{<CategoriesList categories={categories} />}</>
      </StyledContainer>
      <Outlet />
    </>
  );
};

export default Categories;
