import styled, { css } from "styled-components";
import { animated } from "react-spring";

import { StyledContainer, StyledText, StyledProps } from "@/styles/styled";
import { animateSvgPath } from "@/styles/key-frames";

export const AnimtedStyledText = animated(StyledText);

export const LayoutLimiter = styled(StyledContainer)<StyledProps>`
  height: 100%;
  justify-content: space-around;

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabLand / 16}em) {
    width: 90%;
  }

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
    flex-direction: column;
    justify-content: flex-end;
    width: 90%;
  }
`;

export const StyledHeader = styled.header<StyledProps>`
  ${({ theme: { mediaPx, colors } }) => {
    return css`
      justify-content: center;
      background-color: ${colors.coolBlue};
      height: 68rem;
      position: relative;
      width: 100vw;

      .header-img {
        height: 100vh;
        width: 100vw;
        opacity: 0.1;
        transform: scale(1.05);
        position: absolute;
        top: -4.5rem;
        left: 0;
      }

      .path-shifter {
        -webkit-animation: 1500ms steps(138) 850ms forwards ${animateSvgPath};
        animation: 1500ms steps(138) 850ms forwards ${animateSvgPath};
        background-image: url("images/svg/bg-sprite.svg");
        background-repeat: no-repeat;
        height: 28.7rem;
        margin-bottom: 10rem;
        transform: scale(1.2);
        min-width: 27.7rem;
      }

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        min-height: 65vh;
        height: 62rem;

        .header-img {
          top: -6.8rem;
        }

        .path-shifter {
          transform: scale(0.9);
          margin-bottom: 20rem;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        height: 68rem;

        .header-img {
          top: -5rem;
        }

        .path-shifter {
          align-self: flex-end;
          margin-right: 8rem;
          margin-bottom: 1.5rem;
          order: 1;
          transform: scale(0.9);
        }
      }

      @media only screen and (max-width: ${750 / 16}em) {
        .header-img {
          top: -4rem;
        }
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        height: 85vh;

        .header-img {
          top: -3rem;
        }

        .path-shifter {
          animation-delay: 0;
          animation-duration: 0;
          margin-right: 0;
          transform: scale(0.6);
        }
      }

      @media only screen and (max-width: ${350 / 16}em) {
        min-height: 70rem;
        height: 50vh;

        .path-shifter {
          margin-right: -5rem;
          transform: scale(0.5);
        }
      }
    `;
  }}
`;

export const AnimatedStyledTitle = styled(animated.p)<StyledProps>`
  ${({ theme: { mediaPx, colors }, $light }) => {
    return css`
      color: ${$light ? colors.white : colors.smokedWhite};
      font-size: 6rem;
      font-weight: 900;
      letter-spacing: -3px;
      line-height: 1.2;
      white-space: nowrap;

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        line-height: 1;
      }

      @media only screen and (max-width: ${750 / 16}em) {
        font-size: 5rem;
        white-space: normal;
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        letter-spacing: -2.5px;
      }

      @media only screen and (max-width: ${350 / 16}em) {
        font-size: 4rem;
      }
    `;
  }}
`;

export const AnimatedHeader = styled(animated.div)`
  align-self: flex-end;
  margin-bottom: 5rem;
  letter-spacing: 1.6;

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
    align-self: flex-start;
    margin-top: -1.5rem;
    margin-bottom: 3rem;
    order: 2;
  }
`;
