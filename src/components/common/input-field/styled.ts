import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledInput = styled.input<StyledProps>`
  padding: 1rem 4rem 1rem 2rem;
  border: 1px solid #afafaf;
  border-radius: 8px;
  font-size: 1.6rem;
  min-width: 30rem;
`;

export const StyledInputWrapper = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      position: relative;
      width: max-width;

      .visibility-toggler {
        position: absolute;
        top: 8px;
        right: 5rem;
        font-size: 2.3rem;
        cursor: pointer;
        color: #bbbbbb;

        &.visible {
          color: #202020;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        .visibility-toggler {
          top: 1.7rem;
          right: 1rem;
        }
      }
    `;
  }}
`;
