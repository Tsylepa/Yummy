import { ThreeCircles } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <>
      {/* <Backdrop /> */}
      <ThreeCircles
        height="120"
        width="120"
        color="var(--accent-color)"
        filter="none"
        wrapperStyle={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          filter: 'none',
          zIndex: 1000,
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </>
  );
};
