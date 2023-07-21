import { useState } from 'react';
import { useDispatch } from 'react-redux';
import subscribe from './operations';
import { signupSchema, ValidMessage } from './validationEmail';
import { Formik, ErrorMessage } from 'formik';

import {
  Dolbaniylistochek,
  LogoIconStyled,
  Footerwrapper,
  Footerstyled,
  Footerbackground,
  Underfooter,
  Logo,
  LogoPlus,
  LinkStyled,
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
} from './Footer.styled';
import Socials from 'components/Socials/Socials';

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
        <Dolbaniylistochek></Dolbaniylistochek>

        <Footerbackground>
          <Footerstyled>
            <LogoPlus>
              <Logo>
                <LinkStyled to="/main">
                  <LogoIconStyled />
                  So Yummy
                </LinkStyled>
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
              <NavLinkStyled to="/my">My recipes</NavLinkStyled>
              <NavLinkStyled to="/favorite">Favorites</NavLinkStyled>
              <NavLinkStyled to="/shopping-list">Shopping list</NavLinkStyled>
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
                  <Sudscribepage>
                    Subscribe up to our newsletter. Be in touch with latest news
                    and special offers, etc.
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
                    {touched.email && !errors.email && isSubmit && (
                      <ValidMessage />
                    )}
                  </LabelStyled>

                  <SubmitBtn type="submit" onClick={() => setIsSubmit(true)}>
                    Subscribe
                  </SubmitBtn>
                </FormStyled>
              )}
            </Formik>
          </Footerstyled>

          <Socials />
        </Footerbackground>

        <Underfooter>
          <p>© 2023 All Rights Reserved.</p>
          <p>Terms of Service</p>
        </Underfooter>
      </Footerwrapper>
    </>
  );
};

export default Footer;
