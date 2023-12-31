import styled from 'styled-components';
import variables from '../../../css/variables.module.css';

export const UserLogoModalContainer = styled.div`
  position: absolute;
  right: 0;
  top: 65px;

  display: flex;
  pointer-events: ${props => {
    return props.open ? 'auto' : 'none';
  }};
  visibility: ${props => {
    return props.open ? 'visible' : 'hidden';
  }};
  opacity: ${props => {
    return props.open ? '1' : '0';
  }};
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 18px;

  background-color: var(--primary-color);
  border-radius: 8px;
  border: 1px solid var(--accent-color);

  overflow: hidden;

  transition: height var(--primary-color);

  @media screen and (max-width: 767px) {
    border: 1px solid var(--accent-color);
    gap: 28px;
  }
`;

export const EditProfileBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 50px;
  background-color: transparent;
  border: none;
  padding: 4px 0;
  cursor: pointer;

  font-family: ${variables['--poppins - medium']};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;

  color: var(--primary-dark-color);

  @media screen and (max-width: 767px) {
    gap: 37px;
  }
`;
