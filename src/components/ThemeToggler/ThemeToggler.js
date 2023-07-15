import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/auth/authOperations';
import { getUser } from 'redux/auth/authSelectors';
import { Input, Slider, Switch } from './ThemeToggler.styled';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const currentTheme = user && user.theme;

  const updateTheme = () => {
    const updatedTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(toggleTheme({ theme: updatedTheme }));
  };

  return (
    <>
      <Switch>
        <Input
          type="checkbox"
          checked={currentTheme === 'dark'}
          onChange={updateTheme}
        />
        <Slider />
      </Switch>
    </>
  );
};

export default ThemeToggler;
