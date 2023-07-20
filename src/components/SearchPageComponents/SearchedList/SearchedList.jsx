import { StyledContainer } from 'components/CategoriesList/CategoriesList.styled';
import RecipesCard from 'components/RecipesCard/RecipesCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRecipesByIngredient,
  searchRecipes,
} from 'redux/searchedRecipes/searchedRecipesOperations';
import { selectSearchedRecipes } from 'redux/searchedRecipes/searchedRecipesSelectors';

const SearchedList = ({ searchType, searchQuery }) => {
  const [setSearchResults] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectSearchFunction = () => {
      if (searchType === 'title') {
        return searchRecipes;
      } else if (searchType === 'ingredient') {
        return getRecipesByIngredient;
      }
    };

    const searchFunction = selectSearchFunction();

    dispatch(searchFunction(searchQuery))
      .then(searchResults => setSearchResults(searchResults))
      .catch(err => console.log(err.message));
  }, [dispatch, searchQuery, searchType, setSearchResults]);

  const load = useSelector(selectSearchedRecipes);

  return (
    <div>
      {load.searchedRecipes.length > 0 ? (
        <StyledContainer>
          {<RecipesCard recipes={load.searchedRecipes} />}
        </StyledContainer>
      ) : (
        ''
      )}
    </div>
  );
};

export default SearchedList;
