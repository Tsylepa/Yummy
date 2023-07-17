import {
    SearchTypeWrapper,
    SearchTypeText,
    SelectControl,
  } from './SearchType.styled';
  import React from 'react';
  
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'ingredient', label: 'Ingredients' },
  ];
  
  
  export default function SearchTypeSelector() {

  
    return (
      <SearchTypeWrapper>
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
      </SearchTypeWrapper>
    );
  }
  