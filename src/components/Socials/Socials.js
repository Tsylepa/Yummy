import Icon from 'components/IconComponent/Icon';
import { SocialLinks, SocialLinkslist } from './Socials.styled';

const Socials = () => {
  return (
    <SocialLinkslist>
      <SocialLinks
        to="https://www.facebook.com/"
        target="_blank"
        rel="nofollow"
      >
        <Icon name="icon-Facebook" width="20px" height="20px"></Icon>
      </SocialLinks>
      <SocialLinks to="https://www.youtube.com/" target="_blank" rel="nofollow">
        <Icon name="icon-Youtube" width="20px" height="20px"></Icon>
      </SocialLinks>
      <SocialLinks to="https://twitter.com/" target="_blank" rel="nofollow">
        <Icon name="icon-Twitter" width="20px" height="20px"></Icon>
      </SocialLinks>
      <SocialLinks
        to="https://www.instagram.com/"
        target="_blank"
        rel="nofollow"
      >
        <Icon name="icon-Instagram" width="20px" height="20px"></Icon>
      </SocialLinks>
    </SocialLinkslist>
  );
};

export default Socials;
