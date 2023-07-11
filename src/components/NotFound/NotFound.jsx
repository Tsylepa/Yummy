import { StyledContainer } from 'components/Container/Container.styled';
import NotFoundPic from '../../images/404.svg';
import { Section } from './NotFound.styled';
import { BoldText, Image, Text, TextContainer } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Section>
      <StyledContainer>
        <Image
        src={NotFoundPic} 
        alt="Not found" />
        <TextContainer>
          <BoldText>We are sorry,</BoldText>
          <Text>but the page you were looking for can't be found..</Text>
        </TextContainer>
      </StyledContainer>
    </Section>
  );
};
