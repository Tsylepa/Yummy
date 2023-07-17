import ThemeToggler from 'components/ThemeToggler';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/IconComponent/Icon';
import { UserLogo } from 'components/UserLogo/UserLogo';
import {
  Burger,
  BurgerHeader,
  BurgerNav,
  HeaderWraper,
  HeaderNav,
  User,
  NavLinkStyled,
  LogoIconStyled,
  OpenButton,
  CloseButton,
  ThemeTogglerWrapper,
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
        <BurgerHeader>
          <Link to="/home" onClick={handleMenu}>
            <LogoIconStyled />
          </Link>

          <CloseButton onClick={handleMenu}>
            <Icon name="icon-Exit" width="14px" height="14px"></Icon>
          </CloseButton>
        </BurgerHeader>

        <BurgerNav>
          <NavLinkStyled to="/categories" onClick={handleMenu}>Categories</NavLinkStyled>
          <NavLinkStyled to="/addrecipe" onClick={handleMenu}>Add recipes</NavLinkStyled>
          <NavLinkStyled to="/myrecipes" onClick={handleMenu}>My recipes</NavLinkStyled>
          <NavLinkStyled to="/favorites" onClick={handleMenu}>Favorites</NavLinkStyled>
          <NavLinkStyled to="/shopping" onClick={handleMenu}>Shopping list</NavLinkStyled>
          <NavLinkStyled to="/search" onClick={handleMenu}>
            <Icon
              name="icon-search"
              fill="transparent"
              width="24px"
              height="24px"
            ></Icon>{' '}
            Search
          </NavLinkStyled>
        </BurgerNav>

        <ThemeToggler />
      </Burger>

      <HeaderWraper>
        <Link to="/home">
          <LogoIconStyled />
        </Link>

        <HeaderNav>
          <NavLinkStyled to="/categories">Categories</NavLinkStyled>
          <NavLinkStyled to="/addrecipe">Add recipes</NavLinkStyled>
          <NavLinkStyled to="/myrecipe">My recipes</NavLinkStyled>
          <NavLinkStyled to="/favorite">Favorites</NavLinkStyled>
          <NavLinkStyled to="/shopping">Shopping list</NavLinkStyled>
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

        <ThemeTogglerWrapper>
          <ThemeToggler />
        </ThemeTogglerWrapper>

        <OpenButton onClick={handleMenu}>
          <Icon name="icon-Burger_menu" width="24px" height="16px"></Icon>
        </OpenButton>
      </HeaderWraper>
    </>
  );
};

export default Header;
