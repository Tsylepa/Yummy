import styled from 'styled-components';
import {
  ContainerAuthPageStyled,
  AuthPagesSection,
} from '../Register/Register.styled';

export const ContainerSigninPage = styled(ContainerAuthPageStyled)`
  @media screen and (min-width: 1280px) {
    bottom: 225px;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const SigninPageSection = styled(AuthPagesSection)`
  padding-bottom: 172px;
  @media screen and (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 180px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 122px;
    padding-bottom: 220px;
  }
`;
