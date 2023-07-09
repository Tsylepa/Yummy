import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 /* @font-face {
    font-family: 'PoppinsBold';
    src: url('./fonts/Poppins-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins-SemiBold';
    src: url('./fonts/Poppins-SemiBold.ttf') format('truetype');
  } */

  h1, h2, section {
    margin-top: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  a {
    text-decoration: none;
    color: currentColor;
  }
  
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
