import styled from 'styled-components';
import imgBgMobile from '../../images/mobile/register-page/bg-welcome.jpg';
import imgBgMobileRetina from '../../images/mobile/register-page/bg-welcome-2x.jpg';
import imgBgTablet from '../../images/tablet/register-page/bg-welcome.jpg';
import imgBgTabletRetina from '../../images/tablet/register-page/bg-welcome-2x.jpg';
import imgBgDesktop from '../../images/desktop/register-page/bg-welcome.jpg';
import imgBgDesktopRetina from '../../images/desktop/register-page/bg-welcome-2x.jpg';
import { ReactComponent as LogoIcon } from '../../images/svg/logo/logo.svg';
import { StyledContainer } from 'components/Container/Container.styled';
import variables from '../../css/variables.module.css';
// import mediaRule from 'utils/mediaRule';

export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
  background-image: url(${imgBgMobile});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${imgBgMobileRetina});
    }
  }

  @media screen and (min-width: 376px) {
    background-image: url(${imgBgTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgBgTabletRetina});
      }
    }
  }

  @media screen and (min-width: 769px) {
    background-image: url(${imgBgDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgBgDesktopRetina});
      }
    }
  }
`;

export const SectionWelcome = styled.section`
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const ContainerWelcomeStyled = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 375px) {
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 12px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  font-family: ${variables['--poppins-semiBold']};
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
    padding: 7px;
    margin-bottom: 44px;
  }
`;

export const LogoIconStyled = styled(LogoIcon)`
  width: 37px;
  height: 37px;
  stroke: var(--primary-color);

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const WelcomeTitle = styled.h1`
  margin-bottom: 14px;
  font-family: ${variables['--poppins-semiBold']};
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 18px;
  }
`;

export const WelcomeDesc = styled.p`
  margin-bottom: 44px;
  max-width: 305px;

  font-size: 14px;
  line-height: 1.29;

  text-align: center;
  letter-spacing: -0.02em;

  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 540px;
    max-width: 540px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
