import styled, { css } from "styled-components";
import { animated } from "react-spring";
import Color from "color";

import type { StyledProps } from "@/styles/styled";

export const StyledCard = styled(animated.div)<StyledProps>`
  ${({ theme: { colors, mediaPx }, $background }) => {
    return css`
      height: 40rem;
      width: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      color: ${Color($background).isDark() ? `${colors.white}` : `${colors.black}`};

      &:not(:last-of-type) {
        margin-bottom: 3rem;
      }

      .card {
        &__content {
          background: ${`-ms-linear-gradient(90deg, ${$background} 0%, ${$background} 56%, rgba(40, 40, 40, 0) 95%)`};
          background: ${`-moz-linear-gradient(90deg, ${$background} 0%, ${$background} 56%, rgba(40, 40, 40, 0) 95%)`};
          background: ${`-webkit-linear-gradient(90deg, ${$background} 0%, ${$background} 56%, rgba(40, 40, 40, 0) 95%)`};
          background: ${`linear-gradient(90deg, ${$background} 0%, ${$background} 56%, rgba(40, 40, 40, 0) 95%)`};
          height: 100%;
          padding: 10rem;
          width: 100%;
          z-index: 10;
        }

        &__title {
          font-size: 2.5rem;
          font-weight: 300;

          span {
            color: ${Color($background).isDark() ? `${colors.white}` : `${colors.black}`};
            font-weight: 500;
          }
        }

        &__desc {
          font-size: 1.4rem;
          font-weight: 200;
          padding: 2.5rem 0 3.5rem 0;
          max-width: 45rem;
        }

        &__title,
        &__desc {
          user-select: none;
        }

        &__img {
          display: inline-block;
          height: 100%;
          position: absolute;
          right: 0;
          width: 60rem;
          z-index: 0;

          div {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
        }

        &__btns {
          justify-content: space-between;
          width: 34rem;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        height: 100%;

        .card {
          &__content {
            padding: 5rem;
          }

          &__img {
            opacity: 0.8;
          }
        }
      }

      @media only screen and (max-width: ${750 / 16}em) {
        flex-direction: column;
        height: 55rem;

        .card {
          &__content {
            align-items: center;
            background: ${`linear-gradient(180deg, ${$background} 0%, ${$background} 56%, rgba(40, 40, 40, 0) 90%)`};
            padding: 6rem;
            text-align: center;
          }

          &__img {
            bottom: -5px;
            left: 0;
            width: 100%;
          }

          &__btns {
            justify-content: space-evenly;
          }
        }
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        height: 50rem;

        .card {
          &__content {
            padding: 4rem 2rem 4rem 2rem;
          }

          &__title {
            font-size: 2.3rem !important;
          }

          &__desc {
            font-size: 1.4rem;
          }

          &__img {
            height: 25rem;
          }
        }
      }
    `;
  }}
`;
