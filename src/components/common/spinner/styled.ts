import styled from "styled-components";

import { SpinClockwise } from "@/styles/key-frames";
import type { StyledProps } from "@/styles/styled";

export const StyledSpinner = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.25s ease-in-out;

  .load-spinner {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: ${({ theme: { colors } }) => colors.primary};
    border-radius: 50%;
    animation: ${SpinClockwise} 1s ease-in-out infinite;
    -webkit-animation: ${SpinClockwise} 1s ease-in-out infinite;
  }
`;
