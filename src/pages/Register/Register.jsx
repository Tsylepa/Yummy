import { AuthPagesSection, ContainerAuthPageStyled } from './Register.styled';

import { RegisterForm } from 'components/RegisterPageComponents/RegisterForm';

const Register = () => {
  return (
    <AuthPagesSection>
      <ContainerAuthPageStyled>
        <RegisterForm />
      </ContainerAuthPageStyled>
    </AuthPagesSection>
  );
};

export default Register;
