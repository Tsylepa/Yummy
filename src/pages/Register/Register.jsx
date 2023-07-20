import { AuthPagesSection, ContainerAuthPageStyled } from './Register.styled';

import { RegisterForm } from 'components/RegisterPageComponents/RegisterForm';
import { Loader } from 'components/Loader/Loader';
import { getIsLoading } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Register = () => {
  const isLoading = useSelector(getIsLoading);
  return isLoading ? (
    <Loader />
  ) : (
    <AuthPagesSection>
      <ContainerAuthPageStyled>
        <RegisterForm />
      </ContainerAuthPageStyled>
    </AuthPagesSection>
  );
};

export default Register;
