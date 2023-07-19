import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Formik, ErrorMessage } from 'formik';
import { signupSchema, ValidMessage } from './validationRegister';
import {
  FormWrapper,
  FormStyled,
  LabelStyled,
  FieldStyled,
  FormTitle,
  FieldsWrapper,
  UserIcon,
  EmailIcon,
  PasswordIcon,
  SubmitBtn,
  LinkStyled,
} from './RegisterForm.styled';
import operations from 'redux/auth/authOperations';
import { BgOrderFoodImg } from '../../pages/Register/Register.styled';

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    dispatch(operations.register(value));
    setIsSubmit(false);
    resetForm();
  };

  return (
    <FormWrapper>
      <BgOrderFoodImg></BgOrderFoodImg>
      <Formik
        initialValues={initialValue}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <FormStyled noValidate>
            <FormTitle>Registration</FormTitle>
            <FieldsWrapper>
              <LabelStyled htmlFor="name">
                <FieldStyled
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces."
                  required
                  pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
                  placeholder="Name"
                />
                <UserIcon />
                <ErrorMessage name="name" />
                {touched.name && !errors.name && isSubmit && <ValidMessage />}
              </LabelStyled>
              <LabelStyled htmlFor="email">
                <FieldStyled
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <EmailIcon />
                <ErrorMessage name="email" />
                {touched.email && !errors.email && isSubmit && <ValidMessage />}
              </LabelStyled>
              <LabelStyled htmlFor="password">
                <FieldStyled
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <PasswordIcon />
                <ErrorMessage name="password" />
                {touched.password && !errors.password && isSubmit && (
                  <ValidMessage>Password is secure</ValidMessage>
                )}
              </LabelStyled>
            </FieldsWrapper>

            <SubmitBtn type="submit" onClick={() => setIsSubmit(true)}>
              Sign up
            </SubmitBtn>
          </FormStyled>
        )}
      </Formik>

      <LinkStyled to={'/signin'}>Sign in</LinkStyled>
    </FormWrapper>
  );
};
