import styled from "styled-components"
import mediaRule from "utils/mediaRule"
import  {Link}  from "react-router-dom"

const InputButtonContainer = styled.div`
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 270px;
    height: 52px;
    border: 1px solid #BDBDBD;
    border-radius: 24px 44px;
    background-color: var(--primary-color);

    ${mediaRule("tablet", "desktop", `
    position: absolute;
 top: 311px;
    left: 22px;
    padding: 10px;
    width: 362px;
    height: 59px;
    
`)};

${mediaRule("desktop", "", `
position: absolute;
 top: 462px;
    left: 135px;
    padding: 10px;
    width: 426px;
    height: 52px;
    
`)};
`

const Input = styled.input`
display: flex;
  align-items: center;
  justify-content: center;
    width: 160px;
    height: 30px;
border: none;
background-color: transparent;
font-size: 16px;
color: #BDBDBD;

&:focus {
    outline: none; 
   border: none;
  }

${mediaRule("tablet", "desktop", `
 width: 208px;
    height: 30px;
    `)};
  ${mediaRule("desktop", "", `
     left: 90px;
    padding: 10px;
    width: 462px;
    height: 59px;
    

`)};
`
const Button = styled(Link)`
display: flex;
  align-items: center;
  justify-content: center;
margin: -12px;
width: 161px;
height: 52px;
color: var(--primary-color);
background-color: var(--secondary-color);
color: var( --primary-color);
border-radius: 24px 44px;
border: 1px solid var(--secondary-color);
font-size: 16px;

${mediaRule("tablet", "desktop", `
margin: -12px;
width: 161px;
height: 59px;
`)};`

export {InputButtonContainer, Input, Button};