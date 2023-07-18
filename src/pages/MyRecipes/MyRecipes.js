import css from './MyRecipes.module.css';
import { BiTrash } from 'react-icons/bi';

import { ContainerBG } from 'components/ContainerBG/ContainerBG';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipeList } from 'redux/recipes/recipesSelectors';
import { deleteRecipe, getRecipeById } from 'redux/recipes/recipesOperations';

const MyRecipes = () => {
  const recipes = useSelector(selectRecipeList);
  // console.log(`recipes`, recipes.all.map(recipe=> recipe._id));
  console.log(recipes.all);

  const dispatch = useDispatch();
  if (recipes.all === undefined) {
    return <p style={{ height: "50vw",margin:"50px"}}>you have not added any recipe</p>;
  } else {
    return (
      <ContainerBG>
        <div>
          <h1 className={css.title}>My recipes</h1>
          <ul>
            {recipes.all.map(recipe => (
              <li key={recipe._id} className={css.item}>
                <img className={css.img} src={recipe.preview} alt=""></img>
                <div className={css.text__container}>
                  <h2 className={css.section__title}>{recipe.title}</h2>
                  <div className={css.text}>
                    <p className={css.text__info}> {recipe.description}</p>
                    <p className={css.text__studies}> {recipe.instructions}</p>
                    <span>{recipe._id}</span>
                    <span className={css.block}>{recipe.time}</span>
                  </div>

                  <button
                    className={css.BiTrash__btn}
                    type="button"
                    onClick={() => dispatch(deleteRecipe(recipe._id))}
                  >
                    <BiTrash style={{ width: '24px', height: '24px' }} />
                  </button>
                  <button className={css.btn} type="button" onClick={()=>dispatch( getRecipeById(recipe._id) )}>
                    See recipe
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ContainerBG>
    );
  }
  
};

export default MyRecipes;
