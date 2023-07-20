import { useDispatch, useSelector } from "react-redux";
import {AddToListSpan, IngredientCheckbox, IngredientImage, IngredientItem, IngredientList, IngredientMeasure, IngredientSpan, IngredientTitle, NumberSpan, RecipeIngredientListSubtitle} from "./RecipeIngredientList.styled"
import {addToShoppingList, removeFromShoppingList } from "../../redux/auth/authOperations"
import img from "../../images/mobile/image_Ingredient_320.png";
import { getShoppingList } from "redux/auth/authSelectors";


const RecipeIngredientsList = ({ingredients, recipeId}) =>{
  const dispatch = useDispatch();
  const cart = useSelector(getShoppingList);
  const cartItems = cart.map(item => item.ingredient._id)

    const handleCheckboxClick = (ingredient, measure, e) => {
     
      if(e.target.checked){
        dispatch(addToShoppingList({
          ingredient,
          recipeId,
          measure, 
        }));
       }  else {
        dispatch(removeFromShoppingList({
        ingredient,
        recipeId,
        })) }
      };

    return(
       <div>
            <RecipeIngredientListSubtitle><IngredientSpan>Ingredients</IngredientSpan>
            <NumberSpan>Number</NumberSpan>
            <AddToListSpan>Add to list</AddToListSpan></RecipeIngredientListSubtitle>
        <IngredientList>
        {ingredients.map((ingredient) => (
          <IngredientItem key={ingredient._id}>
           {ingredient.img ? (
  <IngredientImage src={ingredient.img} alt={ingredient.name} />
) : (
  <IngredientImage src={img} alt="Placeholder" /> 
)}
            <IngredientTitle>{ingredient.name || 'ingredient'}</IngredientTitle>
            <IngredientMeasure>{ingredient.measure}</IngredientMeasure>
            <IngredientCheckbox type="checkbox" checked={cartItems.includes(ingredient._id)} onChange={(e) => handleCheckboxClick(ingredient, ingredient.measure, e)} />
          </IngredientItem>
        ))}
      </IngredientList>
    </div>
    )
}


export default RecipeIngredientsList;