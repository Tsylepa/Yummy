import styled from "styled-components"
import mediaRule from "utils/mediaRule"
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
 margin-right:19px;
  margin-left: 6px;


${mediaRule("tablet", "desktop", `

margin-left: 0px;
`)}

${mediaRule("desktop", "", `
margin-top: 0px;
`)}; 
`

const CardList = styled.ul`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 

  ${mediaRule("tablet", "desktop", `
   gap: 20px;
  `)}

${mediaRule("desktop", "", `
       gap: 5px;
      `)};
`;

const CategoryTitle = styled.h3`
margin-top: 73px;
margin-bottom: 32px;

${mediaRule("desktop", "", `
margin-top: 100px;
margin-bottom: 20px
`)};`

const CardItem = styled(NavLink)`

position: relative;
  width: 100%;
  &:hover {
    cursor: pointer; 
    
  }
  
    
  ${mediaRule("tablet", "desktop", `
    width: 328px;
   `)}

  ${mediaRule("desktop", "", `
    width: 290px;
    height: 300px;
  `)};

`;

const CardImage = styled.img`
  width: 100%;
  height: 310px;
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
color: var(--secondary-color);


${mediaRule("desktop", "", `
 position: absolute;
top: 250px;
left: 22px;
width: 250px;
height: 52px;
background-color: var(--primary-color);
border-radius: 8px;
text-align: left;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.24px;
padding-left: 19px;
padding-top: 8px;
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



export {Container, CardList,CategoryTitle, CardItem, CardImage, RecipeTitle, SeeAllBtn, SeeAllContainer};



