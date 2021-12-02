import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledDocsSection = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      width: 65%;
      border-radius: 1rem;
      overflow: hidden;

      .docsection {
        &__wrapper {
          align-self: flex-start;
          margin-bottom: 20px;
          width: 100%;
        }

        &__desclink {
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }

        &__desc {
          font-size: 1.6rem;
          line-height: 1.6;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        width: 90%;
      }

      @media only screen and (max-width: ${750 / 16}em) {
        width: 100%;
      }
    `;
  }}
`;
