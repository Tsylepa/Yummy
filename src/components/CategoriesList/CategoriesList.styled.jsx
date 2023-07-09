import styled from 'styled-components';

export const StyledCategoriesList = styled.li`
  list-style: none;
  display: block;
  padding: 10px;

  text-decoration: none;
  text-transform: capitalize;
  color: #e0e0e0;
  padding: 10px;
  &:hover {
    color: red;
  }
`;

export const StyledContainer = styled.div`
  gap: 28px;
  display: flex;
  flex-direction: row;
`;

// export const StyledLink = styled.Link`
//   color: var(--accent-color);
//   background-color: var(--white-color);
//   border: 1px solid;
//   border-radius: 20px;
//   outline: none;
//   padding: 8px 22px;
//   font-size: 12px;
//   line-height: 1.33333;
// `;
