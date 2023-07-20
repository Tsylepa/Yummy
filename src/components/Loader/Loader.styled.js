import styled from 'styled-components';
import { ThreeCircles } from 'react-loader-spinner';

export const Backdrop = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  z-index: 9999;
`;

export const Spinner = styled(ThreeCircles)``;
