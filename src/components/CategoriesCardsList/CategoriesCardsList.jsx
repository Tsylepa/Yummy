import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllRecipes } from '../../api/recipes';
import { useDispatch } from 'react-redux';

import { StyledContainer } from './CategoriesCardsList.styled';

import RecipesCard from 'components/RecipesCard/RecipesCard';

export const CategoriesCardsList = () => {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then(recipes => setRecipes(recipes))
      .catch(err => console.log(err.message));
  }, [dispatch]);

  const { categoryName } = useParams();
  const newRecipes = recipes.filter(recip => recip.category === categoryName);

  return (
    <div>
      <StyledContainer>{<RecipesCard recipes={newRecipes} />}</StyledContainer>
    </div>
  );
};
export default CategoriesCardsList;
