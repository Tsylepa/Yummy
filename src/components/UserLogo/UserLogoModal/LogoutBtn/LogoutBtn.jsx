import { AiOutlineArrowRight } from 'react-icons/ai';
import { ButtonSkew } from '../../../ButtonSkew/ButtonSkew';

export const LogoutBtn = ({ onClick }) => {
  return (
    <ButtonSkew data-variant="primary-accent" onClick={onClick} isShadow={true}>
      Log out
      <AiOutlineArrowRight size={18} color={'#fafafa'} />
    </ButtonSkew>
  );
};
