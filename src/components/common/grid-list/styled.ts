import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const GridListWrapper = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 90rem;

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        padding-left: 4.5rem;
      }

      @media only screen and (max-width: ${750 / 16}em) {
        min-width: 61.9rem;
        width: 95%;
        padding-left: 0px;
        padding-right: 4.5rem;
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        padding: 0;
        min-width: 0;
        width: 100%;
      }
    `;
  }}
`;
