import { useState, useEffect } from 'react';
import { CardList, CardItem, CardImage, CategoryTitle } from "./PrewiewCategories.styled";



const obj = {
  "Seafood": [
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    }
  ],
"Beaf": [
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    }
  ],
"Chicken": [
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    }
  ],
"Breakfast": [
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    },
    {
      "_id": "6462a8f74c3d0ddd28897fc3",
      "category": "Seafood",
      "title": "Honey Teriyaki Salmon",
      "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
      "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg"
    }
  ]
}


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
  