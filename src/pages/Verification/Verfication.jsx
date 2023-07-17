import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verification } from 'redux/auth/authOperations';
import { useUser } from 'hooks/useUser';
import { Loader } from 'components/Loader/Loader';
const VerificationPage = () => {
  const dispatch = useDispatch();
  const { verificationCode } = useParams();
  const email = JSON.parse(localStorage.getItem('userEmail'));
  const { isLoggedIn } = useUser();

  useEffect(() => {
    if (verificationCode && !isLoggedIn) {
      dispatch(verification({ email, verificationCode }));
    }
  }, [dispatch, email, verificationCode, isLoggedIn]);

  return (
    <div>
      <Loader />
    </div>
  );
};

export default VerificationPage;
