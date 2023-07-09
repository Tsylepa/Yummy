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
        <StyledCardsList key={_id.$oid}>
          <StyledCardsWrapper>
            <StyledCardsImg src={preview} alt={title} />
            <StyledCardsTextWrapper>
              <StyledCardsText>{title}</StyledCardsText>
            </StyledCardsTextWrapper>
          </StyledCardsWrapper>
        </StyledCardsList>
      ))}
    </StyledCards>
  );
};
export default RecipesCard;
