import styled from 'styled-components';
import mediaRule from 'utils/mediaRule';
import Socials from 'components/Socials';

export const Wrapper = styled.div`
  z-index: 1;
  position: relative;
  ${mediaRule(
    'desktop',
    '',
    'display:flex; gap:120px; justify-content: space-between;'
  )}
`;

export const Bar = styled.div`
  flex: 1;
`;

export const Follow = styled.div`
  text-align: left;
  ${mediaRule('', 'desktop', 'display: none;')}
`;

export const FollowTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 40px;
`;

export const SocialsList = styled(Socials)`
  justify-content: start !important;
  background-color: red !important;
`;
