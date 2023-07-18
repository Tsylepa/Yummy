import { AiOutlineArrowRight } from 'react-icons/ai';
import { ButtonSkewStyled } from '../../../ButtonSkew/ButtonSkew.styled';

export const LogoutBtn = ({ onClick }) => {
  return (
    <ButtonSkewStyled
      data-variant="primary-accent"
      onClick={onClick}
      isshadow={true}
    >
      <div className="inner">
        Log out
        <AiOutlineArrowRight size={18} color={'#fafafa'} />
      </div>
    </ButtonSkewStyled>
  );
};
