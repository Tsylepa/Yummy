import styled from "styled-components";
import img from "../../images/start@1x_320-min.png"


const MainTitle = styled.h2`
margin-bottom:14px;
padding-top: 70px;
font-size: 60px;
font-style: normal;
font-weight: 400;
line-height: 60px;
letter-spacing: -0.3px;
text-align: center;
`

const TitleSpan = styled.span`
color: var(--accent-color)`

const BackgroundWrapper = styled.div`
background-image: url(${img});
background-size: contain;
width: 320px;
    height: 777px;
    position: relative;
  z-index: -1;`


const Paragraph = styled.p`
display: flex;
text-align: center;
margin: auto;
width: 248px;
height: 72px;
justify-content: center;
font-size: 14px;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.28px;`






export {BackgroundWrapper, MainTitle, TitleSpan, Paragraph}