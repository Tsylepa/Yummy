import css from './MyRecipes.module.css';
import { BiTrash } from 'react-icons/bi';
import { ContainerBG } from 'components/ContainerBG/ContainerBG';
import { useDispatch } from 'react-redux';
import {
  deleteRecipe,
  // getRecipeById,
  getRecipeList,
} from 'redux/recipes/recipesOperations';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainTitle } from 'components/MainTitle/MainTitle';
// import { addToFavorite } from 'redux/favorite/favoriteOperations';

const MyRecipes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeList())
      .then(myRecipes => setMyRecipes(myRecipes))
      .catch(err => console.log(err.message));
  }, [dispatch]);

  const [myRecipes, setMyRecipes] = useState([]);
  // console.log(`page myRecipes: `, myRecipes);
  // console.log(`page myRecipes/payload: `, myRecipes.payload);

  const handleClickBtn = () => {
    console.log(`handleCLick!`);
  };

  if (myRecipes.payload !== undefined) {
    return (
      <ContainerBG>
        <div>
          <MainTitle />
          <h1 className={css.title}>My recipes</h1>
          <ul style={{ zIndex: '1', position: 'relative' }}>
            {myRecipes.payload.recipes.map(recipe => (
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
                    onClick={() => dispatch(deleteRecipe(recipe._id))}
                  >
                    <BiTrash className={css.BiTrash} />
                  </button>

                  {/* <button
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'red',
                    }}
                    type="button"
                    onClick={() => dispatch(addToFavorite(recipe._id))}
                  ></button> */}

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
        </div>
      </ContainerBG>
    );
  } else {
    return (
      <p style={{ height: '50vw', margin: '50px' }}>
        you have not added any recipe
      </p>
    );
  }
};

export default MyRecipes;
