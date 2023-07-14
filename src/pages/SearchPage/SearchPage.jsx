import React from 'react';

import { StyledContainer } from 'components/Container/Container.styled';
import { Section, SearcheRecipesContainer } from './SearchPage.styled';

import SearchPageTitle from 'components/SearchPageComponents/SearchPageTitle/SearchPageTitle';
import SearchForm from 'components/SearchPageComponents/SearchForm/SearchForm';
import SearchTypeSelector from 'components/SearchPageComponents/SearchType/SearchType';
import SearchNotFound from 'components/SearchPageComponents/SearchNotFound/SearchNotFound';




export default function SearchPage() {

  return (

    <Section>
      <StyledContainer>
        <SearchPageTitle />
        <SearchForm />
        <SearchTypeSelector />

        {/* <SearchedList />  (or other component, when search is OK) or */}

        <SearchNotFound />
      <SearcheRecipesContainer>
      </SearcheRecipesContainer>

      </StyledContainer>
    </Section>

  );
}
