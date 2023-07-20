import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMainPageData } from '../../redux/mainPage/mainPageOperations';

import {Container, CardList, CardItem, CardImage, CategoryTitle, RecipeTitle, SeeAllBtn, SeeAllContainer,} from "./PreviewCategories.styled";




       const PreviewCategories = () => {
        const [cardColumns, setCardColumns] = useState(1);

        const dispatch = useDispatch();
        const mainPageData = useSelector((state) => state.mainPage.data);
        const isLoading = useSelector((state) => state.mainPage.isLoading);
        const error = useSelector((state) => state.mainPage.error);
      
        useEffect(() => {
          dispatch(getMainPageData());
        }, [dispatch]);
      
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

        if (isLoading) {
          return <div>Loading...</div>;
        }
      
        if (error) {
          return <div>Error: {error}</div>;
        }
      
      return (
        <Container>
      {Object.entries(mainPageData).map(([category, recipes]) => (
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
  