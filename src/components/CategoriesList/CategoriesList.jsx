import { Link, useLocation } from 'react-router-dom';

import { StyledCategoriesList, StyledContainer } from './CategoriesList.styled';

const CategoriesList = ({ categories }) => {
  const location = useLocation();
  return (
    <StyledContainer>
      {categories.map(categorie => (
        <StyledCategoriesList key={categorie._id.$oid}>
          <Link to={`/categories/${categorie.name}`} state={{ from: location }}>
            {categorie.name}
          </Link>
        </StyledCategoriesList>
      ))}
    </StyledContainer>
  );
};
export default CategoriesList;
