import { useState, useEffect } from 'react';
import { CardList, CardItem, CardImage, CategoryTitle } from "./PrewiewCategories.styled";
import obj from "../../components/PreviewCategories/obj"

       const PreviewCategories = () => {
        const [cardColumns, setCardColumns] = useState(1);
      
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
        <div>
      {Object.entries(obj).map(([category, recipes]) => (
        <div key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <CardList>
            {recipes.slice(0, cardColumns).map((recipe) => (
              <CardItem key={recipe._id}>
                <h4>{recipe.title}</h4>
                <div></div>
                <img src={recipe.thumb} alt="tasty food" />
              </CardItem>
            ))}
          </CardList>
          <button>See all</button>
        </div>
      ))}
    </div>
      );
    };


  export default PreviewCategories;
  