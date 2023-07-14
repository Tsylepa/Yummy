import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { StyledContainer } from './CategoriesCardsList.styled';

import RecipesCard from 'components/RecipesCard/RecipesCard';

import recipesJS from '../../../src/recipes.json';
// console.log(recipesJS);

export const CategoriesCardsList = () => {
  const [recipes, setRecipes] = useState(recipesJS);

  const { categoryName } = useParams();
  const newRecipes = recipes.filter(recip => recip.category === categoryName);

  return (
    <div>
      <h2>{categoryName}</h2>
      <StyledContainer>{<RecipesCard recipes={newRecipes} />}</StyledContainer>
    </div>
  );
};
export default CategoriesCardsList;