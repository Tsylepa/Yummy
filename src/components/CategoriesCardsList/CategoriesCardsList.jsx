import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesByCategory } from 'redux/recipes/recipesOperations';
import RecipesCard from 'components/RecipesCard/RecipesCard';

export const CategoriesCardsList = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes.category);

  useEffect(() => {
    dispatch(getRecipesByCategory({ categoryName }));
  }, [dispatch, categoryName]);

  return recipes && <RecipesCard recipes={recipes} />;
};

export default CategoriesCardsList;
