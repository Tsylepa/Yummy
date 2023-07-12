import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';
import { FiUser, FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { ReactComponent as ErrorIcon } from '../../images/svg/other/error-icon.svg';
import { ReactComponent as WarningIcon } from '../../images/svg/other/warning-icon.svg';
import { ReactComponent as CorrectIcon } from '../../images/svg/other/valid-icon.svg';
import variables from '../../css/variables.module.css';

export const FormWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 115px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 32px 28px 40px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    padding: 44px 50px;
    width: 500px;
    max-width: 500px;
  }
`;

export const FormTitle = styled.h1`
  font-family: ${variables['--poppins-semiBold']};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: var(--primary-color);

  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: 32px;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 50px;
  }
`;

export const FieldStyled = styled(Field)`
  outline: none;
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(250, 250, 250, 0.3);
  border-radius: 6px;
  padding: 12px 40px;

  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--primary-color);
  background-color: transparent;

  transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: #fafafa;
    font-family: ${variables['--poppins-regular']};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    opacity: 0.8;
  }

  :hover,
  :focus {
    border-color: #fff;
    background-color: transparent;

    + svg {
      color: var(--primary-color);
    }
  }

  label:has(div.error) & {
    border-color: #e74a3b;

    + svg {
      color: #e74a3b;
    }
  }

  label:has(div.warning) & {
    border-color: #f6c23e;

    + svg {
      color: #f6c23e;
    }
  }

  label:has(div.valid) & {
    border-color: #3cbc81;

    + svg {
      color: #3cbc81;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 16px 50px;

    font-size: 18px;
    line-height: 1.5;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const LabelStyled = styled.label`
  position: relative;
`;

export const UserIcon = styled(FiUser)`
  position: absolute;
  top: 13px;
  left: 15px;
  color: rgba(250, 250, 250, 0.8);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 19px;
    left: 18px;
  }
`;

export const EmailIcon = styled(HiOutlineMail)`
  position: absolute;
  top: 19px;
  left: 18px;
  color: rgba(250, 250, 250, 0.8);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  top: 15px;
  left: 14px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 19px;
    left: 18px;
  }
`;

export const PasswordIcon = styled(FiLock)`
  position: absolute;
  top: 19px;
  left: 18px;
  color: rgba(250, 250, 250, 0.8);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  top: 15px;
  left: 14px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 19px;
    left: 18px;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  color: var(--primary-color);
  background-color: var(--accent-color);
  padding: 12px;
  border: none;
  border-radius: 6px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--secondary-color);
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

// Validation

export const ErrorValidation = styled.span`
  display: block;
  padding-top: 5px;

  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  color: #e74a3b;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -23px;
    left: 0;
  }
`;

export const WarningValidation = styled(ErrorValidation)`
  color: #f6c23e;
`;

export const CorrectValidation = styled(ErrorValidation)`
  color: #3cbc81;
`;

export const ErrorValidationIcon = styled(ErrorIcon)`
  position: absolute;
  top: 16px;
  right: 18px;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    top: 20px;
    width: 20px;
    height: 20px;
  }
`;

export const WarningValidationIcon = styled(WarningIcon)`
  position: absolute;
  top: 16px;
  right: 18px;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    top: 20px;
    width: 20px;
    height: 20px;
  }
`;

export const CorrectIconValidationIcon = styled(CorrectIcon)`
  position: absolute;
  top: 16px;
  right: 18px;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    top: 20px;
    width: 20px;
    height: 20px;
  }
`;

export const LinkStyled = styled(Link)`
  position: absolute;
  bottom: -50px;
  right: 128px;

  text-decoration: underline;

  display: block;
  color: var(--primary-color);
  padding: 5px;
  width: fit-content;
  margin-top: 18px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    bottom: -50px;
    right: 220px;
  }
`;
