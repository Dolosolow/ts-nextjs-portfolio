import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const BannerWrapper = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      background-color: #49565c5f;
      justify-content: space-between;
      max-width: 83%;
      width: 93%;
      height: 12rem;
      margin: 3rem 0;
      border-radius: 2rem;
      padding: 4rem;
      color: white;

      p {
        font-size: 1.5rem;
      }

      .banner-link__container {
        a {
          cursor: pointer;
          color: #fafafa;
          white-space: nowrap;
          width: max-content;

          span {
            margin-right: 3px;
          }
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        max-width: 93%;
        padding: 2.5rem;

        p {
          font-size: 1.4rem;
        }

        .banner-link__container {
          a {
            font-size: 1.4rem;
            cursor: pointer;
            color: #fafafa;
            white-space: nowrap;
            width: max-content;

            span {
              font-size: 1.4rem;
              margin-right: 3px;
            }
          }
        }
      }
    `;
  }}
`;
