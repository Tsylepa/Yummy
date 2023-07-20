import React, { useState } from 'react';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { Wrapper } from 'pages/AddRecipe/AddRecipe.styled';
import SearchTypeSelector from 'components/SearchPageComponents/SearchType/SearchType';
import SearchForm from 'components/SearchPageComponents/SearchForm/SearchForm';
import SearchNotFound from 'components/SearchPageComponents/SearchNotFound/SearchNotFound';
import SearchedList from 'components/SearchPageComponents/SearchedList/SearchedList';

const SearchPage = () => {
  const [searchType, setSearchType] = useState('title');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchType = type => {
    setSearchType(type);
  };

  const handleSearch = query => {
    setSearchQuery(query);
    setSearchType(query ? 'ingredient' : 'title');
  };

  return (
    <>
      <MainTitle text="Search" />
      <Wrapper>
        <SearchForm handleSearch={handleSearch} />
        <SearchTypeSelector handleSearchType={handleSearchType} />
        <SearchedList searchType={searchType} searchQuery={searchQuery} />
        {searchQuery && <SearchNotFound />}
      </Wrapper>
    </>
  );
};

export default SearchPage;

// import React, { useState } from 'react';
// import { Wrapper } from 'pages/AddRecipe/AddRecipe.styled';
// import SearchForm from 'components/SearchPageComponents/SearchForm/SearchForm';
// import { MainTitle } from 'pages/Main/Main.styled';
// import SearchTypeSelector from 'components/SearchPageComponents/SearchType/SearchType';
// import SearchedList from 'components/SearchPageComponents/SearchedList/SearchedList';

// const SearchPage = () => {
//   const [searchType, setSearchType] = useState('title');

//   const handleSearchType = type => {
//     setSearchType(type);
//   };

//   return (
//     <>
//       <MainTitle text="Search" />
//       <Wrapper>
//         <SearchForm handleSearchType={handleSearchType} />
//         <SearchTypeSelector handleSearchType={handleSearchType} />
//         <SearchedList searchType={searchType} />
//         <SearchNotFound />
//       </Wrapper>
//     </>
//   );
// };

// export default SearchPage;

// import React from 'react';
// import SearchTypeSelector from 'components/SearchPageComponents/SearchType/SearchType';
// import { MainTitle } from 'components/MainTitle/MainTitle';
// import { Wrapper } from 'pages/AddRecipe/AddRecipe.styled';
// import SearchedList from 'components/SearchPageComponents/SearchedList/SearchedList';
// import Search from 'components/Search/Search';

// const SearchPage = () => {
//   return (
//     <>
//       <MainTitle text="Search" />
//       <Wrapper>
//         <Search />
//         <SearchTypeSelector />
//         <SearchedList />
//         {/* <SearchNotFound /> */}
//       </Wrapper>
//     </>
//   );
// };
// export default SearchPage;
