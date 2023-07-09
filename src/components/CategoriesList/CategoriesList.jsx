import { Link, useLocation } from 'react-router-dom';

const CategoriesList = ({ categories }) => {
  const location = useLocation();
  return (
    <div>
      {categories.map(categorie => (
        <li key={categorie._id.$oid}>
          <Link to={`/categories/${categorie.name}`} state={{ from: location }}>
            {categorie.name}
          </Link>
        </li>
      ))}
    </div>
  );
};
export default CategoriesList;
