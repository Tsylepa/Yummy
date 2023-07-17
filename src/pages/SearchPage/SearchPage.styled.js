import styled from "styled-components";

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 104px;
  }
`;

export const SearcheRecipesContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;