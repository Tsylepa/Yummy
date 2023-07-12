import styled from "styled-components";
import img from "../../images/start@1x_320-min.png";
import imgTab from "../../images/start@1x-tabl.png";
import imgDesk from "../../images/start@1x-desk.png"
import mediaRule from "utils/mediaRule";




// width: ${mediaRule('', 'mobile', 'width: 320px;')}`


const MainTitle = styled.h2`
margin-bottom:14px;
padding-top: 70px;
font-size: 60px;
font-style: normal;
font-weight: 400;
line-height: 60px;
letter-spacing: -0.3px;
text-align: center;

${mediaRule("tablet", "desktop", `
padding-top: 140px;
margin-right: 372px;
margin-left: 32px;
margin-bottom: 24px;
font-size: 72px;
line-height: 72px;
letter-spacing: -0.36px;
`)};
`

const TitleSpan = styled.span`
color: var(--accent-color)`

const BackgroundWrapper = styled.div`
width: 100%;
height: 777px;
background-image: url(${img});
background-size: contain;
${mediaRule("tablet", "desktop", `
 background-image: url(${imgTab});
 height: 640px; 
`)};
${mediaRule("desktop", "", `
 background-image: url(${imgDesk});
 background-size: cover;
`)};`


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
letter-spacing: -0.28px;


${mediaRule("tablet", "desktop", `
width: 362px;
height: 54px;
 margin-left: 32px;
 text-align: left;
`)};`






export {BackgroundWrapper, MainTitle, TitleSpan, Paragraph}