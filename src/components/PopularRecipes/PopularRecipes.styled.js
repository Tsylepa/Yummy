import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaRule from 'utils/mediaRule';

export const Title = styled.h2`
  margin-top: 72px;
  font-size: 24px;
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  margin-top: 32px;
  justify-content: space-between;
  ${mediaRule('tablet', 'desktop', 'grid-template-columns: 336px 336px;')}
`;

export const RecipeItem = styled.li`
  display: flex;
  border-bottom: 1px solid var(--recipe-border-color);
  padding: 24px 0 12px;
`;

export const RecipeLink = styled(Link)`
  display: flex;
  align-items: start;
  gap: 12px;
`;

export const Image = styled.img`
  border-radius: 8px;
`;

export const RecipeInfo = styled.div``;

export const RecipeDescription = styled.p`
  margin-top: 4px;
  opacity: 0.6;
`;
