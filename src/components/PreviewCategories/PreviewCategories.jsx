import { useState, useEffect } from 'react';

import {Container, CardList, CardItem, CardImage, CategoryTitle, RecipeTitle, SeeAllBtn, SeeAllContainer,} from "./PreviewCategories.styled";


import obj from "../../components/PreviewCategories/obj"

       const PreviewCategories = () => {
        const [cardColumns, setCardColumns] = useState(1);
        // const [data, setData] = useState(null);

        // useEffect(() => {
        //   const fetchData = async () => {
        //     try {
        //       const response = await axios.get('https://soyummy-backend-kmc6.onrender.com/api/mainPage', {
        //         headers: {
        //           Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjAzYjE4NmQwZmJmNmE1YTEzNjM1YiIsImlhdCI6MTY4OTMzMzgxNSwiZXhwIjoxNjg5MzY5ODE1fQ.HYuzG_snye80YfkmurjDFJeBD8CvTJ0q_EKJy7KZIUY',
        //         },
        //       });
        //       setData(response.data);
        //     } catch (error) {
        //       console.error('Error fetching data:', error);
        //     }
        //   };
      
        //   fetchData();
        // }, []);
      
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
              <CardItem key={recipe._id}>
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
  