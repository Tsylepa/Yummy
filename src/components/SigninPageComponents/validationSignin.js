import * as Yup from 'yup';
import {
  ErrorValidation,
  ErrorValidationIcon,
  CorrectValidation,
  CorrectIconValidationIcon,
} from '../RegisterPageComponents/RegisterForm.styled';

const nameRules =
  /^[a-zA-Z0-9а-яА-Я]+((['-](?=[a-zA-Z0-9а-яА-Я])|(?=[a-zA-Z0-9а-яА-Я]))?[a-zA-Z0-9а-яА-Я]*)*$/;
const emailRules =
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRules = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{6,255}$/;

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

export const signinSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, errorMessage('Name is too short'))
    .max(16, errorMessage('Name is too long'))
    .matches(nameRules, {
      message: errorMessage('Invalid name'),
      excludeEmptyString: true,
    })
    .required(errorMessage('This field is required')),
  email: Yup.string()
    .email(errorMessage('Invalid email format'))
    .matches(emailRules, {
      message: errorMessage('Invalid email format'),
      excludeEmptyString: true,
    })
    .required(errorMessage('This field is required')),

  password: Yup.string()
    .min(6, errorMessage('Password too short'))
    .max(16, errorMessage('Password is too long'))
    .matches(passwordRules, {
      message: errorMessage('Password is not valid'),
      excludeEmptyString: true,
    })
    .required(errorMessage('This field is required')),
});
