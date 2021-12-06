import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StackWrapper = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      width: 25%;
      font-size: 2rem;
      padding: 1.2rem 0;
      display: flex;
      justify-content: center;

      .stack {
        &__logo {
          width: 3.2rem;
          height: 3.2rem;
          margin-right: 1.2rem;
          margin-bottom: -8;
          position: relative;
        }

        &__name {
          z-index: 100;
          position: relative;
          white-space: nowrap;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        width: 33.3%;
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        padding: 1rem 0;
        width: 50%;
      }
    `;
  }}
`;
