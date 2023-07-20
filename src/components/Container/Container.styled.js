import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  ${mediaRule('mobile', 'tablet', 'width: 320px;')}
  ${mediaRule('tablet', 'desktop', 'width: 768px;  padding: 0 32px;')}
  ${mediaRule('desktop', '', 'width: 1280px;  padding: 0 20px;')}
`;
