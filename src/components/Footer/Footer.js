import { useState } from 'react';
import { useDispatch } from 'react-redux';
import subscribe from './operations';
import { signupSchema, ValidMessage } from './validationEmail';
import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import Icon from 'components/IconComponent/Icon';

import { 
  Dolbaniylistochek,
  LogoIconStyled,
  Footerwrapper,
  Footerstyled,
  Footerbackground,
  Underfooter,
  Logo,
  LogoPlus,    
  Benefitslist,
  Li,
  NavLinkStyled,
  Footernav,
  Sudscribeheader,
  Sudscribepage,
  FormStyled,
  LabelStyled,
  FieldStyled,
  SubmitBtn,
  EmailIcon,
  SocialLinkslist,
  SocialLinks,
} from './Footer.styled'

const initialValue = {
  email: '',
};

const Footer = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    dispatch(subscribe(value));
    setIsSubmit(false);
    resetForm();
  };
  return (
    <>
      <Footerwrapper>
        <Dolbaniylistochek>
        </Dolbaniylistochek>
        
        <Footerbackground>
        
        <Footerstyled>
        <LogoPlus>
          <Logo>
            <Link to="/main">
              <LogoIconStyled />
                  So Yummy
              </Link>
          </Logo>
            <Benefitslist>
              <Li>Database of recipes that can be replenished</Li>
              <Li>Flexible search for desired and unwanted ingredients</Li>
              <Li>Ability to add your own recipes with photos</Li>
              <Li>Convenient and easy to use</Li>
            </Benefitslist>
        </LogoPlus>
            
          <Footernav>
            <NavLinkStyled to="/ingredients">Ingredients</NavLinkStyled>
            <NavLinkStyled to="/add">Add recipes</NavLinkStyled>
            <NavLinkStyled to="/recipe">My recipes</NavLinkStyled>
            <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
            <NavLinkStyled to="/shopping">Shopping list</NavLinkStyled>
          </Footernav>

        <Formik
        initialValues={initialValue}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
       {({ errors, touched }) => (     
      <FormStyled>
          <Sudscribeheader>Subscribe to our Newsletter</Sudscribeheader>
              <Sudscribepage>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
              </Sudscribepage>
            <LabelStyled htmlFor="email">
                <FieldStyled
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <EmailIcon />
                <ErrorMessage name="email" />
                {touched.email && !errors.email && isSubmit && <ValidMessage />}
              </LabelStyled>
            
            <SubmitBtn type="submit" onClick={() => setIsSubmit(true)}>
              Subscribe
            </SubmitBtn>
            </FormStyled>
      )}
        </Formik>
      </Footerstyled>
          
        <SocialLinkslist>
          <SocialLinks to="https://www.facebook.com/" target="_blank" rel="nofollow"><Icon name="icon-Facebook" width="20px" height="20px"></Icon></SocialLinks>      
          <SocialLinks to="https://www.youtube.com/" target="_blank" rel="nofollow"><Icon name="icon-Youtube" width="20px" height="20px"></Icon></SocialLinks>
          <SocialLinks to="https://twitter.com/" target="_blank" rel="nofollow"><Icon name="icon-Twitter" width="20px" height="20px"></Icon></SocialLinks>
          <SocialLinks to="https://www.instagram.com/" target="_blank" rel="nofollow"><Icon name="icon-Instagram" width="20px" height="20px"></Icon></SocialLinks>
        </SocialLinkslist>

      </Footerbackground>  

      <Underfooter>
      <p>© 2023 All Rights Reserved.</p>
      <p>Terms of Service</p>
      </Underfooter>  
        
    </Footerwrapper>
    </>
  )
};

export default Footer;