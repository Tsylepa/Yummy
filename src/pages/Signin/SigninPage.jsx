import { SigninForm } from 'components/SigninPageComponents/SigninForm';
import { ContainerSigninPage, SigninPageSection } from './SigninPage.styled';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { getIsLoading } from 'redux/auth/authSelectors';

const Signin = () => {
  const isLoading = useSelector(getIsLoading);
  return isLoading ? (
    <Loader />
  ) : (
    <SigninPageSection>
      <ContainerSigninPage>
        <SigninForm />
      </ContainerSigninPage>
    </SigninPageSection>
  );
};

export default Signin;
