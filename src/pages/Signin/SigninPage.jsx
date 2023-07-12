import { SigninForm } from 'components/SigninPageComponents/SigninForm';
import { ContainerSigninPage, SigninPageSection } from './SigninPage.styled';

const Signin = () => {
  return (
    <SigninPageSection>
      <ContainerSigninPage>
        <SigninForm />
      </ContainerSigninPage>
    </SigninPageSection>
  );
};

export default Signin;
