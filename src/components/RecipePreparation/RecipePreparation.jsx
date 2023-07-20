import { RecipePreparationContainer, RecipePreparationImage, RecipePreparationItem, RecipePreparationList, RecipePreparationTitle, StepNumber } from "./RecipePreparation.styled";



const RecipePreparation = ({ image, preparationSteps })=> {
    return(
        <RecipePreparationContainer>
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
          return null; // Якщо рядок є пустим, повертаємо null
        })}
      </RecipePreparationList>
      <RecipePreparationImage src={image} alt="Recipe" />
        </RecipePreparationContainer>
    )
}

export default RecipePreparation;