import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';

export const StyledCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 33px;
  margin-top: 32px;
  opacity: 1;
  position: relative;

  ${mediaRule('tablet', 'desktop', 'grid-template-columns: repeat(2, 1fr)')}
  ${mediaRule('desktop', '', 'grid-template-columns: repeat(4, 1fr)')}
`;

export const Card = styled.li``;

export const StyledCardsWrapper = styled.div`
  position: relative;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
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
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  padding: 16px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
`;

export const StyledCardsText = styled.p`
  margin: auto 0px;
  color: rgb(62, 68, 98);
  line-height: 1.25;
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
