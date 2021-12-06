import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledHeadline = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      margin: 7rem 0;

      .sectionheadline {
        &__text {
          font-size: 6rem;
          font-weight: 900;
          line-height: 1;
        }

        &__subtext {
          color: #7e7e7e;
          font-size: 2rem;
          font-weight: 300;
          margin-top: 1.2rem;
        }
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        margin: 3.5rem 0;

        .sectionheadline {
          &__text {
            font-size: 3.6rem;
          }

          &__subtext {
            font-size: 1.4rem;
            margin-top: 1rem;
          }
        }
      }
    `;
  }}
`;
