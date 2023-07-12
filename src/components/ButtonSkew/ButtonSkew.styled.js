import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from '../../css/variables.module.css';

export const ButtonSkewStyled = styled.button`
  background-color: var(--accent-color);
  /* border: none; */
  border: 2px solid;
  transform: skew(15deg, 0);
  border-radius: 1.7rem;
  /* border-color: var(--primary-color); */
  cursor: pointer;
  padding: 12px 32px;
  width: 141px;
  font-family: ${variables['--poppins-regular']};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  color: var(--primary-color);
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    /* background-color: var(--secondary-color); */
    border: var(--secondary-color);
    /* color: var(--accent-color); */
  }

  .inner {
    transform: skew(-15deg, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  @media screen and (max-width: 767px) {
    width: 125px;
    padding: 12px 24px;
  }

  @media screen and (min-width: 768px) {
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const LinkSkewStyled = styled(NavLink)`
  display: block;
  background-color: var(--accent-color);
  border-radius: 1.7rem;
  border-color: var(--primary-color);
  transform: skew(15deg, 0);
  border-radius: 1.7rem;
  cursor: pointer;
  padding: 12px 32px;
  width: 141px;

  font-family: ${variables['--poppins-regular']};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-decoration: none;

  color: var(--primary-color);
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--accent-color);
    background-color: var(--primary-color);
    border-color: var(--accent-color);
  }

  .inner {
    transform: skew(-15deg, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;
