import styled from 'styled-components';
import variables from '../../css/variables.module.css';

export const UserLogoBtnWrapper = styled.div`
  position: relative;
  z-index: 2;

  margin-left: auto;
  margin-right: 24px;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
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
  color: var(--font-color);
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

export const ImageWrapper = styled.div`
  flex: 0.4;
  width: 280px;
  height: 268px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
