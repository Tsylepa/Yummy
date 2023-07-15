import styled from "styled-components";

export const FormWrapper = styled.div`


  margin-left: auto;
  margin-right: auto;

  width: 295px;
  height: 53px;

  margin-bottom: 24px;

  background-color: #f0f0f0;
  clip-path: inset(0px 0px 0px 0px round 20px 50px 20px 50px);


  @media screen and (min-width: 768px) {
    width: 362px;
    height: 57px;

    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    width: 510px;
    height: 70px;

    margin-bottom: 28px;
  }
`;

export const Form = styled.form`
  position: relative;

  display: flex;
  align-items: center;

  overflow: hidden;

  padding: 16px 32px;

  border: none;

  background-color: #fff;
  clip-path: inset(1px 1px 1px 1px round 20px 50px 20px 50px);

  @media screen and (min-width: 320px) {
    width: 295px;
    height: 53px;

    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 57px;

    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    width: 510px;
    height: 70px;

    margin-bottom: 28px;
  }
`;

export const SearchFormField = styled.input`
  display: inline-block;
  background: transparent;

  padding-left: 4px;
  padding-right: 4px;

  width: 117px;
  height: 21px;

  font-size: 14px;
  border-color: transparent;
  outline: none;
  cursor: pointer;

  &:focus {
    background: transparent;
    background-color: transparent;
  }

  &::placeholder {
    font-family: var(--poppins-regular);
    font-weight: 400;
    font-size: 12px;
    color: #3E4462;
    line-height: normal;
    background: transparent;
    background-color: transparent;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }

  &[value] {
    font-family: var(--poppins-regular);
    font-weight: 400;
    font-size: 12px;
    color: #3E4462;;
    line-height: normal;
    background-color: transparent;

    @media screen and (min-width: 768px) {
      width: 135px;
      height: 24px;

      font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
      width: 240px;
      height: 28px;

      font-size: 16px;
    }
  }
`;

export const SearchFormButton = styled.button`

  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px 42px;

  width: 113px;
  height: 53px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  clip-path: inset(26px 0px 24px 0px round 15px 30px 15px 30px);
  
  padding: 50px 42px;

  border: none;

  background-color: var(--accent-color);
  color: var(--primary-color);

  transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--primary-color);
    color: var(--accent-color);
  }

  &:focus {
    background-color: var(--primary-color);;
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 57px;

    clip-path: inset(24px 0px 23px 0px round 15px 35px 15px 35px);
    padding: 50px 42px;
  }

  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 70px;

    clip-path: inset(24px 0px 23px 0px round 15px 45px 15px 45px);
    padding: 57px 42px;
  }
`;
