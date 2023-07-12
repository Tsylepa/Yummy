import styled from 'styled-components';

export const StyledCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 33px;
  margin-top: 32px;
  opacity: 1;

  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    gap: 32px;
    margin-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 100px 14px;
  }
`;

export const StyledCardsList = styled.li`
  list-style: none;

  @media screen and (min-width: 1440px) {
    width: calc((100% - 42px) / 4);
  }
`;

export const StyledCardsWrapper = styled.div`
  position: relative;
  width: 343px;
  height: 323px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`;

export const StyledCardsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background-color: rgba(235, 243, 212, 0.2);
`;

export const StyledCardsTextWrapper = styled.div`
  position: absolute;
  bottom: 26px;
  //   left: 18px;
  width: 250px;
  padding: 16px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1440px) {
    bottom: 23px;
    left: 16px;
    width: 268px;
  }
`;

export const StyledCardsText = styled.p`
  margin: auto 0px;
  color: rgb(62, 68, 98);
  line-height: 1.25;
  font-weight: 500;
`;
