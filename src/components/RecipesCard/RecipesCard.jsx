import {
  StyledCards,
  StyledCardsList,
  StyledCardsWrapper,
  StyledCardsImg,
  StyledCardsTextWrapper,
  StyledCardsText,
} from './RecipesCard.styles';

export const RecipesCard = ({ recipes }) => {
  return (
    <StyledCards>
      {recipes.map(({ _id, title, preview }) => (
        <li key={_id}>
          <StyledCardsList to={`/recipe/${_id}`}>
            <StyledCardsWrapper>
              <StyledCardsImg src={preview} alt={title} />
              <StyledCardsTextWrapper>
                <StyledCardsText>{title}</StyledCardsText>
              </StyledCardsTextWrapper>
            </StyledCardsWrapper>
          </StyledCardsList>
        </li>
      ))}
    </StyledCards>
  );
};
export default RecipesCard;
