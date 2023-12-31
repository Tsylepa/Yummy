import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';

export const MainTitleBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 72px;

  ${mediaRule('tablet', '', 'margin-bottom:100px;')}
`;

export const MainTitleStyled = styled.h1`
  margin-top: 35px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 28px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    margin-top: 54px;
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 84px;
    font-size: 44px;
  }
`;

export const DecorBoxLeft = styled.span`
  display: block;
  position: absolute;
  top: -27px;
  left: 104px;
  width: 8px;
  height: 8px;
  background-color: var(--accent-color);
  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    top: -32px;
    left: 187px;
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 1280px) {
    top: -47px;
    left: 228px;
  }
`;

export const DecorBoxCenter = styled.span`
  display: block;
  position: absolute;
  left: 231px;
  top: 27px;
  width: 6px;
  height: 6px;
  background-color: var(--input-text-color);
  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    top: 19px;
    left: 405px;
    width: 12px;
    height: 12px;
  }
  @media screen and (min-width: 1280px) {
    top: 36px;
    left: 707px;
  }
`;

export const DecorBoxRight = styled.span`
  display: block;
  position: absolute;
  top: 0px;
  left: 333px;
  width: 8px;
  height: 8px;
  background-color: var(--accent-color);
  border-radius: 3px;
  transform: rotate(-25deg);

  @media screen and (min-width: 768px) {
    top: -38px;
    left: 694px;
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 1280px) {
    top: -34px;
    left: 1150px;
  }
`;
