import * as Yup from 'yup';

export const recipeSchema = Yup.object().shape({
  title: Yup.string().required('Please enter a title for the recipe'),
  description: Yup.string().required(
    'Please enter a description for the recipe'
  ),
  category: Yup.string().required('Please select a category'),
  time: Yup.string().required('Please select cooking time'),
  thumb: Yup.mixed().required('Please upload a thumbnail image'),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        // id: Yup.string().required('Please select an ingredient'),
        measure: Yup.array().required('Please select a measure'),
      })
    )
    .min(1, 'Please enter at least one ingredient'),
  instructions: Yup.string().required('Please enter the recipe instructions'),
});

export const validateForm = async values => {
  try {
    await recipeSchema.validate(values, { abortEarly: false });
    return {};
  } catch (error) {
    const errors = {};
    error.inner.forEach(err => {
      errors[err.path] = err.message;
    });
    return errors;
  }
};
