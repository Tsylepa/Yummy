import React from 'react';
import Select from 'react-select';
import { SearchTypeWrapper, SearchTypeText } from './SearchType.styled';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredients' },
];

const SearchTypeSelector = ({ handleSearchType }) => {
  const handleChange = selectedOption => {
    handleSearchType(selectedOption.value);
  };

  return (
    <SearchTypeWrapper>
      <SearchTypeText>Search by:</SearchTypeText>
      <div>
        <Select
          classNamePrefix="Select"
          options={options}
          placeholder="Title"
          style={{
            dropdownIndicator: () => ({
              color: 'var(--accent-color)',
            }),
            indicatorSeparator: () => ({
              backgroundColor: 'transparent',
            }),
          }}
          onChange={handleChange}
        />
      </div>
    </SearchTypeWrapper>
  );
};

export default SearchTypeSelector;

// import React, { useState } from 'react';
// import Select from 'react-select';

// const options = [
//   { value: 'title', label: 'Title' },
//   { value: 'ingredient', label: 'Ingredients' },
// ];

// const SearchTypeSelector = ({ handleSearchType }) => {
//   const [selectedType, setSelectedType] = useState(options[0].value);

//   const handleTypeChange = selectedOption => {
//     setSelectedType(selectedOption.value);
//     handleSearchType(selectedOption.value);
//   };

//   return (
//     <div>
//       <label>Search by:</label>
//       {/* <SelectControl
//         classNamePrefix="Select"
//         placeholder="Title"
//         value={options.find(option => option.value === selectedType)}
//         options={options}
//         onChange={handleTypeChange}
//         styles={{
//           dropdownIndicator: () => ({
//             color: 'var(--accent-color)',
//           }),
//           indicatorSeparator: () => ({
//             backgroundColor: 'transparent',
//           }),
//         }}
//       /> */}

//       <Select
//         value={options.find(option => option.value === selectedType)}
//         options={options}
//         onChange={handleTypeChange}
//       />
//     </div>
//   );
// };

// export default SearchTypeSelector;

// import {
//   SearchTypeWrapper,
//   SearchTypeText,
//   SelectControl,
// } from './SearchType.styled';
// import React from 'react';

// const options = [
//   { value: 'title', label: 'Title' },
//   { value: 'ingredient', label: 'Ingredients' },
// ];

// export default function SearchTypeSelector() {
//   return (
//     <SearchTypeWrapper>
//       <SearchTypeText>Search by:</SearchTypeText>
//       <div>
//         <SelectControl
//           classNamePrefix="Select"
//           options={options}
//           placeholder="Title"
//           styles={{
//             dropdownIndicator: () => ({
//               color: 'var(--accent-color)',
//             }),
//             indicatorSeparator: () => ({
//               backgroundColor: 'transparent',
//             }),
//           }}
//         />
//       </div>
//     </SearchTypeWrapper>
//   );
// }
