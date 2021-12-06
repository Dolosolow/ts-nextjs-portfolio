import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledDocsSection = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      width: 65%;
      border-radius: 1rem;
      overflow: hidden;

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        width: 90%;
      }

      @media only screen and (max-width: ${750 / 16}em) {
        width: 100%;
      }
    `;
  }}
`;
