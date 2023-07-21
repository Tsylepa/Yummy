import { ButtonSkewStyled } from 'components/ButtonSkew/ButtonSkew.styled';
import {
  StyledCards,
  Card,
  StyledCardsWrapper,
  StyledCardsImg,
  StyledCardsTextWrapper,
  StyledCardsText,
} from './RecipesCard.styles';
import { Link, useNavigate } from 'react-router-dom';

export const RecipesCard = ({ recipes }) => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/main');
  };
  return (
    <StyledCards>
      {recipes.length ? (
        <>
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
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '100px 0px' }}>
          <h2>Your favorite recipes will appear here when you add them.</h2>
          <ButtonSkewStyled
            type="button"
            data-variant="primary-accent"
            onClick={goToMainPage}
            style={{
              marginTop: '20px',
              transform: 'none',
              borderRadius: '22px 44px',
            }}
          >
            Go to Main Page
          </ButtonSkewStyled>
        </div>
      )}
    </StyledCards>
  );
};
export default RecipesCard;
