import styled from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledCopyButton = styled.div<StyledProps>`
  justify-content: space-between;
  width: max-content;
  background-color: #42485c;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  position: relative;
  transition: all 0.25s ease-in-out;
  width: max-content;
  z-index: 10;

  :hover {
    border: 2px solid ${({ theme: { colors } }) => `${colors.primary}`};
  }

  .copy-button__msg {
    font-size: 1.6rem;
    transition: all 0.3s ease-in-out;
    position: absolute;
    right: -90px;
    color: ${({ theme: { colors } }) => `${colors.primary}`};
  }

  span {
    margin-right: 1rem;
  }
`;
