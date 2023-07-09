import styled from 'styled-components';

export const StyledCards = styled.ul`
  display: flex;
  gap: 100px 14px;
`;

export const StyledCardsList = styled.li`
  list-style: none;
  width: calc((100% - 42px) / 4);
`;

export const StyledCardsWrapper = styled.div`
  width: 300px;
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
`;

export const StyledCardsText = styled.p`
  margin: auto 0px;
  color: rgb(62, 68, 98);
  line-height: 1.25;
  font-weight: 500;
`;
