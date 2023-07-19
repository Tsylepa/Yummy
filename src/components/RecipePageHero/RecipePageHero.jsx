import React from 'react';
import { useDispatch } from "react-redux";
import { RecipePageButton, RecipePageContainer, RecipePageDescription, RecipePageTime, RecipePageTitle } from "./RecipePageHero.styled";
import Icon from "components/IconComponent/Icon";
import { addToFavorite, deleteFavorite } from 'redux/favorite/favoriteOperations';


const RecipePageHero =({title, description, time, recipeId, favorites})=>{
  console.log(favorites)
    
    
      const dispatch = useDispatch();
      // хз откуда оно берет фейворит. чекните плз!Кнопка добавляет в фаворит но не меняет содержимое ибо undefined

      const handleClickBtn = () => {
        if (favorites === undefined) {
          // dispatch(addToFavorite(recipeId)); -добавить.
          // dispatch(deleteFavorite(recipeId)); - удалить.
          console.log(`undef`)
          return;
        }
        if (favorites.length !== 0) {
          console.log(`lenght!==0`)
          dispatch(deleteFavorite(recipeId));
         
          return;
        } else {
          console.log(`else`)
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



