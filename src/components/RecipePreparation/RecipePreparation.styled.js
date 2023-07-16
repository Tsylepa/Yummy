import styled from "styled-components"

const RecipePreparationContainer = styled.div`
margin-top: 50px;
`

const RecipePreparationTitle = styled.h4`
margin-bottom: 32px;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 24px;
letter-spacing: -0.24px;`

const RecipePreparationList = styled.ul`
`

const RecipePreparationItem = styled.li`
margin-bottom: 10px;
&:last-child {
  margin-bottom: 0;
}
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.28px;
`

const RecipePreparationImage = styled.img`
margin-top: 40px;
margin-bottom: 100px;
border-radius: 8px;`



export {RecipePreparationContainer, RecipePreparationTitle, RecipePreparationItem, 
    RecipePreparationList, RecipePreparationImage}