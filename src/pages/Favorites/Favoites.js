import css from './Favorites.module.css';
import { BiTrash } from 'react-icons/bi';

import { ContainerBG } from 'components/ContainerBG/ContainerBG';

const Favorites = () => {
  const sectionTitle = 'Salmon Eggs Benedict';
  const info =
    ' Salmon eggs are rich in essential nutrients, low in calories,and recommended as part of a healthy diet. Including salmon in abalanced diet can help decrease the chances of heart disease,  ease inflammation, and more.';
  const studies =
    'Studies have shown a number of potential health benefits to seafood rich in omega-3 fatty acids, which include salmon eggs.';
  return (
    <>
      <ContainerBG>
        <h1 className={css.title}>Favorites</h1>
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
      </ContainerBG>
    </>
  );
};

export default Favorites;
