import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';

export const StyledCategoriesList = styled.li`
  list-style: none;
  display: block;
  text-decoration: none;
  text-transform: capitalize;
`;

export const StyledContainer = styled.ul`
  gap: 28px;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 32px;

  ${mediaRule('tablet', '', 'margin-bottom: 50px;')}
`;

export const BaseNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 10px 32px;

  ${mediaRule('tablet', '', 'padding-bottom: 28px;')};

  &:hover,
  &.active {
    color: var(--accent-color);
  }

  &.active {
    border-bottom: 2px solid var(--accent-color);
  }
`;
