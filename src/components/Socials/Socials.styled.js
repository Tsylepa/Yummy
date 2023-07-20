import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SocialLinkslist = styled.ul`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;
export const SocialLinks = styled(Link)`
  fill: var(--footer-sociallink-color);

  & svg {
    stroke: none !important;
  }
`;
