import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../images/svg/logo/logo.svg';
import { NavLink } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { Form, Field } from 'formik';
import variables from '../../css/variables.module.css';
import imgBackgroundModileFirstMobile from 'images/mobile/leaves-menu@1x_320-min.png';
import imgBackgroundModileSecondMobile from 'images/mobile/leaves-footer@1x_320-min.png';
import imgBackgroundModileFirstTablet from 'images/tablet/leaves-menu@2x_768-min.png';
import imgBackgroundModileSecondTablet from 'images/tablet/leaves-footer@2x_768-min.png';
import imgBackgroundModileFirstDesktop from 'images/desktop/leaves-main@3x_1280.png';
import imgBackgroundModileSecondDesktop from 'images/desktop/leaves-footer@3x_1280.png';
import { ReactComponent as ErrorIcon } from 'images/svg/other/error-icon.svg';
import { ReactComponent as WarningIcon } from 'images/svg/other/warning-icon.svg';
import { ReactComponent as CorrectIcon } from 'images/svg/other/valid-icon.svg';

export const Footerwrapper = styled.div`
  color: var(--footer-font-color);
  position: absolute;
  width: 100%;
  left: 0;
`;
export const Dolbaniylistochek = styled.div`
  position: absolute;
  background-image: url(${imgBackgroundModileFirstMobile});
  background-repeat: no-repeat;
  background-size: 100%, cover;
  transform: rotate(90deg);
  z-index: 0;
  width: 256px;
  height: 392px;
  top: -324px;
  left: -50px;

  @media screen and (min-width: 768px) {
    background-image: url(${imgBackgroundModileFirstTablet});
    width: 423px;
    height: 646px;
    top: -534px;
    left: -85px;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${imgBackgroundModileFirstDesktop});
    width: 558px;
    height: 852px;
    top: -705px;
    left: -110px;
  }
`;
export const Footerbackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--search-btn-color);
  padding-top: 28px;
  padding-bottom: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-left: 32px;
    padding-bottom: 24px;
    padding-right: 94px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 64px;
    padding-left: 100px;
    padding-bottom: 50px;
    padding-right: 100px;
  }
`;
export const Footerstyled = styled.div`
  padding-bottom: 44px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 38px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    padding-bottom: 41px;
    width: 1280px;
  }
`;

export const LogoPlus = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 72px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;

  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.015em;

  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 24px;

    font-size: 28px;
    line-height: 28px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 40px;
  }
`;
export const LogoIconStyled = styled(LogoIcon)`
  width: 22px;
  height: 22px;
  stroke: var(--accent-color);
  background-color: var(--accent-light-color);
  border-radius: 6px;
  padding: 6px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    padding: 7px;
    border-radius: 12px;
    margin-right: 12px;
  }
`;
export const Benefitslist = styled.ul`
  display: none;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const Li = styled.li`
  @media screen and (min-width: 768px) {
    list-style: inside;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

export const Footernav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: 95px;
    gap: 20px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: var(--subscribe-btn-color);
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    margin-top: 0px;
    width: 458px;
    height: 50px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    align-content: flex-start;
    gap: 0;
    margin-left: 0;
    width: 340px;
    max-width: 340px;
  }
`;
export const Sudscribeheader = styled.h2`
  display: none;

  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;

  @media screen and (min-width: 1280px) {
    display: inline;
    margin-bottom: 14px;
  }
`;
export const Sudscribepage = styled.p`
  display: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;

  @media screen and (min-width: 1280px) {
    display: inline;
    margin-bottom: 28px;
  }
`;

export const EmailIcon = styled(HiOutlineMail)`
  position: absolute;
  color: rgba(250, 250, 250, 0.8);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  top: 10px;
  left: 14px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    top: 12px;
    left: 18px;
  }

  @media screen and (min-width: 1280px) {
    top: 18px;
    left: 18px;
  }
`;
export const FieldStyled = styled(Field)`
  outline: none;
  position: relative;
  width: 205px;
  height: 38px;
  border: 1px solid;
  border-color: rgba(250, 250, 250, 0.3);
  border-radius: 6px;
  padding: 12px 40px;
  margin-bottom: 8px;

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
    width: 260px;
    height: 50px;
    margin-bottom: 0px;

    font-size: 18px;
    line-height: 1.5;

    &::placeholder {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 50px;
    width: 340px;
    height: 60px;
    margin-bottom: 16px;
  }
`;
export const SubmitBtn = styled.button`
  color: var(--footer-font-color);
  background-color: var(--subscribe-btn-color);

  width: 205px;
  height: 38px;

  padding: 12px;
  border: none;
  border-radius: 6px;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;

  &:hover,
  &:focus {
    color: var(--secondary-color);
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 50px;
    padding: 20px;

    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 50px;
    width: 340px;
    height: 60px;
  }
`;
export const LabelStyled = styled.label`
  position: relative;
`;
export const ErrorValidation = styled.span`
  display: block;
  margin-bottom: 5px;

  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  color: #e74a3b;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -23px;
    left: 0;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1280px) {
    top: -25px;
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
  top: 12px;
  right: 18px;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    top: 15px;
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1280px) {
    top: 20px;
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

  @media screen and (min-width: 1280px) {
    top: 20px;
  }
`;
export const CorrectIconValidationIcon = styled(CorrectIcon)`
  position: absolute;
  top: 12px;
  right: 18px;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    top: 15px;
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1280px) {
    top: 20px;
  }
`;

export const Underfooter = styled.div`
  color: var(--font-color);
  background-color: var(--body-color);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  height: 56px;

  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -0.01em;
  text-align: left;

  background-image: url(${imgBackgroundModileSecondMobile});
  background-size: 172px 160px;
  background-repeat: no-repeat;
  background-position: right bottom;

  @media screen and (min-width: 768px) {
    height: 78px;

    background-image: url(${imgBackgroundModileSecondTablet});
    background-size: 313px 290px;
    background-repeat: no-repeat;

    font-size: 14px;
    line-height: 14px;
  }

  @media screen and (min-width: 1280px) {
    height: 114px;

    background-image: url(${imgBackgroundModileSecondDesktop});
    background-size: 474px 438px;
    background-repeat: no-repeat;
  }
`;
