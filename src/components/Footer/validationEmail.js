import * as Yup from 'yup';

import {
  ErrorValidation,
  ErrorValidationIcon,
  CorrectValidation,
  CorrectIconValidationIcon,
} from './Footer.styled';

const emailRules = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const errorMessage = msg => {
  return (
    <div className="error">
      <ErrorValidation>{msg}</ErrorValidation>
      <ErrorValidationIcon />
    </div>
  );
};

export const ValidMessage = ({ children }) => {
  return (
    <div className="valid">
      <CorrectValidation>{children}</CorrectValidation>
      <CorrectIconValidationIcon />
    </div>
  );
};

export const signupSchema = Yup.object().shape({
  
  email: Yup.string()
    .email(errorMessage('Invalid email format'))
    .matches(emailRules, {
      message: errorMessage('Invalid email format'),
      excludeEmptyString: true,
    })
    .required(errorMessage('This field is required')),

});
