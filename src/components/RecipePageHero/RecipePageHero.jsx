import React, { useState } from 'react';
import { RecipePageButton, RecipePageContainer, RecipePageDescription, RecipePageTime, RecipePageTitle } from "./RecipePageHero.styled";
import Icon from "components/IconComponent/Icon";

const RecipePageHero =({title, description, time})=>{
    const [isFavorite, setIsFavorite] = useState(false);
    const handleToggleFavorite = () => {
        // Запит до сервера
        setIsFavorite((prevState) => !prevState);
      };
    return (
        <RecipePageContainer>
            <div>
                <RecipePageTitle>{title}</RecipePageTitle>
                <RecipePageDescription>{description}</RecipePageDescription>
                {isFavorite ? (
          <RecipePageButton onClick={handleToggleFavorite}>Remove from favorites</RecipePageButton>
        ) : (
          <RecipePageButton onClick={handleToggleFavorite}>Add to favorite recipes</RecipePageButton>
        )}
                <RecipePageTime><Icon name="icon-Clock" width="14px" height="14px" fill="transparent"/>{time} min</RecipePageTime>
            </div>
        </RecipePageContainer>
    )
}

export default RecipePageHero