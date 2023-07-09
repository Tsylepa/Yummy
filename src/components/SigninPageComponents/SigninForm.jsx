import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiUser, FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import { signinSchema, ValidMessage } from './validationSignin';
import operations from 'redux/auth/authOperations';

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export const SigninForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    dispatch(operations.logIn(value));
    setIsSubmit(false);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={signinSchema}
        onSubmit={handleSubmit}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <Form noValidate>
            <h1>Sign In</h1>
            <div>
              <label htmlFor="email">
                <Field type="email" name="email" placeholder="Email" required />
                <HiOutlineMail />
                <ErrorMessage name="email" />
                {touched.email && !errors.email && isSubmit && <ValidMessage />}
              </label>
              <label htmlFor="password">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <FiLock />
                <ErrorMessage name="password" />
                {touched.password && !errors.password && isSubmit && (
                  <ValidMessage>Password is secure</ValidMessage>
                )}
              </label>
            </div>

            <button type="submit" onClick={() => setIsSubmit(true)}>
              Sign in
            </button>
          </Form>
        )}
      </Formik>

      <Link to={'/auth'}>Registration</Link>
    </div>
  );
};
