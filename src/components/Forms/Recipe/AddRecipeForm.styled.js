import { Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const ImageWrapper = styled.div`
  flex: 0.4;
  width: 280px;
  height: 268px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const UploadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background-color: var(--accent-color);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const Desc = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 38px;
`;

export const DescField = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--input-border-color);
`;

export const DescLabel = styled.label`
  opacity: 0.5;
  line-height: normal;
`;

export const DescSelect = styled(Select)`
  .control {
    border: none;
  }
`;

export const Input = styled(Field)`
  font: inherit;
  text-align: right;
  border: none;
  background-color: transparent;
`;

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: var(--error);
`;

export const FormTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
`;

export const IngredientsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

export const QtySelector = styled.div`
  display: flex;
  gap: 14px;
  padding: 7px 14px;
  border-radius: 18px;
  border: 1px solid var(--selector-border-color);
`;

export const IngredientContainer = styled.li`
  display: flex;
  gap: 32px;
  width: 100%;
`;

export const Ingredient = styled(Select)`
  flex: 0.7;
`;

export const Preparation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Instructions = styled(Field)`
  max-width: 505px;
  margin-top: 24px;
  padding: 10px 16px;
  font: inherit;
  resize: none;
  border: none;
  border-radius: 6px;
  background-color: var(--input-bg-color);
`;

export const InstructionsError = styled(Error)`
  bottom: -30px;
`;
