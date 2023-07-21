import styled from "styled-components"
import { Link } from "react-router-dom";
import mediaRule from "utils/mediaRule";

const Container = styled.div`
width: 210px;
height: 92px;
margin: 125px 14px 90px 54px;

padding: 8px 8px 30px 8px;
border-radius: 8px;
background-color: var(--primary-color);

${mediaRule("tablet", "desktop", `
margin-top: 18px;
margin-right: 43px;
margin-bottom: 240 px;
margin-left: 475px;
`)};
${mediaRule("desktop", "", `
width: 290px;
padding: 10px 16px 30px 24px;
    margin-top: 19px;
    margin-right: 43px;
    
    margin-left: 884px;
`)};`


const Subtitle = styled.div`
margin-right: 14px;
font-size: 12px;
font-weight: 500;
line-height: 15px;
letter-spacing: -0.24px;
background-color: var(--primary-color);
color: var(--secondary-color);

${mediaRule("desktop", "", `
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; 
letter-spacing: -0.24px;
background-color: var(--primary-color);
color: var(--secondary-color);
`)};
`

const GreenPartOfSubtitle = styled.span`
color: var(--accent-color);`

const Button = styled(Link)`
display: flex;
align-items: center;
margin: 0px 15px 11px 105px;
outline: 0;
border: 0;
background-color: var(--primary-color);
font-size: 10px;
font-weight: 400;
line-height: 12px;
letter-spacing: 0.2px;
background-color: var(--primary-color);
color: var(--secondary-color);

${mediaRule("desktop", "", `
margin: -5px 13px 20px 160px
`)};
`

export {Container, Subtitle, GreenPartOfSubtitle, Button};

