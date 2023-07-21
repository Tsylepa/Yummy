import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';
import imageMobile from '../../images/mobile/recipe@1x_320.png';
import imageTablet from '../../images/tablet/recipe_@1x_768.png';
import imageDesktop from '../../images/desktop/recipe@1x_1280.png';

const RecipePageContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 375px;
  background-image: url(${imageMobile});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;

  ${mediaRule(
    'tablet',
    'desktop',
    `
height: 495px;
background-image: url(${imageTablet});
`
  )};

  ${mediaRule(
    'desktop',
    '',
    `
height: 493px;
background-image: url(${imageDesktop});
`
  )};
`;

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
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;

  ${mediaRule(
    'tablet',
    'desktop',
    `
margin-top: 72px;
width: 505px;
margin-bottom: 24px;
font-size: 35px;
font-style: normal;
font-weight: 500;
line-height: 35px;
letter-spacing: -0.88px;
`
  )};

  ${mediaRule(
    'desktop',
    '',
    `
margin-top: 102px;
width: 505px;
font-size: 44px;
font-style: normal;
font-weight: 500;
line-height: 44px;
letter-spacing: -0.88px;
`
  )};
`;

const RecipePageDescription = styled.p`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  width: 270px;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;

  ${mediaRule(
    'tablet',
    'desktop',
    `
width: 505px;
height: 96px;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
letter-spacing: -0.36px;`
  )};

  ${mediaRule(
    'desktop',
    '',
    `
width: 600px;
margin-bottom: 30px;
`
  )};
`;

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
  background: transparent;

  ${mediaRule(
    'tablet',
    'desktop',
    `
margin-bottom: 60px;
width: 278px;
height: 59px;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;`
  )};

  ${mediaRule(
    'desktop',
    '',
    `

margin-bottom: 48px;
`
  )};
`;

const RecipePageTime = styled.span`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 3px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;
`;

export {
  RecipePageContainer,
  RecipePageTitle,
  RecipePageDescription,
  RecipePageButton,
  RecipePageTime,
};
