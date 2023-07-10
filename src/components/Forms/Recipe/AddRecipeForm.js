import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import Select from 'react-select';
import ImageUploading from 'react-images-uploading';
import {
  StyledForm,
  UploadBtn,
  Info,
  Desc,
  DescField,
  DescLabel,
  DescSelect,
  Input,
  Error,
  FormTitle,
  IngredientsHeader,
  QtySelector,
  IngredientContainer,
  Ingredient,
  Preparation,
  Instructions,
  ImageWrapper,
  IngredientsList,
  InstructionsError,
} from './AddRecipeForm.styled';

const categoryOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const timeOptions = [
  { value: '30 min', label: '30 min' },
  { value: '60 min', label: '60 min' },
  { value: '90 min', label: '90 min' },
];

const ingredientsOptions = [
  { value: 'Chicken', label: 'Chicken' },
  { value: 'Avocado', label: 'Avocado' },
  { value: 'Salmon', label: 'Salmon' },
];

const measureOptions = [
  { value: 'tbs', label: 'tbs' },
  { value: 'g', label: 'g' },
  { value: 'kg', label: 'kg' },
];

const AddRecipeForm = () => {
  const [image, setImage] = useState(null);
  const [ingredientsQty, setIngredientsQty] = useState(3);
  const [ingredients, setIngredients] = useState([]);

  const onChange = imageList => {
    setImage(imageList[0]);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    console.log(values);
  };

  const validateForm = values => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Please enter a title for the recipe';
    }

    if (!values.description) {
      errors.description = 'Please enter a description for the recipe';
    }

    if (!values.ingredients || values.ingredients.length === 0) {
      errors.ingredients = 'Please enter at least one ingredient';
    }

    if (!values.instructions) {
      errors.instructions = 'Please enter the recipe instructions';
    }

    return errors;
  };

  const handleDelete = i => {
    setIngredients(ingredients => ingredients.filter(ingr => ingr !== i));
    setShouldUpdateIngredientsQty(true);
  };

  const [shouldUpdateIngredientsQty, setShouldUpdateIngredientsQty] =
    useState(false);
  const [shouldUpdateIngredients, setShouldUpdateIngredients] = useState(false);

  useEffect(() => {
    if (shouldUpdateIngredientsQty) {
      setIngredientsQty(ingredients.length);
      setShouldUpdateIngredientsQty(false);
    }
  }, [ingredients.length, shouldUpdateIngredientsQty]);

  useEffect(() => {
    if (shouldUpdateIngredients) {
      setIngredients(Array.from({ length: ingredientsQty }, (_, i) => i));
      setShouldUpdateIngredients(false);
    }
  }, [ingredientsQty, shouldUpdateIngredients]);

  useEffect(() => {
    setIngredients(Array.from({ length: ingredientsQty }, (_, i) => i));
  }, [ingredientsQty]);

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        category: '',
        time: '',
        ingredients: Array.from({ length: ingredientsQty }, () => ''),
        instructions: '',
      }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Info>
            <div>
              <ImageUploading onChange={onChange}>
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <ImageWrapper onClick={onImageUpdate}>
                    {image ? <img src={image.dataURL} alt="" /> : <UploadBtn />}
                  </ImageWrapper>
                )}
              </ImageUploading>
            </div>
            <Desc>
              <DescField>
                <DescLabel htmlFor="title">Enter item title</DescLabel>
                <Input type="text" id="title" name="title" />
                <ErrorMessage name="title" component={Error} />
              </DescField>

              <DescField>
                <DescLabel htmlFor="description">Enter about recipe</DescLabel>
                <Input id="description" name="description" />
                <ErrorMessage name="description" component={Error} />
              </DescField>

              <DescField>
                <DescLabel>Category</DescLabel>
                <DescSelect
                  id="category"
                  name="category"
                  options={categoryOptions}
                />
              </DescField>

              <DescField>
                <DescLabel>Cooking time</DescLabel>
                <DescSelect id="time" options={timeOptions} />
              </DescField>
            </Desc>
          </Info>

          <div>
            <IngredientsHeader>
              <FormTitle>Ingredients</FormTitle>
              <QtySelector>
                <span onClick={() => setIngredientsQty(prevQty => prevQty - 1)}>
                  -
                </span>
                <span>{ingredientsQty}</span>
                <span onClick={() => setIngredientsQty(prevQty => prevQty + 1)}>
                  +
                </span>
              </QtySelector>
            </IngredientsHeader>
            <IngredientsList>
              {ingredients.map(i => (
                <IngredientContainer key={i}>
                  <Ingredient
                    id={`ingredients[${i}]`}
                    $options={ingredientsOptions}
                  />
                  <ErrorMessage
                    name={`ingredientsError[${i}]`}
                    component={Error}
                  />

                  <Select id={`measure[${i}]`} options={measureOptions} />
                  <ErrorMessage name={`measureError[${i}]`} component={Error} />

                  <button type="button" onClick={() => handleDelete(i)}>
                    X
                  </button>
                </IngredientContainer>
              ))}
            </IngredientsList>
          </div>

          <Preparation>
            <FormTitle htmlFor="instructions">Recipe Preparation</FormTitle>
            <Instructions
              as="textarea"
              id="instructions"
              name="instructions"
              placeholder="Enter recipe"
              rows="5"
            />
            <ErrorMessage name="instructions" component={InstructionsError} />
          </Preparation>

          <button type="submit" disabled={isSubmitting}>
            Add Recipe
          </button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
