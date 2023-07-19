import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';
import Socials from 'components/Socials';

export const Wrapper = styled.div`
  ${mediaRule('desktop', '', 'display:flex; gap:120px;')}
`;

export const Follow = styled.div`
  text-align: left;
  ${mediaRule('', 'desktop', 'display: none;')}
`;

export const FollwTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 40px;
`;

export const SocialsList = styled(Socials)`
  justify-content: start !important;
  background-color: red !important;
`;
