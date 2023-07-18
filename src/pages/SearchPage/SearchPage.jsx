import React from 'react';

import SearchPageTitle from 'components/SearchPageComponents/SearchPageTitle/SearchPageTitle';
import SearchBar from 'components/SearchPageComponents/SearchBar/SearchBar';

import SearchNotFound from 'components/SearchPageComponents/SearchNotFound/SearchNotFound';

import { StyledContainer } from 'components/Container/Container.styled';
import { Section, SearcheRecipesContainer } from './SearchPage.styled';


export default function SearchPage() {
     
  return (

<Section>
    <StyledContainer>
        <SearchPageTitle />
        <SearchBar />
          
              <SearcheRecipesContainer>
                {/* <SearchedRecipesList /> */}
              </SearcheRecipesContainer> 

        <SearchNotFound/>
    </StyledContainer>
</Section>

  );
}


