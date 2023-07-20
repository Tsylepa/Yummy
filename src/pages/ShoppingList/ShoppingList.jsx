import { MainTitle } from 'components/MainTitle/MainTitle';
import { Wrapper } from '../AddRecipe/AddRecipe.styled';
import ShoppingListComponent from 'components/ShoppingList/ShoppingListComponent';

const ShoppingList = () => {
  return (
    <>
      <MainTitle text="Shopping list" />
      <Wrapper>
        <ShoppingListComponent />
      </Wrapper>
    </>
  );
};

export default ShoppingList;
