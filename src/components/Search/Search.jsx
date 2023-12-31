import {InputButtonContainer, Button, Input } from "./Search.styled";

import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(searchValue)}`);
    }
  };
    return (
      <InputButtonContainer>
      <Input type="text" 
      value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"/>
       <Button onClick={handleSearch}>Search</Button>
      </InputButtonContainer>
    );
  };
  
  export default Search;