import styled from 'styled-components';
import img from '../../images/mobile/start@1x_320-min.png';
import imgTab from '../../images/tablet/start@1x-tabl.png';
import imgDesk from '../../images/desktop/start@1x-desk.png';
import mediaRule from 'utils/mediaRule';
import { Link } from 'react-router-dom';

const BackgroundPicture = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 777px;

  ${mediaRule(
    'tablet',
    'desktop',
    `
    height: 640px;
 background-image: url(${imgTab});
 `
  )};

  ${mediaRule(
    'desktop',
    '',
    `height: 800px;
background-image: url(${imgDesk});
`
  )};
`;

const BackgroundWrapper = styled.div`
  margin-bottom: 73px;
  position: relative;
  width: 100%;
  height: 625px;

  background-size: contain;
  ${mediaRule(
    'tablet',
    'desktop',
    `
 height: 566px; 
`
  )};
  ${mediaRule(
    'desktop',
    '',
    `

 background-size: contain;
 background-repeat: no-repeat;
 height: 640px;
`
  )};
`;

const MainTitle = styled.h2`
  margin-bottom: 14px;
  padding-top: 5px;
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: -0.3px;
  text-align: center;

  ${mediaRule(
    'tablet',
    'desktop',
    `
padding-top: 100px;
margin-right: 372px;
margin-left: 32px;
margin-bottom: 24px;
font-size: 72px;
line-height: 72px;
letter-spacing: -0.36px;
`
  )};

  ${mediaRule(
    'desktop',
    '',
    `
 padding-top: 100px;
 margin-left: 80px;
 width: 505px;
 text-align: left;
 font-style: normal;
 font-size: 100px;
font-weight: 400;
line-height: 100px;
letter-spacing: -0.5px;
`
  )};
`;

const TitleSpan = styled.span`
  color: var(--accent-color);
`;

const Paragraph = styled.p`
  display: flex;
  text-align: center;
  margin: auto;
  width: 248px;
  height: 72px;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;

  ${mediaRule(
    'tablet',
    'desktop',
    `
width: 362px;
height: 54px;
 margin-left: 32px;
 text-align: left;
`
  )};

  ${mediaRule(
    'desktop',
    '',
    `
margin-left: 80px;
width: 405px;
height: 72px;
font-style: normal;
line-height: 24px;
letter-spacing: -0.36px;
text-align: left;
font-size: 18px;
`
  )};
`;

const OtherCategoriesContainer = styled.div`
  ${mediaRule(
    'tablet',
    'desktop',
    `
margin-top: 32px;
`
  )};
`;

const OtherCategoriesBtn = styled(Link)`
  margin-top: 40px;
  margin-bottom: 100px;
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
  line-height: 1, 5;

  ${mediaRule(
    'tablet',
    'desktop',
    `
margin-top: 32px;
width: 239px;
height: 61px;
font-size: 16px;
font-style: normal;
line-height: 1,5;
`
  )};

  ${mediaRule(
    'desktop',
    '',
    `
margin-bottom: 118px;
`
  )};
`;

export {
  BackgroundPicture,
  BackgroundWrapper,
  MainTitle,
  TitleSpan,
  Paragraph,
  OtherCategoriesBtn,
  OtherCategoriesContainer,
};
