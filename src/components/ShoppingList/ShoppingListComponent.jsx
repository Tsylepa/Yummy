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
import { removeFromShoppingList } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { ButtonSkewStyled } from 'components/ButtonSkew/ButtonSkew.styled';
import { Loader } from 'components/Loader/Loader';

const ShoppingListComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shoppingList = useSelector(state => state.auth.user.shoppingList);

  const goToMainPage = () => {
    navigate('/main');
  };
  const handleRemoveClick = (ingredient, recipeId) => {
    const product = {
      ingredient: {
        _id: ingredient._id,
        name: ingredient.name,
        desc: ingredient.desc,
        img: ingredient.img,
      },
      recipeId: recipeId,
    };

    dispatch(removeFromShoppingList(product));
  };
  return (
    <div>
      {shoppingList.isLoading ? (
        <Loader />
      ) : (
        <>
          {shoppingList.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <h2>
                Your shopping list is currently empty. Start adding items to
                your shopping list
              </h2>
              <ButtonSkewStyled
                type="button"
                data-variant="primary-accent"
                onClick={goToMainPage}
                style={{
                  marginTop: '20px',
                  transform: 'none',
                  borderRadius: '22px 44px',
                }}
              >
                Go to Main Page
              </ButtonSkewStyled>
            </div>
          ) : (
            <>
              <RecipeIngredientListSubtitle style={{ marginTop: 0 }}>
                <IngredientSpan>Products</IngredientSpan>
                <NumberSpan>Number</NumberSpan>
                <RemoveSpan style={{ marginLeft: '20px' }}>Remove</RemoveSpan>
              </RecipeIngredientListSubtitle>
              <ProductList>
                {shoppingList.map(product => (
                  <ProductItem
                    key={product.ingredient._id}
                    style={{
                      background: 'transparent',
                      borderBottom: '1px solid #E0E0E0',
                      borderRadius: 0,
                      alignItems: 'flex-start',
                    }}
                  >
                    {product.ingredient.img ? (
                      <ProductImage
                        src={product.ingredient.img}
                        alt={product.ingredient.name}
                      />
                    ) : (
                      <ProductImage
                        src={product.ingredient.img}
                        alt="Placeholder"
                      />
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
                      style={{
                        margin: '0 auto auto auto',
                      }}
                    >
                      <Icon name="cross" width="18" height="18" />
                    </Delete>
                  </ProductItem>
                ))}
              </ProductList>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ShoppingListComponent;
