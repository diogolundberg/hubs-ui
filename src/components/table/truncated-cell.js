import { css } from 'styled-components';

export const truncatedCell = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: ${props => props.width}px;
  width: ${props => props.width}px;
`;
