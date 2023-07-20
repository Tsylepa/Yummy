import AddRecipeForm from 'components/Forms/Recipe/AddRecipeForm';
import { MainTitle } from 'components/MainTitle/MainTitle';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import {
  Wrapper,
  Bar,
  SocialsList,
  Follow,
  FollowTitle,
} from './AddRecipe.styled';

const AddRecipe = () => {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: `1`,
      }}
    >
      <MainTitle text="Add recipe" />
      <Wrapper>
        <AddRecipeForm />
        <Bar>
          <Follow>
            <FollowTitle>Follow us</FollowTitle>
            <SocialsList />
          </Follow>
          <PopularRecipes />
        </Bar>
      </Wrapper>
    </section>
  );
};

export default AddRecipe;
