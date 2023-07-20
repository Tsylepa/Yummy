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
      <Burger style={hideOrShow} position="fixed">
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
            <li><NavLinkStyled to="/categories" onClick={handleMenu}>
            Categories
            </NavLinkStyled></li>
            <li><NavLinkStyled to="/add" onClick={handleMenu}>
            Add recipes
            </NavLinkStyled></li>
            <li><NavLinkStyled to="/recipe" onClick={handleMenu}>
            My recipes
            </NavLinkStyled></li>
            <li><NavLinkStyled to="/favorite" onClick={handleMenu}>
            Favorites
            </NavLinkStyled></li>
            <li><NavLinkStyled to="/shopping-list" onClick={handleMenu}>
            Shopping list
            </NavLinkStyled></li>
            <li><NavLinkStyled to="/search" onClick={handleMenu}>
            <Icon
              name="icon-search"
              fill="transparent"
              width="24px"
              height="24px"
            ></Icon>
            Search
            </NavLinkStyled></li>
        </BurgerNav>

        <ThemeTogglerwrapper>
        <ThemeToggler />
        </ThemeTogglerwrapper>    
        </Burgerwrapper>
      </Burger>

      <HeaderWraper>
        <Link to="/main">
          <LogoIconStyled />
        </Link>

        <HeaderNav>
          <li><NavLinkStyled to="/categories">Categories</NavLinkStyled></li>
          <li><NavLinkStyled to="/add">Add recipes</NavLinkStyled></li>
          <li><NavLinkStyled to="/recipe">My recipes</NavLinkStyled></li>
          <li><NavLinkStyled to="/favorite">Favorites</NavLinkStyled></li>
          <li><NavLinkStyled to="/shopping-list">Shopping list</NavLinkStyled></li>
          <li><NavLinkStyled to="/search">
            <Icon
              name="icon-search"
              fill="transparent"
              width="24px"
              height="24px"
            ></Icon>
          </NavLinkStyled></li>
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