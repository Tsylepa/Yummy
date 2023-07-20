import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from 'api/recipes';
import { useDispatch } from 'react-redux';
import { StyledCategoriesList, BaseNavLink } from './CategoriesList.styled';
import { getRecipesByCategory } from 'redux/recipes/recipesOperations';
import RecipesCard from 'components/RecipesCard/RecipesCard';

const CategoriesList = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getRecipesByCategory(categoryName);
        console.log(data);
        setRecipes(data);
      } catch (error) {
        console.log(error.message);
      }
      fetch();
    };
  }, [dispatch]);

  useEffect(() => {
    getCategories()
      .then(categories => setCategories(categories))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <>
      {categories.map(categorie => (
        <>
          <StyledCategoriesList key={categorie._id}>
            <BaseNavLink to={`/categories/${categorie.name}`}>
              {categorie.name}
            </BaseNavLink>
          </StyledCategoriesList>
        </>
      ))}
      <RecipesCard recipes={recipes} />;
    </>
  );
};
export default CategoriesList;
