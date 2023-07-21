import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    padding: 100px 0 204px;
  }

  @media screen and (min-width: 1280px) {
    padding: 138px 0 203px;
  }
`;

export const Image = styled.img`
  display: block;

  width: 259px;
  height: 170px;
  margin: 0 auto 14px;

  @media screen and (min-width: 768px) {
    width: 498px;
    height: 327px;
    margin: 0 auto 32px;
  }

  @media screen and (min-width: 1280px) {
    height: 331px;
  }
`;

export const BoldText = styled.p`
  margin-bottom: 8px;

  color: var(--input-text-color);

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.36px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;

    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
`;

export const Text = styled.p`
  color: var(--input-text-color);

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  width: 206px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 428px;
  }
`;
