import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
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
  Hidden,
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
import { getIngredients, getCategories } from 'api/recipes';
import Icon from 'components/IconComponent/Icon';
import { recipeSchema } from 'schemas/AddRecipeSchema';
import { addRecipe } from 'redux/recipes/recipesOperations';

const timeOptions = [
  { value: '30 min', label: '30 min' },
  { value: '60 min', label: '60 min' },
  { value: '90 min', label: '90 min' },
];

const measureOptions = [
  { value: 'tbs', label: 'tbs' },
  { value: 'g', label: 'g' },
  { value: 'kg', label: 'kg' },
];

const selectorStyles = {
  container: () => ({
    flex: 1,
    position: 'relative',
  }),
  control: () => ({
    display: 'flex',
    width: '100%',
    border: 'none',
    cursor: 'pointer',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 400,
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    padding: '0 3px',
  }),
  input: baseStyles => ({
    ...baseStyles,
    textAlign: 'right',
    justifySelf: 'right',
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    margin: 0,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: () => ({
    display: 'flex',
    alignItems: 'center',
    color: 'var(--accent-color)',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    position: 'absolute',
    width: 'initial',
    top: 24,
    right: 0,
    boxShadow:
      '0px 6.518518447875977px 7.8222222328186035px 0px rgba(0, 0, 0, 0.03)',
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    gap: 4,
    padding: '8px 26px 8px 14px',
  }),
  option: (_, state) => ({
    color: state.isFocused && 'var(--accent-color)',
    borderRadius: 4,
    fontSize: 12,
    opacity: 0.5,
    cursor: 'pointer',
  }),
};

const ingredientsSelectorStyles = {
  ...selectorStyles,
  container: baseStyles => ({
    ...baseStyles,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
    padding: 16,
  }),
  menu: baseStyles => ({ ...baseStyles, padding: 16 }),
  valueContainer: baseStyles => ({ ...baseStyles }),
  input: baseStyles => ({
    ...baseStyles,
  }),
};

const AddRecipeForm = () => {
  const [image, setImage] = useState(null);
  const [ingredientsQty, setIngredientsQty] = useState(3);
  const [ingredients, setIngredients] = useState(
    Array.from({ length: ingredientsQty }, (_, i) => {
      return { id: '', name: '', measure: '' };
    })
  );
  const [ingredientsList, setIngredientsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const runEffect = async () => {
      try {
        const fetchedIngredientsList = await getIngredients();
        const fetchedCategoriesList = await getCategories();

        setIngredientsList(fetchedIngredientsList);
        setCategoriesList(fetchedCategoriesList);
      } catch (error) {
        console.log(error);
      }
    };
    runEffect();
  }, []);

  const onChange = imageList => {
    setImage(imageList[0]);
  };

  const categoriesOptions = categoriesList.map(ctg => {
    return { value: ctg.name, label: ctg.name };
  });

  const ingredientsOptions = ingredientsList.map(i => {
    return { value: i._id, label: i.name };
  });

  const dispatch = useDispatch();
  const formData = new FormData();

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    formData.append('file', image.file);
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('category', values.category);
    formData.append('time', values.time);
    formData.append('ingredients', JSON.stringify(values.ingredients));
    formData.append('instructions', values.instructions);
    dispatch(addRecipe(formData));
    console.log('formData', formData);
  };

  const handleDeleteIngredient = i => {
    setIngredients(ingredients => ingredients.filter(ingr => ingr !== i));
  };

  return (
    <Formik
      initialValues={{
        thumb: null,
        title: '',
        description: '',
        category: '',
        time: '',
        ingredients,
        instructions: '',
      }}
      validationSchema={recipeSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, setFieldValue, values }) => {
        values.thumb = image || null;

        return (
          <StyledForm>
            <Info>
              <div>
                <ImageUploading onChange={onChange}>
                  {({ onImageUpdate }) => (
                    <ImageWrapper onClick={onImageUpdate}>
                      {image ? (
                        <img src={values.thumb.dataURL} alt="" />
                      ) : (
                        <UploadBtn>
                          <Icon name="camera" width="64" height="64" />
                        </UploadBtn>
                      )}
                    </ImageWrapper>
                  )}
                </ImageUploading>
                <ErrorMessage name="thumb" component={Error} />
              </div>
              <Desc>
                <DescField>
                  <DescLabel htmlFor="title">Enter item title</DescLabel>
                  <Input type="text" id="title" name="title" />
                  <ErrorMessage name="title" component={Error} />
                </DescField>

                <DescField>
                  <DescLabel htmlFor="description">
                    Enter about recipe
                  </DescLabel>
                  <Input id="description" name="description" />
                  <ErrorMessage name="description" component={Error} />
                </DescField>

                <DescField>
                  <DescLabel>Category</DescLabel>
                  <DescSelect
                    options={categoriesOptions}
                    onChange={selected => {
                      setFieldValue('category', selected.value);
                    }}
                    styles={selectorStyles}
                  />
                  <ErrorMessage name="category" component={Error} />
                </DescField>

                <DescField>
                  <DescLabel>Cooking time</DescLabel>
                  <DescSelect
                    id="time"
                    options={timeOptions}
                    onChange={selected => {
                      setFieldValue('time', selected.value);
                    }}
                    styles={selectorStyles}
                  />
                  <ErrorMessage name="time" component={Error} />
                </DescField>
              </Desc>
            </Info>

            <div>
              <IngredientsHeader>
                <FormTitle>Ingredients</FormTitle>
                <QtySelector>
                  <span
                    onClick={() => setIngredientsQty(prevQty => prevQty - 1)}
                  >
                    -
                  </span>
                  <span>{ingredientsQty}</span>
                  <span
                    onClick={() => setIngredientsQty(prevQty => prevQty + 1)}
                  >
                    +
                  </span>
                </QtySelector>
              </IngredientsHeader>
              <IngredientsList>
                {Array.from({ length: ingredientsQty }, (_, i) => (
                  <IngredientContainer key={i}>
                    <Ingredient
                      id={`ingredients[${i}]`}
                      options={ingredientsOptions}
                      onChange={selected => {
                        setFieldValue(`ingredients[${i}].id`, selected.value);
                        setFieldValue(`ingredients[${i}].name`, selected.label);
                      }}
                      styles={{
                        ...ingredientsSelectorStyles,
                      }}
                    />

                    <Select
                      id={`measure[${i}]`}
                      options={measureOptions}
                      onChange={selected => {
                        setFieldValue(
                          `ingredients[${i}].measure`,
                          selected.value
                        );
                      }}
                      styles={ingredientsSelectorStyles}
                    />

                    <ErrorMessage
                      name={`ingredients[${i}].id`}
                      component={Error}
                    />
                    <ErrorMessage
                      name={`ingredients[${i}].measure`}
                      component={Error}
                    />

                    <button type="button">X</button>
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
                onChange={handleChange}
                rows="5"
              />
              <ErrorMessage name="instructions" component={InstructionsError} />
            </Preparation>

            <button type="submit" disabled={isSubmitting}>
              Add Recipe
            </button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default AddRecipeForm;
