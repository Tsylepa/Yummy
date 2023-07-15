import styled from "styled-components";

export const SearchNotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchNotFoundImage = styled.picture`
  margin-bottom: 24px;

  width: 208px;
  height: 133px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    width: 350px;
    height: 225px;
  }
`;

export const SearchNotFoundText = styled.p`
  text-align: center;
  font-family: var(--poppins-regular);
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;

  letter-spacing: -0.28px;
  font-feature-settings: 'liga' off;

  color: #000000;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
`;
