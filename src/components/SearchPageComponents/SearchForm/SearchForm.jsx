import React from 'react';
import {
  FormWrapper,
  Form,
  SearchFormField,
  SearchFormButton,
} from './SearchForm.styled';


export default function SearchForm() {


  return (
    <FormWrapper>
      <Form>
        <SearchFormField
          type="text"
          name="name"
          placeholder="Search..."
        />
        <SearchFormButton>Search</SearchFormButton>
      </Form>
    </FormWrapper>
  );
}
