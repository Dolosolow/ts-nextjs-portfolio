import styled from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledMarqueeContainer = styled.div<StyledProps>`
  min-height: 25rem;
  max-width: 144rem;
  width: 100%;
  padding-top: 4rem;
  background-color: #393b3d56;

  .marquee {
    height: max-content;
    user-select: none;
    overflow-y: hidden;

    &__img {
      margin-right: 4rem;
      position: relative;
      height: 13.5rem;
      width: 10rem;
    }
  }

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.phone / 16}em) {
    min-height: 25rem;
    padding-top: 4rem;

    .marquee {
      &__img {
        margin-right: 2.5rem;
        height: 10.5rem;
        width: 7rem;
      }
    }
  }
`;
