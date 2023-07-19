import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';
// import spinach558x852 from '../../images/desktop';



const mobile = ` max-width: 375px;`;

const tablet = ` width: 768px;  padding: 0 32px; `;

const desktop = `

// padding: 0 100px;
max-width: 1440px;

// &:before {
//     content: "";
//     position: absolute;
//     z-index: -1;

//     // background-color: red;
//     // background-image: url({img}),url({img};
//     background-repeat: no-repeat;
//      transform: rotate(-149deg), rotate(-29deg);
    
//     background-position: left bottom, right bottom;;
//     // background-position: 100% 100%, 50% 50%;

  
//     background-size: 558px 852px, 438px 474px;
//     background-attachment: fixed;
    
//     //  width: 100%;
//      height: 100% ;
//      width: 1440px;
//     //  height: 100vh ;
   
//   }


`;

export const ContainerBG = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;

  ${mediaRule('mobile', 'tablet', `${mobile}`)}
  ${mediaRule('tablet', 'desktop', `${tablet}`)}
  ${mediaRule('desktop', '', `${desktop}`)}
`;
