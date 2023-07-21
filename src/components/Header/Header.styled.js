import styled from 'styled-components';
import { ReactComponent as LogoIcon } from 'images/svg/logo/logo.svg';
import { NavLink } from 'react-router-dom';
import imgBackgroundModileFirstMobile from 'images/mobile/leaves-menu@1x_320-min.png';
import imgBackgroundModileFirstTablet from 'images/tablet/leaves-menu@2x_768-min.png';

export const Burger = styled.div`
  background-color: var(--menu-bg-color);
  color: var(--font-color);

  background-image: url(${imgBackgroundModileFirstMobile});
  background-repeat: no-repeat;
  background-size: 100% cover;
  background-position: 100% 100%;

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

  transform: translateY(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (min-width: 768px) {
    background-image: url(${imgBackgroundModileFirstTablet});
    background-repeat: no-repeat;
    background-size:  852px 558px;

    padding-top: 18px;
    padding-right: 16px;
    padding-bottom: 18px;
    padding-left: 16px;
  }
`;
export const Burgerwrapper = styled.div`
  margin: auto;
  width: 100%;
`;
export const BurgerHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const CloseButton = styled.button`
  color: var(--font-color);

  width: 28px;
  height: 28px;
  margin-left: auto;
  padding: 4px 7px 4px 7px;
  background-color: transparent;
  border: transparent;
`;
export const BurgerNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: var(--input-text-color);

  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  margin-top: 18px;
  z-index: 1;
`;
export const LogoIconStyled = styled(LogoIcon)`
  width: 22px;
  height: 22px;
  stroke: var(--primary-color);
  background-color: var(--accent-color);
  border-radius: 6px;
  padding: 6px;
  margin-left: 0;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    padding: 7px;
    border-radius: 12px;
  }

  @media screen and (min-width: 1280px) {
    width: 44px;
    height: 44px;
  }
`;
export const HeaderNav = styled.ul`
  display: none;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0em;

  @media screen and (min-width: 1280px) {
    display: flex;
    margin-left: auto;
    gap: 30px;
  }

  :hover {
    color: var(--accent-color);
  }
`;
export const ThemeTogglerwrapper = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;
export const OpenButton = styled.button`
  color: var(--font-color);

  display: flex;
  background-color: transparent;
  border: transparent;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    padding: 7px 3px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
