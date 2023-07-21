import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';

const useUser = () => {
  const user = useSelector(authSelectors.getUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoading = useSelector(authSelectors.getIsLoading);
  const accessToken = useSelector(authSelectors.getAccessToken);

  return {
    user,
    isLoggedIn,
    isLoading,
    accessToken,
  };
};

export default useUser;
