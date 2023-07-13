import styled from 'styled-components';

export const StyledCategories = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 33px;
  margin-top: 32px;
  opacity: 1;
`;

export const StyledContainer = styled.div`
  gap: 28px;
  display: flex;
  flex-direction: row;
`;

export const StyledText = styled.h2`
  height: 32px;
  line-height: 1;
  margin-left: 16px;
  margin-bottom: 50px;
`;

export const StyledCategoriesPagesWraper = styled.div`
  margin: 0px auto;
  width: 100%;
  min-height: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
