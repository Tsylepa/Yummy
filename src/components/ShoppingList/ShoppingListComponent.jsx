import { useDispatch, useSelector } from 'react-redux';

import {
  RecipeIngredientListSubtitle,
  IngredientSpan,
  NumberSpan,
  AddToListSpan as RemoveSpan,
  IngredientList as ProductList,
  IngredientItem as ProductItem,
  IngredientImage as ProductImage,
  IngredientTitle as ProductTitle,
  IngredientMeasure as ProductMeasure,
} from '../../components/RecipeIngredientsList/RecipeIngredientList.styled';
import Icon from 'components/IconComponent/Icon';
import { Delete } from '../Forms/Recipe/AddRecipeForm.styled';
import { removeFromShoppingList } from 'redux/recipes/recipesOperations';

const ShoppingListComponent = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(state => state.auth.user.shoppingList);

  const handleRemoveClick = (ingredient, recipeId) => {
    console.log({ ingredient, recipeId });
    dispatch(
      removeFromShoppingList({
        ingredient,
        recipeId,
      })
    );
  };
  return (
    <div>
      <RecipeIngredientListSubtitle style={{ marginTop: 0 }}>
        <IngredientSpan>Products</IngredientSpan>
        <NumberSpan>Number</NumberSpan>
        <RemoveSpan>Remove</RemoveSpan>
      </RecipeIngredientListSubtitle>
      <ProductList>
        {shoppingList.map(product => (
          <ProductItem
            key={product.ingredient._id}
            style={{
              background: 'transparent',
              borderBottom: '1px solid #E0E0E0',
              borderRadius: 0,
            }}
          >
            {product.ingredient.img ? (
              <ProductImage
                src={product.ingredient.img}
                alt={product.ingredient.name}
              />
            ) : (
              <ProductImage src={product.ingredient.img} alt="Placeholder" />
            )}
            <ProductTitle>
              {product.ingredient.name || 'ingredient'}
            </ProductTitle>
            <ProductMeasure>{product.measure}</ProductMeasure>
            <Delete
              type="button"
              onClick={() =>
                handleRemoveClick(product.ingredient, product.recipeId)
              }
            >
              <Icon name="cross" width="18" height="18" />
            </Delete>
          </ProductItem>
        ))}
      </ProductList>
    </div>
  );
};

export default ShoppingListComponent;

// // Remove from the ShoppingList
// export const removeFromShoppingList = createAsyncThunk(
//   'recipes/removeFromShoppingList',
//   async ({ ingredient, recipeId }, thunkAPI) => {
//     try {
//       const response = await instance.delete(`shoppingList`, {
//         ingredient,
//         recipeId,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getShoppingList = (state) => state.auth.user.shoppingList;

// <Route path="/shopping-list" element={<ShoppingList />} />
