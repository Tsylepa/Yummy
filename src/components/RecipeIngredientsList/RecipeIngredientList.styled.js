import styled from "styled-components"

const RecipeIngredientListSubtitle = styled.div`
margin-top: 300px;
height: 42px;
width: 100vw;
background-color: var(--accent-color);
display: flex;
border-radius: 8px;
align-items: center;
`

const IngredientSpan = styled.span`
margin-left: 12px;
color: var(--primary-color);
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.3px;
`

const NumberSpan = styled.span`
margin-left: 124px;
margin-right: 16px;
color: var(--primary-color);
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.3px;
`

const AddToListSpan = styled.span`
color: var(--primary-color);
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.3px;`

const IngredientList = styled.ul`
margin-top: 32px;
`
const IngredientItem = styled.li`
padding-top: 17px;
padding-bottom: 17px;
margin-top: 24px;
display: flex;
align-items: center;
background-color: var(--accent-light-color)
`

const IngredientImage = styled.img`
margin-left: 24px;
margin-right: 20px;
`

const IngredientTitle = styled.p`
width: 0px;
margin-right: 90px;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.24px;`

const IngredientMeasure = styled.span`
width: 55px;
padding: 3px;
background-color: var(--accent-color);
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
color: var(--primary-color);
text-align: center;
border-radius:4px;
`

const IngredientCheckbox = styled.input`
margin-left: 28px;
width: 15px;
height: 15px;
background-color: var(--accent-light-color);
`







export {RecipeIngredientListSubtitle, IngredientSpan, NumberSpan, AddToListSpan, 
    IngredientList, IngredientItem, IngredientImage, IngredientTitle, IngredientMeasure, IngredientCheckbox};