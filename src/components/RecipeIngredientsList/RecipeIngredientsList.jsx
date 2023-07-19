import { useDispatch } from "react-redux";
import {AddToListSpan, IngredientCheckbox, IngredientImage, IngredientItem, IngredientList, IngredientMeasure, IngredientSpan, IngredientTitle, NumberSpan, RecipeIngredientListSubtitle} from "./RecipeIngredientList.styled"
import {addToShoppingList } from "../../redux/recipes/recipesOperations"
import img from "../../images/mobile/image_Ingredient_320.png";


const RecipeIngredientsList = ({ingredients}) =>{
  const dispatch = useDispatch();
    const handleCheckboxClick = (ingredientId, measure) => {
      dispatch(addToShoppingList({
        ingredientId,
        measure,
      }));
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
            <IngredientCheckbox type="checkbox" onChange={() => handleCheckboxClick(ingredient._id, ingredient.measure)} />
          </IngredientItem>
        ))}
      </IngredientList>
    </div>
    )
}




export default RecipeIngredientsList;