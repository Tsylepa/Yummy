import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';

const useUser = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const user = useSelector(authSelectors.getUser);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const isLoading = useSelector(authSelectors.getIsLoading);

  return {
    isLoggedIn,
    user,
    isRefreshing,
    isLoading,
  };
};

export default useUser;
