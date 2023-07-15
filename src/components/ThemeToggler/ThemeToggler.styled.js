import styled from 'styled-components';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 61px;
  height: 27px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: var(--toggler-color);
  box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1) inset;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 3px;
    bottom: 3px;
    background: var(--toggler-circle);
    border-radius: 50%;
    filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: var(--accent-color);
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(34px);
    -ms-transform: translateX(34px);
    transform: translateX(34px);
  }
`;
