import { ButtonSkewStyled } from './ButtonSkew.styled';

export const ButtonSkew = ({ children, variant }) => {
  return (
    <ButtonSkewStyled data-variant={variant}>
      <div className="inner">{children}</div>
    </ButtonSkewStyled>
  );
};
