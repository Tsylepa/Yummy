import SearchForm from '../SearchForm/SearchForm';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';

import { SearchBarContainer } from './SearchBar.styled';

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchForm />
      <SearchTypeSelector />
    </SearchBarContainer>
  );
}