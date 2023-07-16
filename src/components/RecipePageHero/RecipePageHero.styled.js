import styled from "styled-components";
import imageMobile from "../../images/recipe@1x_320.png"


const RecipePageContainer= styled.div`
position: absolute;
top: 0px;
    left: 0px;
    height: 375px;
background-image: url(${imageMobile});
background-size: cover;
background-repeat: no-repeat;
width: 100vw;`

const RecipePageTitle = styled.h3`
margin-top: 80px;
width: 250px;
margin-left: auto;
margin-right: auto;
margin-bottom: 18px;
color: var(--accent-color);
text-align: center; 
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 24px;
letter-spacing: -0.48px;`

const RecipePageDescription = styled.p`
margin-right: auto;
margin-left: auto;
margin-bottom: 24px;;
width: 270px;
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; 
letter-spacing: -0.24px;`

const RecipePageButton = styled.button`
margin-right: auto;
margin-left: auto;
margin-bottom: 42px;
display: flex;
align-items: center;
justify-content: center;
width: 135px;
height: 32px;
border-radius: 24px 44px;
border: 1px solid var(--accent-color);
color: var(--secondary-color);
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
background: transparent`

const RecipePageTime = styled.span`
justify-content: center;
align-items: center;
display: flex;
gap: 3px;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.24px;`

export {RecipePageContainer, RecipePageTitle, RecipePageDescription, RecipePageButton, RecipePageTime};
