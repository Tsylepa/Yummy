import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { VscChromeClose } from 'react-icons/vsc';

export const ModalContainer = styled(Modal)`
  .modal-body {
    padding: 0;
  }
  .modal-content {
    width: 330px;
    position: relative;
    padding: 32px 24px;
    background: var(--primary-color);
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 24px;
    margin: 0 auto;
    color: var(--primary-dark-color);
  }

  @media screen and (min-width: 768px) {
    .modal-content {
      width: 480px;
      padding: 50px 40px;
    }
  }

  @media screen and (min-width: 1280px) {
    .modal-content {
      width: 500px;
      border-radius: 30px;
      padding: 60px 50px;
    }
  }
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const CloseIcon = styled(VscChromeClose)`
  width: 20px;
  height: 20px;
  color: var(--primary-dark-color);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
