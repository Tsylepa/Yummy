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
  border-radius: 2.2rem;

  @media screen and (min-width: 768px) {
    padding: 22px 44px;
    font-size: 16px;
  }
`;
