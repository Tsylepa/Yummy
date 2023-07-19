import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const commonStyles = css`
  display: inline-block;
  transform: skew(15deg, 0);
  align-self: start;
  border-radius: 1.7rem;
  border: none;
  padding: 12px 32px;
  font-family: var(--poppins-regular);
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &[data-variant='primary'] {
    color: var(--primary-color);
    background-color: var(--secondary-color);

    &:hover {
      background-color: var(--accent-color);
    }
  }

  &[data-variant='primary-accent'] {
    color: var(--primary-color);
    background-color: var(--accent-color);

    &:hover {
      background-color: var(--secondary-color);
    }
  }

  &[data-variant='transparent-primary'] {
    color: var(--primary-color);
    background-color: transparent;
    border: 2px solid var(--primary-color);

    &:hover {
      color: var(--accent-color);
      border-color: var(--accent-color);
    }
  }

  &[data-variant='transparent-accent'] {
    color: var(--accent-color);
    background-color: transparent;
    border: 2px solid var(--accent-color);

    &:hover {
      color: var(--primary-color);
      background-color: var(--accent-color);
    }
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
`;

export const ButtonSkewStyled = styled.button`
  ${commonStyles}
`;

export const LinkSkewStyled = styled(NavLink)`
  ${commonStyles}
`;
