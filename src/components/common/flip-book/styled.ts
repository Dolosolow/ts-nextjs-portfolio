import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";
import { XlFlipBottomIn, LgFlipBottomIn, MdFlipBottomIn } from "@/styles/key-frames";

export const AnimatedList = styled.div<StyledProps>`
  ${({ theme: { mediaPx, colors } }) => {
    return css`
      display: inline-block;
      height: 8.5rem;
      padding-left: 1.2rem;
      margin-bottom: -1.2rem;
      overflow: hidden;
      position: relative;

      ul {
        width: max-content;
        text-align: left;
      }

      .animated__ul {
        animation-name: ${XlFlipBottomIn};
        animation-duration: 6s;
        animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1.2);
        animation-iteration-count: infinite;

        li {
          span {
            margin-bottom: 1.5rem;
          }
        }
      }

      li {
        span {
          display: inline-block;
          color: ${colors.primary};
        }
      }

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        margin-bottom: -2rem;

        .animated__ul {
          animation-name: ${LgFlipBottomIn};
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        margin-bottom: -1.2rem;

        .animated__ul {
          animation-name: ${XlFlipBottomIn};
        }
      }

      @media only screen and (max-width: ${750 / 16}em) {
        height: 7rem;

        .animated__ul {
          animation-name: ${MdFlipBottomIn};
        }
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        ul {
          width: 100%;

          li {
            padding-top: 0.7rem;
          }
        }
      }
    `;
  }}
`;
