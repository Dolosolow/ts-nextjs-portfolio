import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const BannerWrapper = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      background-color: #49565c5f;
      justify-content: space-between;
      width: 40%;
      min-width: 57.5rem;
      height: 100%;
      margin: 3rem 0;
      border-radius: 2rem;
      padding: 2rem 0;
      color: white;

      p {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2.5rem;
        text-align: center;
      }

      .banner-link {
        &__name {
          opacity: 0.5;
          font-size: 1.3rem;
          margin-top: 4px;
        }

        &__container {
          height: 100%;
          justify-content: space-evenly;

          a {
            cursor: pointer;
            color: #fafafa;
            white-space: nowrap;
            width: max-content;
            transform: scale(0.9);

            span {
              margin-right: 3px;
            }
          }
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        padding: 2rem;

        p {
          font-size: 1.6rem;
        }

        .banner-link {
          &__container {
            a {
              font-size: 1.3rem;
              cursor: pointer;
              color: #fafafa;
              white-space: nowrap;
              width: max-content;
              margin-right: -15px;

              span {
                font-size: 1.4rem;
                margin-right: 3px;
              }
            }
          }
        }
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        width: 95%;
        min-width: 0;

        .banner-link {
          &__container {
            a {
              transform: scale(0.8);
            }
          }
        }
      }
    `;
  }}
`;
