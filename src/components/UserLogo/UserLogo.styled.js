import styled from 'styled-components';
import variables from '../../css/variables.module.css';

export const UserLogoBtnWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export const UserLogoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;

  border: none;
  background-color: transparent;

  font-family: ${variables['--poppins-semiBold']};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.7;
  color: var(--primary-color);

  @media screen and (max-width: 1279px) {
    color: var(--primary-dark-color);
  }

  @media screen and (min-width: 1720px) {
    color: var(--primary-dark-color);
  }
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

export const UserAvatarImg = styled.img`
  display: block;
  width: 44px;
  height: 44px;
`;
