import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { VscChromeClose } from 'react-icons/vsc';

export const ModalContainer = styled(Modal)`
  .modal-body {
    padding: 0;
  }
  .modal-content {
    width: 330px;
    height: 179px;
    margin: 0 auto;

    padding: 44px 24px;
    background: var(--primary-color);
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 24px;

    @media screen and (min-width: 768px) {
      width: 480px;
      height: 215px;
      padding: 50px 40px;
    }

    @media screen and (min-width: 1280px) {
      width: 500px;
      border-radius: 30px;
      padding: 50px;
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
  z-index: 10;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const CloseIcon = styled(VscChromeClose)`
  width: 20px;
  height: 20px;
  color: #23262a;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const OuestionText = styled.p`
  font-size: 14px;
  line-height: 1.29;

  text-align: center;
  letter-spacing: -0.02em;

  color: #23262a;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const LogoutBtn = styled.button`
  padding: 14px 18px;
  gap: 8px;
  width: 137px;
  border: none;
  height: 51px;

  background-color: var(--accent-color);
  color: var(--primary-color);
  border-radius: 6px;
  cursor: pointer;

  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: var(--secondary-color);
  }

  @media screen and (min-width: 768px) {
    padding: 21px 39px;
    font-size: 16px;
    line-height: 1.12;
    height: 62px;
    width: 192px;
  }
`;

export const CancelBtn = styled.button`
  padding: 14px 18px;
  gap: 8px;
  width: 137px;
  border: 1px solid;
  height: 51px;
  border-color: transparent;

  background-color: #d9d9d9;
  color: #23262a;
  border-radius: 6px;
  cursor: pointer;

  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: transparent;
    border-color: #23262a;
    color: #23262a;
  }

  @media screen and (min-width: 768px) {
    padding: 21px 39px;
    font-size: 16px;
    line-height: 1.12;
    height: 62px;
    width: 192px;
  }
`;
