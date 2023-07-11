import css from './Favorites.module.css';

import { BiTrash } from 'react-icons/bi';

const Favorites = () => {
  const title = 'Salmon Eggs Benedict';
  const info =
    ' Salmon eggs are rich in essential nutrients, low in calories,and recommended as part of a healthy diet. Including salmon in abalanced diet can help decrease the chances of heart disease,  ease inflammation, and more.';
  const studies =
    'Studies have shown a number of potential health benefits to seafood rich in omega-3 fatty acids, which include salmon eggs.';
  return (
    <div>
      <section>
        <h1>Favorites</h1>
        <ul>
          <li className={css.container}>
            <img
              className={css.img}
              src={`https://via.placeholder.com/324x318`}
              alt=""
              // height={'324px'}
              // width={'318px'}
            ></img>
            <h2 className={css.title}>{title}</h2>
            <div className={css.text}>
              <p>{info}</p>
              <p>{studies} </p>
            </div>
            <p className={css.block}>24 min </p>
            <button className={css.btn} type="button">
              See recipe
            </button>
            <button className={css.trash} type="button">
              <BiTrash style={{ height: '24px', width: '24px' }} />
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Favorites;
