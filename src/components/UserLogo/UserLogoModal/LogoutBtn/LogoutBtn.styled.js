import styled from 'styled-components';
import variables from '../../css/variables.module.css';

export const LogoutBtnStyled = styled.button`
  background-color: var(--accent-color);
  border: none;
  transform: skew(15deg, 0);
  border-radius: 1.7rem;
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
    background-color: var(--secondary-color);
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
