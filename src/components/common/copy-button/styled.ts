import styled from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledCopyButton = styled.div<StyledProps>`
  justify-content: space-between;
  width: max-content;

  .copy-button__msg {
    font-size: 2rem;
    margin-left: 1.5rem;
    white-space: nowrap;
    transition: all 0.3s ease-in-out;
    color: ${({ theme: { colors } }) => `${colors.primary}`};

    svg {
      font-size: 2rem;
      margin: 0 1rem;
      margin-bottom: -2px;
    }
  }

  .copy-button__text {
    background-color: #42485c;
    border: 2px solid transparent;
    cursor: pointer;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    transition: all 0.25s ease-in-out;
    width: max-content;
    z-index: 10;

    :hover {
      border: 2px solid #dd457c;
    }
  }
`;
