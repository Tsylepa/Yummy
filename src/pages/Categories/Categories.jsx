import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getCategories } from '../../api/recipes';

import CategoriesList from 'components/CategoriesList/CategoriesList';
import {
  StyledContainer,
  StyledText,
  StyledCategoriesPagesWraper,
} from './Categories.styled';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(categories => setCategories(categories))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <StyledCategoriesPagesWraper>
      <StyledText>Categories</StyledText>
      <StyledContainer>
        <>{<CategoriesList categories={categories} />}</>
      </StyledContainer>
      <Outlet />
    </StyledCategoriesPagesWraper>
  );
};

export default Categories;
