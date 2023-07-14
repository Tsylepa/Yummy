import styled from "styled-components";

export const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 50px;

    color: #001833;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.56px;

    @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.64px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
    
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.88px;
  }
`;