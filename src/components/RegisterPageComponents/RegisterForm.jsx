import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiUser, FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import { signupSchema, ValidMessage } from './validationRegister';
import operations from 'redux/auth/authOperations';

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
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <Form noValidate>
            <h1>Registration</h1>
            <div>
              <label htmlFor="name">
                <Field
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces."
                  required
                  pattern="^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$"
                  placeholder="Name"
                />
                <FiUser />
                <ErrorMessage name="name" />
                {touched.name && !errors.name && isSubmit && <ValidMessage />}
              </label>
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
              Sign up
            </button>
          </Form>
        )}
      </Formik>

      <Link to={'/signin'}>Sign in</Link>
    </div>
  );
};
