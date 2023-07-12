import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCategoriesList = styled.li`
  list-style: none;
  display: block;
  padding: 10px;

  text-decoration: none;
  text-transform: capitalize;
  color: #e0e0e0;
  padding: 10px;
`;

export const StyledContainer = styled.div`
  gap: 28px;
  display: flex;
  flex-direction: row;
`;

export const BaseNavLink = styled(NavLink)`
  text-decoration: none;
  color: #e0e0e0;
  &:hover {
    color: var(--accent-color);
  }
`;
