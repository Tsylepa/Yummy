import { LinkSkewStyled } from 'components/ButtonSkew/ButtonSkew.styled';
import { AuthNavList, AuthNavLink, AuthNavLinkSignIn } from './AuthNav.styled';
import { LinkRegisterStyled } from 'components/SigninPageComponents/SigninForm.styled';
export const AuthNav = () => {
  return (
    <nav>
      <AuthNavList>
        <li>
          <AuthNavLink to={'/register'} data-variant="primary-accent">
            <div className="inner">Registration</div>
          </AuthNavLink>
        </li>
        <li>
          <AuthNavLink to={'/signin'} data-variant="transparent-primary">
            <div className="inner">Sign in</div>
          </AuthNavLink>
        </li>
      </AuthNavList>
    </nav>
  );
};
