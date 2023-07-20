import css from './MyRecipes.module.css';
import { BiTrash } from 'react-icons/bi';
import { ContainerBG } from 'components/ContainerBG/ContainerBG';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteRecipe,
  // getRecipeById,
  getRecipeList,
} from 'redux/recipes/recipesOperations';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { getFavoriteRecipeById } from 'redux/favorite/favoriteOperations';

import { selectRecipeList } from 'redux/recipes/recipesSelectors';
import { Loader } from 'components/Loader/Loader';

const MyRecipes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeList())
      .then(myRecipes => setMyRecipes(myRecipes))
      .catch(err => console.log(err.message));
  }, [dispatch]);

  const [
    ,
    // myRecipes,
    setMyRecipes,
  ] = useState([]);
  const load = useSelector(selectRecipeList);
  return (
    <>
      {load.isLoading ? (
        <Loader />
      ) : (
        <ContainerBG>
          <div>
            <MainTitle />

            {load.recipe.total > 0 ? (
              <>
                <h1 className={css.title}>My recipes</h1>
                <ul style={{ zIndex: '1', position: 'relative' }}>
                  {/* {myRecipes.payload.recipes.map(recipe => ( */}
                  {load.recipe.recipes.map(recipe => (
                    <li key={recipe._id} className={css.item}>
                      <img
                        className={css.img}
                        src={recipe.preview}
                        alt=""
                      ></img>
                      <div className={css.text__container}>
                        <h2 className={css.section__title}>{recipe.title}</h2>
                        <div className={css.text}>
                          <p className={css.text__info}>
                            {' '}
                            {recipe.description}
                          </p>
                          <p className={css.text__studies}>
                            {' '}
                            {recipe.instructions}
                          </p>
                          <span className={css.block}>{recipe.time}</span>
                        </div>

                        <button
                          className={css.BiTrash__btn}
                          type="button"
                          onClick={() => dispatch(deleteRecipe(recipe._id))}
                        >
                          <BiTrash className={css.BiTrash} />
                        </button>

                        <Link to={`/recipe/${recipe._id}`}>
                          <button
                            className={css.btn}
                            type="button"
                            onClick={() =>
                              dispatch(getFavoriteRecipeById(recipe._id))
                            }
                          >
                            See recipe
                          </button>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '100px 0px' }}>
                <h2>Your recipes will appear here when you add them.</h2>
                <p>Bаши рецепты появятся здесь, когда вы их добавите.</p>
              </div>
            )}
          </div>
        </ContainerBG>
      )}
    </>
  );
};

export default MyRecipes;
