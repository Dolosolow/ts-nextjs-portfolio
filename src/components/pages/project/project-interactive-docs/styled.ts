import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const MainWrapper = styled.div<StyledProps>`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const BodyWrapper = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      width: 100%;
      height: 100%;
      background-color: #fafafa;
      padding: 10rem 2rem;

      .full-description {
        width: 65%;
        font-size: 1.8rem;
        line-height: 1.65;
        color: #7e7e7e;
      }

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        padding: 6rem 2rem;

        .full-description {
          width: 80%;
          font-size: 1.6rem;
          line-height: 1.7;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        padding: 6rem 2rem;

        .full-description {
          width: 100%;
          font-size: 1.6rem;
          line-height: 1.7;
        }
      }
    `;
  }}
`;
