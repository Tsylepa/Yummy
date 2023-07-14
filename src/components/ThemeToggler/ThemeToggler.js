import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/auth/authOperations';
import { getTheme } from 'redux/auth/authSelectors';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(getTheme);

  const updateTheme = () => {
    const updatedTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(toggleTheme({ theme: updatedTheme }));
  };

  return (
    <>
      <button type="button" onClick={updateTheme}>
        Theme
      </button>
    </>
  );
};

export default ThemeToggler;
