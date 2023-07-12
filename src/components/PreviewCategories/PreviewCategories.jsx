import { CardList, CardItem, CardImage } from "./PrewiewCategories.styled";

const obj = [
  {
    "_id": "6462a8f74c3d0ddd28897fc3",
    "category": "Seafood",
    "title": "Honey Teriyaki Salmon",
    "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
    "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
},  
  {
    "_id": "6462a8f74c3d0ddd28897fc3",
    "category": "Seafood",
    "title": "Honey Teriyaki Salmon",
    "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
    "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
}, 
{
  "_id": "6462a8f74c3d0ddd28897fc3",
  "category": "Seafood",
  "title": "Honey Teriyaki Salmon",
  "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
  "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
}, 
{
  "_id": "6462a8f74c3d0ddd28897fc3",
  "category": "Seafood",
  "title": "Honey Teriyaki Salmon",
  "description": "A Japanese-inspired dish made with salmon fillets, teriyaki sauce, honey, and sesame seeds.",
  "thumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
}, 
]



const PreviewCategories = () => {
    return (
      <>
      <CardList>
      {obj.map((item, index) => (
          <CardItem key={index}>
            <h2>{item.title}</h2>
            <div className="cardsItem">
              <CardImage src={item.thumb} alt="tasty food" />
              <div>{item.description}</div>
            </div>
            </CardItem>
        ))}
        <button>See all</button>
          </CardList>
      
      </>
    );
  };
  
  export default PreviewCategories;
  