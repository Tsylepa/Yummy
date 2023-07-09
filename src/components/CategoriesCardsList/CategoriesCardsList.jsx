import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import RecipesCard from 'components/RecipesCard/RecipesCard';

import recipesJS from '../../../src/recipes.json';
console.log(recipesJS);

export const CategoriesCardsList = () => {
  const [recipes, setRecipes] = useState(recipesJS);

  const { categoryName } = useParams();
  const newRecipes = recipes.filter(recip => recip.category === categoryName);

  return (
    <div>
      <h2>{categoryName}</h2>
      <ul>{<RecipesCard recipes={newRecipes} />}</ul>
    </div>
  );
};
export default CategoriesCardsList;
