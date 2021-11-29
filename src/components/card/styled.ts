import styled from "styled-components";
import { animated } from "react-spring";
import Color from "color";

import type { StyledProps } from "@/styles/styled";

export const StyledCard = styled(animated.div)<StyledProps>`
  background-color: #fff;
  border-radius: 1rem;
  color: ${({ $background, theme: { colors } }) =>
    Color($background).isDark() ? `${colors.white}` : `${colors.black}`};
  display: flex;
  height: 40rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media only screen and (max-width: ${750 / 16}em) {
    flex-direction: column;
    height: 55rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }

  .card__content {
    background: ${({ $background }) =>
      `linear-gradient(90deg, ${$background} 0%, ${$background} 56%, rgba(0, 212, 255, 0) 90%)`};
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10rem;
    width: 100%;
    z-index: 10;

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
      padding: 10rem 5rem;
    }

    @media only screen and (max-width: ${750 / 16}em) {
      align-items: center;
      background: ${({ $background }) =>
        `linear-gradient(180deg, ${$background} 0%, ${$background} 56%, rgba(0, 212, 255, 0) 90%)`};
      padding: 6rem;
      text-align: center;
    }
  }

  .card__title {
    font-size: 2.5rem;
    font-weight: 300;

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
      font-size: 2rem !important;
    }

    span {
      color: ${({ $background, theme: { colors } }) =>
        Color($background).isDark() ? `${colors.white}` : `${colors.black}`};
      font-weight: 500;
    }
  }

  .card__desc {
    font-size: 1.4rem;
    font-weight: 200;
    padding: 2.5rem 0 3.5rem 0;
    max-width: 45rem;

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
      font-size: 1.3rem;
    }
  }

  .card__title,
  .card__desc {
    user-select: none;
  }

  .card__img {
    display: inline-block;
    height: 100%;
    position: absolute;
    right: 0;
    width: 60rem;
    z-index: 0;

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabPort / 16}em) {
      opacity: 0.8;
    }

    @media only screen and (max-width: ${750 / 16}em) {
      bottom: -5px;
      left: 0;
      width: 100%;
    }

    @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
      height: 25rem;
    }

    div {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .card__btns {
    display: flex;
    justify-content: space-between;
    width: 30rem;

    @media only screen and (max-width: ${750 / 16}em) {
      justify-content: space-evenly;
    }
  }
`;
