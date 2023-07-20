import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  RecipePageButton,
  RecipePageContainer,
  RecipePageDescription,
  RecipePageTime,
  RecipePageTitle,
} from './RecipePageHero.styled';
import Icon from 'components/IconComponent/Icon';
import {
  addToFavorite,
  deleteFavorite,
} from 'redux/favorite/favoriteOperations';

const RecipePageHero = ({ title, description, time, recipeId }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.auth.user.favorite);
  const [liked, setLiked] = useState(Boolean(favorites.includes(recipeId)));

  const handleClickBtn = () => {
    if (liked) {
      dispatch(deleteFavorite(recipeId));
    } else {
      dispatch(addToFavorite(recipeId));
    }
    setLiked(!liked);
  };
  return (
    <RecipePageContainer>
      <div>
        <RecipePageTitle>{title}</RecipePageTitle>
        <RecipePageDescription>{description}</RecipePageDescription>
        <RecipePageButton type="button" onClick={handleClickBtn}>
          {liked ? 'Remove from favorite' : 'Add to favorite recipes'}
        </RecipePageButton>
        <RecipePageTime>
          <Icon
            name="icon-Clock"
            width="14px"
            height="14px"
            fill="transparent"
          />
          {time} min
        </RecipePageTime>
      </div>
    </RecipePageContainer>
  );
};

export default RecipePageHero;
