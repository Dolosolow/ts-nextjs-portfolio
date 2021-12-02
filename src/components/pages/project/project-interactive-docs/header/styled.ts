import styled, { css } from "styled-components";
import { StyledProps } from "@/styles/styled";

export const StyledHeader = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      display: flex;
      justify-content: space-between;
      min-height: 60rem;
      height: 40rem;
      width: 100%;
      background-color: #181b25;
      position: relative;
      overflow: hidden;

      .header-wrapper {
        &__context {
          width: 50%;
          height: 100%;
          text-align: center;
          line-height: 1.2;

          h2 {
            color: #fff;
            font-size: 6.5rem;
            font-weight: 900;
            letter-spacing: -1.5px;
          }

          h4 {
            color: #ffffffc0;
            font-size: 1.8rem;
            margin-top: 2.3rem;
            margin-bottom: 8rem;
          }

          .btns-container {
            justify-content: space-between;
            width: 35rem;
          }
        }

        &__img {
          height: 100%;
          width: 55%;
          position: relative;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        flex-direction: column;
        height: 95rem;
        padding-bottom: 2rem;

        .header-wrapper {
          &__context {
            width: 100%;

            h2 {
              font-size: 8rem;
              width: 88%;
            }
          }

          &__img {
            width: 100%;
            height: 1000px;
            transform: scale(1.1);
          }
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        .header-wrapper {
          &__context {
            h2 {
              font-size: 6.5rem;
              width: 85%;
            }
          }
        }
      }

      @media only screen and (max-width: ${750 / 16}em) {
        .header-wrapper {
          &__context {
            h2 {
              font-size: 4.8rem;
              width: 83%;
            }

            h4 {
              font-size: 1.6rem;
              width: 85%;
            }
          }
        }
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        height: 100vh;
        padding-top: 4rem;

        .header-wrapper {
          &__context {
            h2 {
              width: 100%;
            }

            h4 {
              width: 100%;
            }
          }

          &__img {
            height: 65rem;
          }
        }
      }
    `;
  }}
`;
