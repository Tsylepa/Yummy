import React, { useState } from 'react';
import {
  // FormWrapper,
  Form,
  // SearchFormField,
  // SearchFormButton,
} from './SearchForm.styled';
import {
  Button,
  Input,
  InputButtonContainer,
} from 'components/Search/Search.styled';

const SearchForm = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputButtonContainer
        style={{
          position: 'unset',
          top: 'unset',
          left: 'unset',
          marginBottom: '24px',
        }}
      >
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
        />
        <Button
          type="submit"
          style={{
            backgroundColor: ' var(--accent-color)',
            borderColor: ' var(--accent-color)',
          }}
        >
          Search
        </Button>
      </InputButtonContainer>
    </Form>
  );
};
export default SearchForm;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SearchForm = ({ handleSearchType }) => {
//   const [searchValue, setSearchValue] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = e => {
//     e.preventDefault();
//     if (searchValue.trim() !== '') {
//       navigate(
//         `/search/${encodeURIComponent(searchValue)}/${handleSearchType}`
//       );
//     }
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         value={searchValue}
//         onChange={e => setSearchValue(e.target.value)}
//         placeholder="Search"
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchForm;

// import React from 'react';
// import {
//   FormWrapper,
//   Form,
//   SearchFormField,
//   SearchFormButton,
// } from './SearchForm.styled';

// const SearchForm = () =>
//   // { onChange, searchValue }
//   {
//     return (
//       <FormWrapper>
//         <Form>
//           <SearchFormField
//             type="text"
//             name="name"
//             placeholder="Search..."
//             // value={searchValue}
//             // onChange={onChange(searchValue)}
//           />
//           <SearchFormButton>Search</SearchFormButton>
//         </Form>
//       </FormWrapper>
//     );
//   };
// export default SearchForm;
