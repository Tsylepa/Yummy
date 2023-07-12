import styled from "styled-components"
import { Link } from "react-router-dom";
import mediaRule from "utils/mediaRule";

const Container = styled.div`
width: 225px;
height: 92px;
margin: 137px 14px 90px 70px;

padding: 8px 8px 30px 8px;
border-radius: 8px;
background-color: var(--primary-color);

${mediaRule("tablet", "desktop", `
margin-top: 18px;
margin-right: 43px;
margin-bottom: 240 px;
margin-left: 475px;
`)};`


const Subtitle = styled.div`
margin-right: 14px;
font-size: 12px;
font-weight: 500;
line-height: 18px;
letter-spacing: -0.24px;
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
letter-spacing: 0.2px;`

export {Container, Subtitle, GreenPartOfSubtitle, Button};