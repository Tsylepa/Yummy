const mediaRule = (min, max, styles) => {
  const screens = {
    mobile: 320,
    tablet: 768,
    desktop: 1280,
  };

  const minRule = min === '' ? '' : `and (min-width: ${screens[min]}px)`;
  const maxRule = max === '' ? '' : `and (max-width: ${screens[max] - 1}px)`;

  return `@media screen ${minRule} ${maxRule} { ${styles} }`;
};

export default mediaRule;
