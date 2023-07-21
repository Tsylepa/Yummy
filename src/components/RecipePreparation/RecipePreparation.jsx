import { RecipePreparationContainer, RecipePreparationContent, RecipePreparationImage, RecipePreparationItem, RecipePreparationList, RecipePreparationTitle, StepNumber } from "./RecipePreparation.styled";



const RecipePreparation = ({ image, preparationSteps })=> {
    return(
        <RecipePreparationContainer>
          <RecipePreparationContent>
            <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
            <RecipePreparationList>
        {preparationSteps.map((step, index) => {
          // Перевірка на пустий рядок
          if (step.trim() !== "") {
            return (
              <RecipePreparationItem key={index}>
                <StepNumber>{index + 1}.</StepNumber> {step}
              </RecipePreparationItem>
            );
          }
          return null; 
        })}
      </RecipePreparationList>
      </RecipePreparationContent>
      <RecipePreparationImage src={image} alt="Recipe" />
        </RecipePreparationContainer>
    )
}

export default RecipePreparation;