import { Link } from 'react-router-dom';
export const AuthNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/auth'}>
            <div className="inner">Registration</div>
          </Link>
        </li>
        <li>
          <Link to={'/signin'}>
            <div className="inner">Sign in</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
