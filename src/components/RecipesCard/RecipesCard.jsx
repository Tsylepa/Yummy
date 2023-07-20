import {
  StyledCards,
  Card,
  StyledCardsWrapper,
  StyledCardsImg,
  StyledCardsTextWrapper,
  StyledCardsText,
} from './RecipesCard.styles';
import { Link } from 'react-router-dom';

export const RecipesCard = ({ recipes }) => {
  return (
    <StyledCards>
      {recipes.map(({ _id, title, preview }) => (
        <Card key={_id}>
          <Link to={`/recipe/${_id}`}>
            <StyledCardsWrapper>
              <StyledCardsImg src={preview} alt={title} />
              <StyledCardsTextWrapper>
                <StyledCardsText>{title}</StyledCardsText>
              </StyledCardsTextWrapper>
            </StyledCardsWrapper>
          </Link>
        </Card>
      ))}
    </StyledCards>
  );
};
export default RecipesCard;
