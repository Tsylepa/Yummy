import css from './MyRecipes.module.css';
import { BiTrash } from 'react-icons/bi';

import { ContainerBG } from 'components/ContainerBG/ContainerBG';

const MyRecipes = () => {
  const sectionTitle = 'Apple Frangipan Tart';
  const info =
    'Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is filled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves.';
  const studies =
    'We threw a ladies Melbourne Cup lunch and this was our dessert. Super quick to prepare using store bought pastry.';
  return (
    <ContainerBG>
      <div>
        <h1 className={css.title}>My recipes</h1>
        <ul>
          <li className={css.item}>
            <img className={css.img} alt=""></img>

            <div className={css.text__container}>
              <h2 className={css.section__title}>{sectionTitle}</h2>
              <div className={css.text}>
                <p className={css.text__info}> {info}</p>
                <p className={css.text__studies}> {studies}</p>
                <span className={css.block}>20 min</span>
              </div>

              <button className={css.BiTrash__btn} type="button">
                <BiTrash style={{ width: '24px', height: '24px' }} />
              </button>
              <button className={css.btn} type="button">
                See recipe
              </button>
            </div>
          </li>
        </ul>
      </div>
    </ContainerBG>
  );
};

export default MyRecipes;
