export const RecipesCard = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(({ _id, title, preview }) => (
        <li key={_id.$oid}>
          <p>{title}</p>
          <img src={preview} alt={title} />
        </li>
      ))}
    </ul>
  );
};
export default RecipesCard;
