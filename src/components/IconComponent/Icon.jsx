import React from 'react';

const Icon = ({ name, className, ...rest }) => {
  const spriteUrl = '../../images/sprite.svg';

  return (
    <svg className={`icon ${className}`} {...rest}>
      <use xlinkHref={`${spriteUrl}#${name}`} />
    </svg>
  );
};

export default Icon;