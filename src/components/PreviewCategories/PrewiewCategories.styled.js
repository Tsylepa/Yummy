import styled from "styled-components"
import mediaRule from "utils/mediaRule"



const Container = styled.div`
margin-top: 786px;

${mediaRule("tablet", "desktop", `
margin-top: 648pxpx;
`)}

${mediaRule("desktop", "", `
margin-top: 838px;
`)};
`


const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CategoryTitle = styled.h3`
margin-bottom: 30px`

const CardItem = styled.li`
width: 100%;
height: 445px;

${mediaRule("tablet", "desktop", `
  width: 336px;
  // width: 50%;
  gap: 32px;
`)}

${mediaRule("desktop", "", `
  width: 260px;
  // width: 25%;
  gap: 14px;
`)};`

const CardImage = styled.img`
  width: 100%;
  height: 200px;

  object-fit: cover;
`;


<<<<<<< Updated upstream
export {CardList,CategoryTitle, CardItem, CardImage};
=======
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


export {Container, CardList,CategoryTitle, CardItem, CardImage, RecipeTitle, SeeAllBtn, SeeAllContainer};
>>>>>>> Stashed changes
