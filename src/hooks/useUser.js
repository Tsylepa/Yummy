import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';

const useUser = () => {
  const user = useSelector(authSelectors.getUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoading = useSelector(authSelectors.getIsLoading);

  return {
    user,
    isLoggedIn,
    isLoading,
  };
};

export default useUser;
