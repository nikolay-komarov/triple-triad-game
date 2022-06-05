import styled, {css} from 'styled-components';
import {space} from 'styled-system';

const disableStyles = css`
  opacity: 0.6;
  cursor: not-allowed;
`;

export const StyledText = styled.p`
  ${space};
  background-color: transparent;
  font-weight: ${({strong}) => strong && 700};
  font-style: ${({italic}) => italic && 'italic'};
  ${({disable}) => disable && disableStyles}; 
`;
