import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledHeadline = styled.div<StyledProps>`
  ${() => {
    return css`
      margin: 7rem 0;

      .sectionheadline {
        &__text {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
        }

        &__subtext {
          color: #7e7e7e;
          font-size: 1.7rem;
          font-weight: 300;
          margin-top: 1.2rem;
        }
      }

      @media only screen and (max-width: ${1050 / 16}em) {
        margin: 3rem 0;

        .sectionheadline {
          &__text {
            font-size: 3.6rem;
          }

          &__subtext {
            font-size: 1.5rem;
            margin-top: 1rem;
          }
        }
      }
    `;
  }}
`;
