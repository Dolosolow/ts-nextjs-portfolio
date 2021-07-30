import styled from "styled-components";
import { StyledProps } from "styles/styled";

export const MainWrapper = styled.div<StyledProps>`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.rasinBlack};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  width: 100%;

  *:focus {
    outline: ${({ $enableFocus }) => ($enableFocus ? 1 : 0)};
  }
`;
