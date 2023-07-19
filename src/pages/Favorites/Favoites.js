import css from './Favorites.module.css';
import { BiTrash } from 'react-icons/bi';
import { ContainerBG } from 'components/ContainerBG/ContainerBG';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFavoritesList } from 'redux/favorite/favoriteOperations';

const Favorites = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoritesList())
      .then(myFavoriteRecipes => setMyFavoriteRecipes(myFavoriteRecipes))
      .catch(err => console.log(err.message));
  },[]);

  const [myFavoriteRecipes, setMyFavoriteRecipes] = useState([]);
  // console.log(`favorite.js/payload:`,myFavoriteRecipes.payload)
  // console.log(`favorite.js/payload:`,myFavoriteRecipes.payload.recipes)
  // console.log(`page favorite:`,myFavoriteRecipes)

if( myFavoriteRecipes.payload !== undefined ) {
  return (
    <ContainerBG>
      <div>
        <h1 className={css.title}>My Favorites recipes</h1>
        <ul>
         {myFavoriteRecipes.payload.recipes.map(recipe => (
            // {/* {recipes.myRecipe.map(recipe => ( */}
            <li key={recipe._id} className={css.item}>
              <img className={css.img} src={recipe.preview} alt=""></img>
              <div className={css.text__container}>
                <h2 className={css.section__title}>{recipe.title}</h2>
                <div className={css.text}>
                  <p className={css.text__info}> {recipe.description}</p>
                  <p className={css.text__studies}> {recipe.instructions}</p>
                  <span className={css.block}>{recipe.time}</span>
                </div>

                <button
                  className={css.BiTrash__btn}
                  type="button"
                  // onClick={() => dispatch(deleteRecipe(recipe._id))}
                >
                  <BiTrash style={{ width: '24px', height: '24px' }} />
                </button>
                <button
                  className={css.btn}
                  type="button"
                  // onClick={() => dispatch(getRecipeById(recipe._id))}
                >
                  See recipe
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ContainerBG>
  );
} else {
  return (
    <p style={{ height: '50vw', margin: '50px' }}>
      you have not added any  favorite recipe
    </p>
  );

}
  
};

export default Favorites;

