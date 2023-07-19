import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularRecipes } from 'redux/recipes/recipesOperations';
import {
  Image,
  List,
  RecipeDescription,
  RecipeItem,
  RecipeLink,
  Title,
} from './PopularRecipes.styled';

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const popular = await dispatch(getPopularRecipes());
        setRecipes(popular.payload);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularRecipes();
  }, [dispatch]);

  return (
    <>
      <Title>Popular recipe</Title>
      <List>
        {recipes.map(recipe => (
          <RecipeItem key={recipe._id}>
            <RecipeLink to={`/recipe/${recipe._id}`}>
              <Image
                src={recipe.preview}
                alt={recipe.title}
                width="104"
                height="85"
              />
              <div>
                <h4>{recipe.title}</h4>
                <RecipeDescription>
                  {recipe.description.slice(0, 40)}
                </RecipeDescription>
              </div>
            </RecipeLink>
          </RecipeItem>
        ))}
      </List>
    </>
  );
};

export default PopularRecipes;
