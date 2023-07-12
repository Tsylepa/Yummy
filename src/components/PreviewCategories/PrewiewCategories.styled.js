import styled from "styled-components"
import mediaRule from "utils/mediaRule"




const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const CardItem = styled.li`
width: 100%;

${mediaRule("tablet", "desktop", `
  width: 336px;
  gap: 32px;
`)}

${mediaRule("desktop", "", `
  width: 260px;
  gap: 14px;
`)};`

const CardImage = styled.img`
  width: 100%;
  height: 200px; /* Задайте бажану висоту фотографії */

  object-fit: cover;
`;


export {CardList, CardItem, CardImage};