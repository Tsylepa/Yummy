import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verification } from 'redux/auth/authOperations';
import { Loader } from 'components/Loader/Loader';

const VerificationPage = () => {
  const dispatch = useDispatch();
  const { verificationCode } = useParams();

  useEffect(() => {
    dispatch(verification(verificationCode));
  }, [dispatch, verificationCode]);

  return (
    <div>
      <Loader />
    </div>
  );
};

export default VerificationPage;
