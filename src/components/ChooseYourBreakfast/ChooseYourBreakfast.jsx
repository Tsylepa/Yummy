import { Container, GreenPartOfSubtitle, Subtitle, Button } from "./ChooseYourBreakfast.styled";
import Icon from "components/IconComponent/Icon";

const ChooseYourBreakfast = () => {
    return (
      <>
      <Container>
              <Subtitle><GreenPartOfSubtitle>Delicious and healthy</GreenPartOfSubtitle> way to enjoy a variety of fresh ingredients in one satisfying meal</Subtitle>
          <Button>See recipes <Icon name="icon-See_recipe_arrow" width="18px" height="18px"/></Button> 
          </Container>
      </>
    );
  };
  
  export default ChooseYourBreakfast;