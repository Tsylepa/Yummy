import styled from "styled-components"
import mediaRule from "utils/mediaRule"
import { Link } from "react-router-dom";


const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CategoryTitle = styled.h3`
margin-top: 73px;
margin-bottom: 32px;

${mediaRule("desktop", "", `
margin-top: 100px;
margin-bottom: 32px
`)};`

const CardItem = styled.li`
position: relative;
width: 100%;



${mediaRule("tablet", "desktop", `
  width: 336px;
  // width: 50%;
  gap: 32px;
`)}

${mediaRule("desktop", "", `
  width: 260px;
  // width: 25%;
  gap: 14px;
  height: 300px;
`)};`

const CardImage = styled.img`
  width: 100%;
  height: 323px;
  border-radius: 8px;

  object-fit: cover;
`;

const RecipeTitle = styled.h4`
position: absolute;
top: 250px;
left: 16px;
width: 230px;
height: 52px;
background-color: var(--primary-color);
border-radius: 8px;
text-align: left;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.24px;
padding-left: 16px;
padding-top: 10px;

${mediaRule("desktop", "", `
 position: absolute;
top: 250px;
left: 16px;
width: 230px;
height: 52px;
background-color: var(--primary-color);
border-radius: 8px;
text-align: left;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.24px;
padding-left: 16px;
padding-top: 10px;
`)};`

const SeeAllContainer = styled.div`
display: flex;
justify-content: flex-end;`

const SeeAllBtn = styled(Link)`
display: flex;
justify-content:center;
align-items: center;
width: 85px;
height: 33px;
margin-top: 24px;
background-color: var(--accent-color);
color: var(--primary-color);
border-radius: 6px;
border: none;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;

${mediaRule("tablet", "desktop", `
margin-top: 40px;
`)};

${mediaRule("desktop", "", `
margin-top: 50px;
`)};`


export { CardList,CategoryTitle, CardItem, CardImage, RecipeTitle, SeeAllBtn, SeeAllContainer};