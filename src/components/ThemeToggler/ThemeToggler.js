import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.toggleTheme('dark'));
        }}
      >
        Theme
      </button>
    </>
  );
};

export default ThemeToggler;
