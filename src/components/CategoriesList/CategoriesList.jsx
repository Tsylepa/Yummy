import { useState, useEffect } from 'react';
import { getCategories } from 'api/recipes';
import {
  StyledCategoriesList,
  BaseNavLink,
  StyledContainer,
} from './CategoriesList.styled';

const CategoriesList = () => {
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
          <BaseNavLink to={`/categories/${categorie.name}`}>
            {categorie.name}
          </BaseNavLink>
        </StyledCategoriesList>
      ))}
    </StyledContainer>
  );
};

export default CategoriesList;
