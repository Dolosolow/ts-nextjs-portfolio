import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const MainApiWrapper = styled.div<StyledProps>`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const MainMobileWrapper = styled.div<StyledProps>`
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
      padding: 0 2rem 10rem 2rem;

      .full-description {
        width: 65%;
        font-size: 1.7rem;
        line-height: 1.65;
        color: #7e7e7e;
      }

      .text-block {
        width: 65%;
        margin: 1.5rem 0;
        font-size: 1.6rem;
        line-height: 1.6;
      }

      .doclink {
        &__wrapper {
          margin-bottom: 20px;
          width: 65%;
        }

        &__link {
          font-size: 1.5rem;
          margin-bottom: 1rem;

          a {
            cursor: pointer;
            color: #ee0d6b;
            background-color: "#ee1f75f";
            margin: 0;
            padding: 0;
          }
        }

        &__desc {
          font-size: 1.5rem;
          line-height: 1.6;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        padding: 0 2rem 6rem 2rem;

        .full-description {
          width: 80%;
          font-size: 1.6rem;
          line-height: 1.5;
        }

        .text-block {
          width: 80%;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        .full-description {
          width: 100%;
        }

        .text-block {
          font-size: 1.4rem;
          width: 100%;
        }
      }
    `;
  }}
`;
