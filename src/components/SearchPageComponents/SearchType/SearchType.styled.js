import styled from "styled-components";
import Select from 'react-select';

export const SearchTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 320px) {
    margin-bottom: 42px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 90px;
  }
`;

export const SearchTypeText = styled.p`
  margin-right: 15px;

  color: #001833;
  font-family: var(--poppins-regular);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const SelectControl = styled(Select)`
  .Select__control {
    width: 146px;
    height: 34px;

    padding-left: 8px;
    padding-right: 8px;
    background-color: rgba(217, 217, 217, 0.16);

    font-family: var(--poppins-regular);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: normal;
    letter-spacing: -0.24px;
    opacity: 0.5;

    color: #000;
    border-radius: 6px 6px 6px 6px;
    border-color: black;
    border: none;
    box-shadow: none;
    cursor: pointer;

    @media screen and (min-width: 768px) {
    width: 175px;
    height: 41px;
        
    font-size: 14px;
    letter-spacing: -0.28px;
    }

    @media screen and (min-width: 1280px) {
    width: 198px;
    height: 49px;

    font-size: 14px;
    letter-spacing: -0.28px;
  }
  }

  .Select__menu {
    margin-top: 0;
    margin-bottom: 0;
    padding: 4px 8px;

    box-shadow: none;
    background-color: var(--primary-color);

    height: 76px;
    border-radius: 6px 6px 6px 6px;
    border-color: transparent;
  }

  .Select__option {
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
    font-family: var(--poppins-regular);
    font-weight: 400;
    font-size: 12px;
    line-height: 0.7;
    letter-spacing: 0.02em;
    color: grey;
    border-radius: 6px 6px 6px 6px;
    border: none;
    height: 28px;
    cursor: pointer;
    background-color: rgba(250, 250, 250, 1);

    &:hover,
    &:focus {
      background-color: rgba(217, 217, 217, 0.16);
    }

    @media screen and (min-width: 768px) {
        font-size: 14px;
    }
  }
`;
