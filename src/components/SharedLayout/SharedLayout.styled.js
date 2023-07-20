import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';

export const Main = styled.main`
  min-height: 90vh;
  padding-bottom: 100px;

  ${mediaRule('tablet', '', 'padding-bottom: 200px')}
`;
