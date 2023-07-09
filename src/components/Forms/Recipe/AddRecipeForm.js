import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';

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

const AddRecipeForm = () => {
  // Початкові значення полів форми
  const initialValues = {
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
  };

  // Обробник подання форми
  const handleSubmit = (values, { setSubmitting }) => {
    // Виконати логіку для збереження рецепту
    console.log(values);

    // Після успішного збереження скидуємо значення полів форми
    setSubmitting(false);
  };

  // Валідація полів форми
  const validateForm = values => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Вкажіть заголовок рецепту';
    }

    if (!values.description) {
      errors.description = 'Вкажіть опис рецепту';
    }

    if (!values.ingredients) {
      errors.ingredients = 'Вкажіть інгредієнти';
    }

    if (!values.instructions) {
      errors.instructions = 'Вкажіть інструкції';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="title">Enter item title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div>
            <label htmlFor="description">Enter about recipe</label>
            <Field as="textarea" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>

          <div>
            <label htmlFor="ingredients">Інгредієнти</label>
            <Field as="textarea" name="ingredients" />
            <ErrorMessage name="ingredients" component="div" />
          </div>

          <div>
            <label htmlFor="category">Category</label>
            <Select options={categoryOptions} />
          </div>

          <div>
            <label htmlFor="time">Cooking time</label>
            <Select options={timeOptions} />
          </div>

          <div>
            <label htmlFor="instructions">Інструкції</label>
            <Field as="textarea" name="instructions" />
            <ErrorMessage name="instructions" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Додати рецепт
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
