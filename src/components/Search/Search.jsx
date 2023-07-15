import {InputButtonContainer, Button, Input } from "./Search.styled";

import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      setSearchParams({ query: searchValue });
      navigate('/search');
    }
  };
    return (
      <InputButtonContainer>
      <Input type="text" 
      value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Beaf"/>
       <Button onClick={handleSearch}>Search</Button>
      </InputButtonContainer>
    );
  };
  
  export default Search;