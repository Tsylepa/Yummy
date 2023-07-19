import AddRecipeForm from 'components/Forms/Recipe/AddRecipeForm';
import { MainTitle } from 'components/MainTitle/MainTitle';
import PopularRecipes from 'components/PopularRecipes';
import { Wrapper, SocialsList, Follow, FollwTitle } from './AddRecipe.styled';

const AddRecipe = () => {
  return (
    <>
      <MainTitle text="Add recipe" />
      <Wrapper>
        <AddRecipeForm />
        <div>
          <Follow>
            <FollwTitle>Follow us</FollwTitle>
            <SocialsList />
          </Follow>
          <PopularRecipes />
        </div>
      </Wrapper>
    </>
  );
};

export default AddRecipe;
