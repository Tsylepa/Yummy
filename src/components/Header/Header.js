import ThemeToggler from 'components/ThemeToggler';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/IconComponent/Icon';
import { UserLogo } from 'components/UserLogo/UserLogo';
import {
  Burger,
  Burgerwrapper,
  BurgerHeader,
  BurgerNav,
  HeaderWraper,
  HeaderNav,
  NavLinkStyled,
  LogoIconStyled,
  ThemeTogglerwrapper,
  OpenButton,
  CloseButton,
  } from './Header.styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});

  const handleMenu = () => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {};
      });
    } else {
      setHideOrShow(() => {
        return { position: 'fixed', transform: 'translateY(0)' };
      });
    }
  };

  return (
    <>
      <Burger style={hideOrShow}>
        <Burgerwrapper>
        <BurgerHeader>
          <Link to="/main" onClick={handleMenu}>
            <LogoIconStyled />
          </Link>

          <CloseButton onClick={handleMenu}>
            <Icon name="icon-Exit" width="14px" height="14px" fill="var(--font-color)"></Icon>
          </CloseButton>
        </BurgerHeader>

        <BurgerNav>
          <NavLinkStyled to="/categories" onClick={handleMenu}>
            Categories
          </NavLinkStyled>
          <NavLinkStyled to="/add" onClick={handleMenu}>
            Add recipes
          </NavLinkStyled>
          <NavLinkStyled to="/recipe" onClick={handleMenu}>
            My recipes
          </NavLinkStyled>
          <NavLinkStyled to="/favorite" onClick={handleMenu}>
            Favorites
          </NavLinkStyled>
          <NavLinkStyled to="/shopping-list" onClick={handleMenu}>
            Shopping list
          </NavLinkStyled>
          <NavLinkStyled to="/search" onClick={handleMenu}>
            <Icon
              name="icon-search"
              fill="transparent"
              width="24px"
              height="24px"
            ></Icon>
            Search
          </NavLinkStyled>
        </BurgerNav>

        <ThemeToggler />
        </Burgerwrapper>
      </Burger>

      <HeaderWraper>
        <Link to="/main">
          <LogoIconStyled />
        </Link>

        <HeaderNav>
          <NavLinkStyled to="/categories">Categories</NavLinkStyled>
          <NavLinkStyled to="/add">Add recipes</NavLinkStyled>
          <NavLinkStyled to="/recipe">My recipes</NavLinkStyled>
          <NavLinkStyled to="/favorite">Favorites</NavLinkStyled>
          <NavLinkStyled to="/shopping-list">Shopping list</NavLinkStyled>
          <NavLinkStyled to="/search">
            <Icon
              name="icon-search"
              fill="transparent"
              width="24px"
              height="24px"
            ></Icon>
          </NavLinkStyled>
        </HeaderNav>

        <UserLogo />

        <ThemeTogglerwrapper>
        <ThemeToggler />
        </ThemeTogglerwrapper>
        <OpenButton onClick={handleMenu}>
          <Icon name="icon-Burger_menu" width="24px" height="16px"></Icon>
        </OpenButton>
      </HeaderWraper>
    </>
  );
};

export default Header;
