import {AddToListSpan, IngredientCheckbox, IngredientImage, IngredientItem, IngredientList, IngredientMeasure, IngredientSpan, IngredientTitle, NumberSpan, RecipeIngredientListSubtitle} from "./RecipeIngredientList.styled"

import img from "../../images/mobile/image_Ingredient_320.png";


const RecipeIngredientsList = ({ingredients}) =>{
    
    const handleCheckboxClick = (ingredientId) => {
        // додавання інгредієнта в список покупок
       
        console.log(`Ingredient with ID ${ingredientId} has been added to shopping list.`);
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
            <IngredientCheckbox type="checkbox" onChange={() => handleCheckboxClick(ingredient.id)} />
          </IngredientItem>
        ))}
      </IngredientList>
    </div>
    )
}




export default RecipeIngredientsList;