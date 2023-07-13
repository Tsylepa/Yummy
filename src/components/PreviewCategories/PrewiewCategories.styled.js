import styled from "styled-components"
import mediaRule from "utils/mediaRule"




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


export {CardList,CategoryTitle, CardItem, CardImage};