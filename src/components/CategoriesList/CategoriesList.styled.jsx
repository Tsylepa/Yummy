import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCategoriesList = styled.li`
  list-style: none;
  display: block;
  padding: 10px;

  text-decoration: none;
  text-transform: capitalize;
  padding: 10px;
`;

export const StyledContainer = styled.div`
  gap: 28px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`;

export const BaseNavLink = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: var(--accent-color);
  }
`;
