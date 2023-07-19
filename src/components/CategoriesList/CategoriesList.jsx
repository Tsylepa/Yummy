import { useLocation } from 'react-router-dom';

import {
  StyledCategoriesList,
  StyledContainer,
  BaseNavLink,
} from './CategoriesList.styled';

const CategoriesList = ({ categories }) => {
  const location = useLocation();
  return (
    <StyledContainer>
      {categories.map(categorie => (
        <StyledCategoriesList key={categorie._id.$oid}>
          <BaseNavLink
            to={`/categories/${categorie.name}`}
            state={{ from: location }}
          >
            {categorie.name}
          </BaseNavLink>
        </StyledCategoriesList>
      ))}
    </StyledContainer>
  );
};
export default CategoriesList;
