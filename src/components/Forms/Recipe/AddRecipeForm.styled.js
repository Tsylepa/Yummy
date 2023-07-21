import { Form, Field } from 'formik';
import Select from 'react-select';
import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  gap: 44px;
`;

export const ImageField = styled.div`
  position: relative;
`;

export const ImageWrapper = styled.div`
  flex: 0.4;
  width: 280px;
  height: 268px;
  border-radius: 8px;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;

  ${mediaRule('desktop', '', 'width: 358px; height: 344px;')}
  img {
    width: 100%;
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  font-size: 16px;
  gap: 32px;

  ${mediaRule('tablet', '', 'flex-direction: row; align-items: start')}
`;

export const Desc = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  ${mediaRule('tablet', 'desktop', 'gap: 32px')}
  ${mediaRule('desktop', '', 'gap: 40px')}
`;

export const DescField = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--input-border-color);
`;

export const DescLabel = styled.label`
  opacity: 0.5;
  line-height: normal;
`;

export const DescSelect = styled(Select)`
  & .valueContainer {
    ${mediaRule('tablet', '', 'font-size: 14px')}
  }

  & .input {
    display: none;
  }

  & .menu-list {
    width: 100px;
    height: 85px;

    &::-webkit-scrollbar {
      background-color: transparent;
    }
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
  bottom: -2px;
  right: 0;
  font-size: 12px;
  color: var(--error);
`;

export const FormTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
`;

export const IngredientsWrapper = styled.div`
  ${mediaRule('desktop', '', 'max-width: 610px;')}
`;

export const IngredientsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 24px;

  ${mediaRule('tablet', '', 'margin-top: 32px;')}
`;

export const QtySelector = styled.div`
  display: flex;
  gap: 14px;
  padding: 4px 14px;
  font-size: 14px;
  line-height: 1.28;
  border-radius: 18px;
  border: 1px solid var(--selector-border-color);
`;

export const IngredientContainer = styled.li`
  position: relative;
  display: flex;
  align-items: start;
  gap: 14px;
`;

export const IngredientErrorWrapper = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`;

export const Ingredient = styled(Select)`
  & .valueContainer {
    ${mediaRule('tablet', 'desktop', 'font-size:14px')}
    ${mediaRule('desktop', '', 'font-size:18px')}
  }

  & .menu {
    ${mediaRule('tablet', 'desktop', 'font-size:12px')}
    ${mediaRule('desktop', '', 'font-size:14px')}
  }
`;

export const Measure = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-radius: 4px;
  background-color: var(--input-bg-color);
`;

export const MeasureInput = styled(Field)`
  background-color: transparent;
  height: 27px;
  width: 30px;
  flex: 0.5;
  padding: 0;
  text-align: right;
  border: none;
  font: inherit;
`;

export const IngredientsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  opacity: 0.3;
  color: var(--font-color);

  &:hover {
    color: var(--accent-color);
    opacity: 1;
  }
`;

export const Delete = styled(IngredientsButton)`
  width: 18px;
  height: 18px;
  align-self: center;
  margin-left: 18px;
  color: var(--font-color);
  opacity: 1;
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
  color: inherit;
  resize: none;
  border: none;
  border-radius: 6px;
  background-color: var(--input-bg-color);
`;

export const InstructionsError = styled(Error)`
  bottom: -30px;
  left: 0%;
`;
