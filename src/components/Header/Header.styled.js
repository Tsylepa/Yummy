import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../images/svg/logo/logo.svg';
import { NavLink } from 'react-router-dom';

export const Burger = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 300;
  width: 100%;
  height: 100%;
  padding-top: 18px;
  padding-right: 16px;
  padding-bottom: 18px;
  padding-left: 16px;
  background-color: var(--accent-light-color);
  transform: translateY(-150%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BurgerHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: auto;
  justify-content: space-between;
  width: 288px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  padding: 4px 7px 4px 7px;
  background-color: transparent;
  border: transparent;
`;

export const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 32px;

  margin: auto;
  margin-top: 124px;
  margin-bottom: 203px;

  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.02em;
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: var(--accent-color);
  }
`;

export const HeaderWraper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
  justify-content: space-between;

  margin-top: 14px;
  margin-bottom: 50px;
  z-index: 100;
`;

export const LogoIconStyled = styled(LogoIcon)`
  width: 22px;
  height: 22px;
  stroke: var(--primary-color);
  background-color: var(--accent-color);
  border-radius: 6px;
  padding: 6px;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    padding: 7px;
    border-radius: 12px;
  }
`;

export const HeaderNav = styled.div`
  display: none;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0em;

  @media screen and (min-width: 1280px) {
    align-items: center;
    display: flex;
    gap: 30px;
    margin-left: 231px;
  }

  :hover {
    color: var(--accent-color);
  }
`;

export const User = styled.div`
  width: 46px;
  margin-left: auto;

  border-radius: 12px;
  background-color: yellow;
`;

export const ThemeTogglerWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    width: 61px;
    height: 27px;
    margin-left: 50px;

    border-radius: 12px;
    background-color: yellow;
  }
`;

export const OpenButton = styled.button`
  display: flex;
  margin-left: 24px;
  background-color: transparent;
  border: transparent;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    padding: 7px 3px;
    margin-left: 50px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
