import styled from "styled-components";
import img from "../../images/start@1x_320-min.png";
import imgTab from "../../images/start@1x-tabl.png";
import imgDesk from "../../images/start@1x-desk.png"
import mediaRule from "utils/mediaRule";
import  {Link}  from "react-router-dom"




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

${mediaRule("desktop", "", `
 padding-top: 140px;
 margin-left: 90px;
 width: 505px;
 text-align: left;
 font-style: normal;
 font-size: 100px;
font-weight: 400;
line-height: 100px;
letter-spacing: -0.5px;
`)};
`

const TitleSpan = styled.span`
color: var(--accent-color)`

const BackgroundWrapper = styled.div`
margin-bottom: 73px;
position: relative;
width: 100%;
height: 777px;
background-image: url(${img});
background-size: contain;
${mediaRule("tablet", "desktop", `
 background-image: url(${imgTab});
 height: 640px; 
`)};
${mediaRule("desktop", "", `
margin-bottom: 100px;
 background-image: url(${imgDesk});
 background-size: contain;
 background-repeat: no-repeat;
 height: 800px;
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
`)};

${mediaRule("desktop", "", `
margin-left: 90px;
width: 364px;
height: 72px;
font-style: normal;
line-height: 24px;
letter-spacing: -0.36px;
text-align: left;
`)};`

const OtherCategoriesContainer = styled.div`

${mediaRule("tablet", "desktop", `
margin-top: 32px;
`)};
`

const OtherCategoriesBtn = styled(Link)`
margin-top: 40px;
margin-right: auto;
margin-left: auto;
display: flex;
align-items: center;
justify-content: center;
width: 180px;
height: 46px;
border-radius: 24px 44px;
border: 1px solid var(--accent-color);
color: var(--secondary-color);
font-size: 14px;
font-style: normal;
line-height: 1,5;

${mediaRule("tablet", "desktop", `
margin-top: 32px;
width: 239px;
height: 61px;
font-size: 16px;
font-style: normal;
line-height: 1,5;
`)};
`




export {BackgroundWrapper, MainTitle, TitleSpan, Paragraph, OtherCategoriesBtn, OtherCategoriesContainer}