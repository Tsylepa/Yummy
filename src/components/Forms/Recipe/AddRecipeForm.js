import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  IngredientsWrapper,
  IngredientContainer,
  Ingredient,
  Measure,
  MeasureInput,
  Preparation,
  Instructions,
  ImageWrapper,
  IngredientsList,
  InstructionsError,
  Delete,
  IngredientsButton,
} from './AddRecipeForm.styled';
import { getIngredients, getCategories } from 'api/recipes';
import Icon from 'components/IconComponent/Icon';
import { recipeSchema } from 'schemas/AddRecipeSchema';
import { addRecipe } from 'redux/recipes/recipesOperations';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';

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
    padding: '0 8px',
    lineHeight: 1,
  }),
  input: baseStyles => ({
    ...baseStyles,
    textAlign: 'right',
    justifySelf: 'right',
    padding: 0,
    margin: 0,
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
    width: '100%',
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
  container: () => ({
    ...selectorStyles.container(),
    backgroundColor: 'var(--input-bg-color)',
    borderRadius: 4,
    fontSize: 14,
    padding: 16,
    flex: 3,
  }),
  menu: baseStyles => ({
    ...baseStyles,
    ...selectorStyles.menu(),
    position: 'absolute',
    backgroundColor: 'var(--selector-menu-color)',
    top: 50,
    right: 0,
    padding: 16,
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: 0,
  }),
  input: baseStyles => ({
    ...baseStyles,
    margin: 0,
    padding: 0,
  }),
};

const measureSelectorStyles = {
  ...ingredientsSelectorStyles,
  container: () => ({
    ...ingredientsSelectorStyles.container(),
    position: 'static',
    backgroundColor: 'transparent',
    flex: 0.5,
    width: 50,
    padding: 0,
  }),
  input: () => ({
    display: 'none',
  }),

  singleValue: () => ({
    width: 20,
  }),
  placeholder: () => ({
    display: 'none',
  }),
};

const AddRecipeForm = () => {
  const [image, setImage] = useState(null);
  const [ingredientsQty, setIngredientsQty] = useState(3);
  const [ingredients, setIngredients] = useState(
    Array.from({ length: ingredientsQty }, (_, i) => {
      return { id: '', measure: [] };
    })
  );
  const [ingredientsList, setIngredientsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const navigate = useNavigate();

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

    values.ingredients.map(ingr => (ingr.measure = ingr.measure.join(' ')));

    formData.append('file', image.file);
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('category', values.category);
    formData.append('time', values.time);
    formData.append('ingredients', JSON.stringify(values.ingredients));
    formData.append('instructions', values.instructions);
    dispatch(addRecipe(formData));

    navigate('/my');
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
      validateOnBlur={false}
      validateOnChange={false}
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
                    classNames={{
                      valueContainer: () => 'valueContainer',
                    }}
                    options={categoriesOptions}
                    onChange={selected => {
                      setFieldValue('category', selected.value);
                    }}
                    styles={{
                      ...selectorStyles,
                      container: () => ({
                        position: 'relative',
                        width: 123,
                      }),
                    }}
                  />
                  <ErrorMessage name="category" component={Error} />
                </DescField>

                <DescField>
                  <DescLabel>Cooking time</DescLabel>
                  <DescSelect
                    id="time"
                    classNames={{
                      valueContainer: () => 'valueContainer',
                    }}
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

            <IngredientsWrapper>
              <IngredientsHeader>
                <FormTitle>Ingredients</FormTitle>
                <QtySelector>
                  <IngredientsButton
                    onClick={() => setIngredientsQty(prevQty => prevQty - 1)}
                  >
                    <Icon name="icon-minus" width="14" height="14" />
                  </IngredientsButton>
                  <span>{ingredientsQty}</span>
                  <IngredientsButton
                    onClick={() => setIngredientsQty(prevQty => prevQty + 1)}
                  >
                    <Icon name="icon-plus" width="14" height="14" />
                  </IngredientsButton>
                </QtySelector>
              </IngredientsHeader>
              <IngredientsList>
                {Array.from({ length: ingredientsQty }, (_, i) => (
                  <IngredientContainer key={i}>
                    <Ingredient
                      id={`ingredients[${i}]`}
                      classNames={{
                        valueContainer: () => 'valueContainer',
                        menu: () => 'menu',
                      }}
                      options={ingredientsOptions}
                      onChange={selected => {
                        setIngredients(prev =>
                          prev.map((ing, idx) => {
                            if (idx !== i) return ing;
                            {
                              return { ...ing, id: selected.value };
                            }
                          })
                        );
                      }}
                      styles={ingredientsSelectorStyles}
                    />

                    <Measure>
                      <MeasureInput
                        name="measureValue"
                        autoComplete="off"
                        onChange={({ target }) => {
                          setIngredients(prev =>
                            prev.map((ing, idx) => {
                              if (idx !== i) return ing;
                              {
                                const newArr = ing.measure;
                                newArr[0] = target.value;
                                return { ...ing, measure: newArr };
                              }
                            })
                          );
                        }}
                      />
                      <Ingredient
                        id={`measure[${i}]`}
                        options={measureOptions}
                        classNames={{
                          valueContainer: () => 'valueContainer',
                          menu: () => 'menu',
                        }}
                        onChange={selected => {
                          setIngredients(prev =>
                            prev.map((ing, idx) => {
                              if (idx !== i) return ing;
                              {
                                const newArr = ing.measure;
                                newArr[1] = selected.value;
                                return { ...ing, measure: newArr };
                              }
                            })
                          );
                          console.log(values.ingredients);
                        }}
                        styles={measureSelectorStyles}
                      />
                    </Measure>

                    <ErrorMessage
                      name={`ingredients[${i}].id`}
                      component={Error}
                    />
                    <ErrorMessage
                      name={`ingredients[${i}].measure`}
                      component={Error}
                    />

                    <Delete type="button" onClick={handleDeleteIngredient}>
                      <Icon name="cross" width="18" height="18" />
                    </Delete>
                  </IngredientContainer>
                ))}
              </IngredientsList>
            </IngredientsWrapper>

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

            <ButtonSkew type="submit" variant="primary" disabled={isSubmitting}>
              Add
            </ButtonSkew>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default AddRecipeForm;
