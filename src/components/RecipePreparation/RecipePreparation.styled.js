import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';

const RecipePreparationContainer = styled.div`
  margin-top: 50px;

  ${mediaRule(
    'tablet',
    'desktop',
    `
margin-top: 96px;
`
  )};

  ${mediaRule(
    'desktop',
    '',
    `
display: flex;
justify-content: space-between;
 
margin-top: 101px;
text-align: start;
align-self: flex-start;
`
  )};
`;

const RecipePreparationTitle = styled.h4`
  margin-bottom: 32px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.24px;

  ${mediaRule(
    'tablet',
    'desktop',
    `
margin-bottom: 33,5px;
`
  )};
`;

const RecipePreparationList = styled.ul`
  width: 270px;

  ${mediaRule(
    'desktop',
    '',
    `
width: 860px;
`
  )};
`;

const RecipePreparationItem = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;

  ${mediaRule(
    'tablet',
    'desktop',
    `
margin-bottom: 18px;
&:last-child {
  margin-bottom: 0;
}`
  )};

  ${mediaRule(
    'desktop',
    '',
    `
margin-bottom: 21px;
&:last-child {
  margin-bottom: 0;
}`
  )};
`;

const RecipePreparationImage = styled.img`
  margin-top: 40px;
  margin-bottom: 100px;
  border-radius: 8px;

  ${mediaRule(
    'tablet',
    'desktop',
    `
margin-top: 53px;
margin-bottom: 200px;
`
  )};

  ${mediaRule(
    'desktop',
    '',
    `
margin_bottom: 0px;
margin-top: 0px;
width 433px;
height: 332px;
`
  )};
`;

const StepNumber = styled.span`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--accent-color);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-right: 8px;
`;

const RecipePreparationContent = styled.div`
  ${mediaRule(
    'desktop',
    '',
    `
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  gap: 24px;`
  )};
`;

export {
  RecipePreparationContainer,
  RecipePreparationTitle,
  RecipePreparationItem,
  RecipePreparationList,
  RecipePreparationImage,
  StepNumber,
  RecipePreparationContent,
};
