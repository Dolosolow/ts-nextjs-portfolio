import styled from "styled-components";

import { StyledProps } from "@/styles/styled";

export const BgImageWrapper = styled.div<StyledProps>`
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BgImageText = styled.div<StyledProps>`
  z-index: 100;
  margin-top: 23rem;
  margin-bottom: 30rem;
  position: absolute;
  top: -180;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.015;
  user-select: none;

  p {
    color: white;
    font-size: 350px;
    font-weight: bold;
    letter-spacing: -25px;
  }
`;

export const MessageWrapper = styled.div<StyledProps>`
  z-index: 100;
  margin-top: 30rem;
  margin-bottom: 8rem;
  user-select: none;

  p {
    color: white;
    font-size: 15px;
  }
`;

export const MainWrapper = styled.div<StyledProps>`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  *:focus {
    outline: ${({ $enableFocus }) => ($enableFocus ? 1 : 0)};
  }
`;
