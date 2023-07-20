import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from 'api/recipes';

import {
  StyledCategoriesList,
  StyledContainer,
  BaseNavLink,
} from './CategoriesList.styled';

const CategoriesList = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(categories => setCategories(categories))
      .catch(err => console.log(err.message));
  }, []);
  return (
    <StyledContainer>
      {categories.map(categorie => (
        <StyledCategoriesList key={categorie._id}>
          <BaseNavLink
            to={`/categories/${categorie.name}`}
            state={{ from: location }}
          >
            {categorie.name}
          </BaseNavLink>
        </StyledCategoriesList>
      ))}
    </StyledContainer>
  );
};
export default CategoriesList;
