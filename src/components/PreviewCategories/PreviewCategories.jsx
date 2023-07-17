import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMainPageData } from '../../api/mainPage';


import {Container, CardList, CardItem, CardImage, CategoryTitle, RecipeTitle, SeeAllBtn, SeeAllContainer,} from "./PreviewCategories.styled";


import obj from "../../components/PreviewCategories/obj"

       const PreviewCategories = () => {
        const [cardColumns, setCardColumns] = useState(1);

      //  const dispatch = useDispatch();
      //  const recipes = useSelector((state) => state.mainPage.recipes);

      //   useEffect(() => {
      //   dispatch(fetchMainPageData());
      //   }, [dispatch]); 
      
        useEffect(() => {
          const handleResize = () => {
            const viewportWidth = window.innerWidth;
            if (viewportWidth >= 1280) {
              setCardColumns(4);
            } else if (viewportWidth >= 768) {
              setCardColumns(2);
            } else {
              setCardColumns(1);
            }
          };
      
          window.addEventListener('resize', handleResize);
          handleResize();
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
      return (
        <Container>
      {Object.entries(obj).map(([category, recipes]) => (
        <div key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          
          <CardList>
            {recipes.slice(0, cardColumns).map((recipe) => (
              <CardItem to={`/recipe/${recipe._id}`} recipe={recipe} key={recipe._id}>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                <div></div>
                <CardImage src={recipe.thumb} alt="tasty food" />
              </CardItem>
            ))}
            
          </CardList>
          <SeeAllContainer>
            <SeeAllBtn to={`/categories/${category}`}>See all</SeeAllBtn></SeeAllContainer>
          
        </div>
      ))}
    </Container>
      );
    };


  export default PreviewCategories;
  