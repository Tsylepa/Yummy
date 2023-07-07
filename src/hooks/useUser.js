import { getUser, getToken, getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const useUser = () => {
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);

  return { user, token, isLoggedIn };
};

export default useUser;
