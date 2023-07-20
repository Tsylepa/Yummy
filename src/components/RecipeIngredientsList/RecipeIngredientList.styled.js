import styled from "styled-components"
import mediaRule from "utils/mediaRule"

const RecipeIngredientListSubtitle = styled.div`
width: 270px;
margin-top: 300px;
height: 42px;
background-color: var(--accent-color);
display: flex;
border-radius: 8px;
align-items: center;

${mediaRule("tablet", "desktop", `
margin-top: 435px;
width: 696px;
height: 60px;
`)};

${mediaRule("desktop", "", `
margin-top: 435px;
width: 1240px;
height: 60px;
`)};
`

const IngredientSpan = styled.span`
margin-left: 12px;
color: var(--primary-color);
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.3px;

${mediaRule("tablet", "desktop", `
margin-left: 32px;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.54px;`)};

${mediaRule("desktop", "", `
margin-left: 40px;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.54px;`)};
`

const NumberSpan = styled.span`
margin-left: 75px;
margin-right: 16px;
color: var(--primary-color);
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.3px;

${mediaRule("tablet", "desktop", `
margin-left: 312px;
margin-right: 38px;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.54px;`)};

${mediaRule("desktop", "", `
margin-left: 760px;
margin-right: 109px;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.54px;`)};
`

const AddToListSpan = styled.span`
color: var(--primary-color);
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.3px;

${mediaRule("tablet", "desktop", `
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.54px;`)};

${mediaRule("desktop", "", `
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.54px;`)};
`

const IngredientList = styled.ul`
margin-top: 32px;


${mediaRule("tablet", "desktop", `
padding-left: 0px;
padding-right: 0px;`)};

${mediaRule("desktop", "", `
margin-top: 50px;
padding-left: 0px;
padding-right: 0px;`)};
`
const IngredientItem = styled.li`
width:270px;
padding-top: 17px;
padding-bottom: 17px;
margin-top: 24px;
display: flex;
align-items: center;
background-color: var(--accent-light-color);
border-radius: 8px;;

${mediaRule("tablet", "desktop", `
width:696px;
height: 112px;
`)};

${mediaRule("desktop", "", `
width:1240px;
height: 182px;
`)};`

const IngredientImage = styled.img`
width: 40px;
height: 40px;
margin-left: 10px;
margin-right: 10px;

${mediaRule("tablet", "desktop", `
margin-left: 48px;
margin-right: 40px;
`)}

${mediaRule("desktop", "", `
width: 70px;
height: 70px;
margin-left: 48px;
margin-right: 30px;
`)};
`

const IngredientTitle = styled.p`
width: 0px;
margin-right: 82px;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.24px;

${mediaRule("tablet", "desktop", `
margin-right: 315px;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 24px; 
letter-spacing: -0.24px;
`)};

${mediaRule("desktop", "", `
margin-right: 770px;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 100% */
letter-spacing: -0.24px;
`)};`

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

${mediaRule("tablet", "desktop", `
width: 80px;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
`)};

${mediaRule("desktop", "", `
width: 75px;
padding: 7px;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
`)};
`

const IngredientCheckbox = styled.input`
  margin-left: 28px;
  width: 17.5px;
  height: 17.5px;
  background-color: transparent;
  appearance: none;
  position: relative;
  border: 1px solid var(--recipe-border-color); 
  border-radius: 3px;
  outline: none;

 
  &:checked::before {
    content: "";
    position: absolute;
    left: 2.5px;
    top: -5px;
    width: 7px;
    height: 14px;
    border-style: solid;
    border-width: 0 3px 3px 0;
    border-color: var(--accent-color);
    transform: rotate(36deg); 
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

${mediaRule("tablet", "desktop", `
margin-left: 60px;
width: 35px;
  height: 35px;
  background-color: transparent;
  appearance: none;
  position: relative;
  border: 2px solid var(--recipe-border-color);
  border-radius: 8px;
  outline: none;

  
  &:checked::before {
    content: "";
    position: absolute;
    left: 11px; 
    top: 2px;
    width: 7px;
    height: 14px;
    border-style: solid;
    border-width: 0 3px 3px 0; 
    border-color: var(--accent-color);
    transform: rotate(43deg);; 
  }

 
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`)};

${mediaRule("desktop", "", `
margin-left: 130px;
width: 35px;
  height: 35px;
  background-color: transparent;
  appearance: none;
  position: relative;
  border: 2px solid var(--recipe-border-color);
  border-radius: 8px;
  outline: none;

  
  &:checked::before {
    content: "";
    position: absolute;
    left: 11px; 
    top: 2px;
    width: 7px;
    height: 14px;
    border-style: solid;
    border-width: 0 3px 3px 0; 
    border-color: var(--accent-color);
    transform: rotate(43deg);; 
  }

 
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`)};`







export {RecipeIngredientListSubtitle, IngredientSpan, NumberSpan, AddToListSpan, 
    IngredientList, IngredientItem, IngredientImage, IngredientTitle, IngredientMeasure, IngredientCheckbox};