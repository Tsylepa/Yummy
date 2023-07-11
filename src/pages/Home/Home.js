import ChooseYourBreakfast from "components/ChooseYourBreakfast/ChooseYourBreakfast";
import PreviewCategories from "components/PreviewCategories/PreviewCategories";
import Search from "components/Search/Search";
import {BackgroundWrapper, MainTitle, Paragraph, TitleSpan} from "./Home.styled";



const Home = () => {
  return (
    <>
    <BackgroundWrapper>
    <MainTitle><TitleSpan>So</TitleSpan>Yummy</MainTitle>
    <Paragraph>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</Paragraph>
   <ChooseYourBreakfast />
    <Search />
    </BackgroundWrapper>
    <PreviewCategories />
    <div>
        <button>Other categories</button>
    </div>
    </>
  );
};

export default Home;
