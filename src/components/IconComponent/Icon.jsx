import React from 'react';
import sprite from "images/sprite.svg"

const Icon = ({ name, className, ...rest }) => {

  return (
    <svg className={`icon ${className}`} {...rest} style={ {stroke: 'currentColor'} }>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};
// name="icon-Burger_menu" width="25px" height="25px" - зразок використання

export default Icon;