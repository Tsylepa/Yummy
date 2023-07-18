import {
    SearchTypeContainer,
    SearchTypeText,
    SelectControl,
  } from './SearchTypeSelector.styled';
  import React from 'react';
  
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'ingredient', label: 'Ingredients' },
  ];
   
  export default function SearchTypeSelector() {

    return (
          <SearchTypeContainer>
    <SearchTypeText>Search by:</SearchTypeText>
    <div>
      <SelectControl
        classNamePrefix="Select"
        options={options}
        placeholder="Title"
        styles={{
          dropdownIndicator: () => ({
            color: 'var(--accent-color)',
          }),
          indicatorSeparator: () => ({
            backgroundColor: 'transparent',
          }),
        }}
      />
    </div>
  </SearchTypeContainer>
    );
  }
  