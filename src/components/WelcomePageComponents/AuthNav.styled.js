import styled from 'styled-components';
import { LinkSkewStyled } from 'components/ButtonSkew/ButtonSkew.styled';

export const AuthNavList = styled.ul`
  display: flex;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const AuthNavLink = styled(LinkSkewStyled)`
  padding: 12px 24px;
  font-size: 14px;
  line-height: 1.5;
  border: 2px solid;
  border-radius: 2.2rem;
  border-color: var(--primary-color);
  :hover,
  :focus {
    /* background-color: var(--primary-color); */
    color: var(--accent-color);
    /* border-color: var(--primary-color); */
  }

  @media screen and (min-width: 768px) {
    padding: 22px 44px;
    font-size: 16px;
    line-height: 1.3;
  }
`;

export const AuthNavLinkSignIn = styled(LinkSkewStyled)`
  padding: 10px 24px;
  background-color: var(--accent-color);
  border: 2px solid;
  border-radius: 2.2rem;

  font-size: 14px;
  line-height: 1.5;

  transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    /* background-color: var(--primary-color); */
    color: var(--accent-color);
    /* border-color: var(--primary-color); */
  }

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 16px;
    line-height: 1.3;
  }
`;
