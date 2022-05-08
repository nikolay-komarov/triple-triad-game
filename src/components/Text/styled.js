import styled, {css} from 'styled-components';

const disableStyles = css`
  opacity: ${(props) => props.disable && 0.6};
  cursor: ${(props) => props.disable && 'not-allowed'};
`;

export const StyledText = styled.p`
  background-color: transparent;
  font-weight: ${(props) => props.strong && 700};
  font-style: ${(props) => props.italic && 'italic'};
  ${disableStyles};
`;
