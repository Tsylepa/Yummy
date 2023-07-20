import css from './Favorites.module.css';
import { BiTrash } from 'react-icons/bi';
import { ContainerBG } from 'components/ContainerBG/ContainerBG';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  deleteFavorite,
  // getFavoriteRecipeById,
  getFavoritesList,
} from 'redux/favorite/favoriteOperations';
import { Link } from 'react-router-dom';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { Loader } from 'components/Loader/Loader';
import { selectFavoriteList } from 'redux/favorite/favoriteSelectors';

const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoritesList())
      .then(myFavoriteRecipes => setMyFavoriteRecipes(myFavoriteRecipes))
      .catch(err => console.log(err.message));
  }, [dispatch]);

  const [
    ,
    // myFavoriteRecipes,
    setMyFavoriteRecipes,
  ] = useState([]);
  const load = useSelector(selectFavoriteList);
  // console.log(`favorite.js/payload:`,myFavoriteRecipes.payload)
  // console.log(`favorite.js/payload:`,myFavoriteRecipes.payload.recipes)
  // console.log(`page favorite:`,myFavoriteRecipes)

  return (
    <>
      {load.isLoading ? (
        <Loader />
      ) : (
        <ContainerBG>
          <div>
            <MainTitle />

            {load.favoriteRecipes.total > 0 ? (
              <>
                <h1 className={css.title}>Favorites</h1>
                <ul style={{ zIndex: '1', position: 'relative' }}>
                  {/* {myFavoriteRecipes.payload.recipes.map(recipe => ( */}
                  {load.favoriteRecipes.recipes.map(recipe => (
                    // {/* {recipes.myRecipe.map(recipe => ( */}
                    <li key={recipe._id} className={css.item}>
                      <img
                        className={css.img}
                        src={recipe.preview}
                        alt=""
                      ></img>
                      <div className={css.text__container}>
                        <h2 className={css.section__title}>{recipe.title}</h2>
                        <div className={css.text}>
                          <p className={css.text__info}>{recipe.description}</p>
                          <p className={css.text__studies}>
                            {recipe.instructions}
                          </p>
                          <span className={css.block}>{recipe.time}</span>
                        </div>

                        <button
                          className={css.BiTrash__btn}
                          type="button"
                          onClick={() => dispatch(deleteFavorite(recipe._id))}
                        >
                          <BiTrash className={css.BiTrash} />
                        </button>
                        <Link to={`/recipe/${recipe._id}`}>
                          <button
                            className={css.btn}
                            type="button"
                            // onClick={() =>
                            //   dispatch(getFavoriteRecipeById(recipe._id))
                            // }
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
                <h2>
                  Your favorite recipes will appear here when you add them.
                </h2>
                <p>
                  Bаши любимые рецепты появятся здесь, когда вы их добавите.
                </p>
              </div>
            )}
          </div>
        </ContainerBG>
      )}
    </>
  );
};

export default Favorites;
