import { RecipePreparationContainer, RecipePreparationImage, RecipePreparationItem, RecipePreparationList, RecipePreparationTitle } from "./RecipePreparation.styled";



const RecipePreparation = ({ image, preparationSteps })=> {
    return(
        <RecipePreparationContainer>
            <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
            <RecipePreparationList>
        {preparationSteps.map((step, index) => (
          <RecipePreparationItem key={index}>{`${index + 1}. ${step}`}</RecipePreparationItem>
        ))}
      </RecipePreparationList>
      <RecipePreparationImage src={image} alt="Recipe" />
        </RecipePreparationContainer>
    )
}

export default RecipePreparation;