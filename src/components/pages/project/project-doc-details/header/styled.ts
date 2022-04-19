import styled, { css } from "styled-components";
import { StyledProps } from "@/styles/styled";

export const StyledHeader = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      background-color: #181b25;
      display: flex;
      justify-content: center;
      height: 60rem;
      min-height: 60rem;
      width: 100vw;

      &.mobile-pg {
        min-height: 65rem;
      }

      &.api-pg {
        min-height: 60rem;
      }

      .header-wrapper {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        max-width: 144rem;

        &__context {
          width: 56%;
          height: 100%;
          text-align: center;
          line-height: 1.2;
          transform: scale(0.9);

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
        padding-bottom: 2rem;
        padding-top: 3rem;

        &.mobile-pg {
          min-height: 118rem;
        }

        &.api-pg {
          min-height: 100rem;
        }

        .header-wrapper {
          flex-direction: column;

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
        &.mobile-pg {
          min-height: 115rem;
        }

        &.api-pg {
          min-height: 90rem;
        }

        .header-wrapper {
          &__context {
            h2 {
              font-size: 6.5rem;
              width: 85%;
            }
          }
        }
      }

      @media only screen and (max-width: ${770 / 16}em) {
        &.mobile-pg {
          min-height: 105rem;
        }

        &.api-pg {
          min-height: 90rem;
        }

        .header-wrapper {
          &__context {
            h2 {
              font-size: 4.5rem;
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
        padding-top: 0rem;

        &.api-pg {
          min-height: 76rem;
        }

        .header-wrapper {
          &__context {
            transform: scale(0.8);

            h2 {
              width: 115%;
            }

            h4 {
              width: 100%;
            }

            .btns-container {
              transform: scale(1.1);
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
