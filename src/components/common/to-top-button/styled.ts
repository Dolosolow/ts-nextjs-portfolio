import styled, { css } from "styled-components";
import { StyledProps } from "@/styles/styled";

export const StyledButton = styled.button<StyledProps>`
  ${({ theme: { colors }, $isRootRoute, $show }) => {
    return css`
      background-color: ${$isRootRoute ? colors.smokedWhite : "#ededed"};
      display: ${$show ? "block" : "none"};
      height: 5rem;
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      transition: none;
      width: 5rem;
      z-index: 100;

      :hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    `;
  }}
`;
