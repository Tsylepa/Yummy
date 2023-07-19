import RecipePageHero from "components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "components/RecipePreparation/RecipePreparation";
import { getRecipeById } from "../../redux/recipes/recipesOperations"

import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



const RecipePage = ()=> {
    
    const dispatch = useDispatch();
    const recipe = useSelector((state) => state.recipes.recipeById); 
    const isLoading = useSelector((state) => state.recipes.isLoading);
    const error = useSelector((state) => state.recipes.error);
  
    const { recipeId } = useParams();
    
    useEffect(() => {
      dispatch(getRecipeById({ recipeId }));
    }, [dispatch, recipeId]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    
    if (!recipe[recipeId]) {
      return <div>Recipe not found.</div>;
    }
  
    
    const { title, description, time, ingredients, preview, instructions, favorites } = recipe[recipeId];
    return (
        <>
        <RecipePageHero title={title} description={description} time={time} recipeId = {recipeId} favorites = {favorites}/>
       <RecipeIngredientsList ingredients={ingredients}/>
        <RecipePreparation image={preview} preparationSteps={instructions.split('\r\n')}/>
    </>
    )
}

export default RecipePage;