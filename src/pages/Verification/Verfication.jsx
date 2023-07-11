import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verification } from 'redux/auth/authOperations';
import { useUser } from 'hooks/useUser';
import { Loader } from 'components/Loader/Loader';

export const VerificationPage = () => {
  const dispatch = useDispatch();
  const { vCode } = useParams();
  const email = JSON.parse(localStorage.getItem('userEmail'));
  const { isLoggedIn } = useUser();

  useEffect(() => {
    if (vCode && !isLoggedIn) {
      dispatch(verification({ email, vCode }));
    }
  }, [dispatch, email, vCode, isLoggedIn]);

  return (
    <div>
      <Loader />
    </div>
  );
};
