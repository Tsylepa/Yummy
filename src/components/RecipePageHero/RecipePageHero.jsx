import React from 'react';
import { useDispatch } from "react-redux";
import { RecipePageButton, RecipePageContainer, RecipePageDescription, RecipePageTime, RecipePageTitle } from "./RecipePageHero.styled";
import Icon from "components/IconComponent/Icon";
import {addToFavorite, deleteFavorite} from "../../redux/recipes/recipesOperations";


const RecipePageHero =({title, description, time, recipeId, favorites})=>{
    
    
      const dispatch = useDispatch();

      const handleClickBtn = () => {
        if (favorites === undefined) {
          return;
        }
        if (favorites.length !== 0) {
          dispatch(deleteFavorite(recipeId));
         
          return;
        } else {
          dispatch(addToFavorite(recipeId));
          
        }
      };
        
      return (
        <RecipePageContainer>
            <div>
                <RecipePageTitle>{title}</RecipePageTitle>
                <RecipePageDescription>{description}</RecipePageDescription>
                <RecipePageButton type="button" onClick={handleClickBtn}>
        {favorites && favorites.length !== 0
          ? "Remove from favorite"
          : "Add to favorite recipes"}
      </RecipePageButton>
                <RecipePageTime><Icon name="icon-Clock" width="14px" height="14px" fill="transparent"/>{time} min</RecipePageTime>
            </div>
        </RecipePageContainer>
    )
}

export default RecipePageHero;



