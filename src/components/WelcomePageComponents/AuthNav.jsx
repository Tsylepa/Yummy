import { AuthNavList, AuthNavLink, AuthNavLinkSignIn } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <nav>
      <AuthNavList>
        <li>
          <AuthNavLink to={'/auth'}>
            <div className="inner">Registration</div>
          </AuthNavLink>
        </li>
        <li>
          <AuthNavLinkSignIn to={'/signin'}>
            <div className="inner">Sign in</div>
          </AuthNavLinkSignIn>
        </li>
      </AuthNavList>
    </nav>
  );
};
