import styled, { css } from "styled-components";
import { StyledProps } from "@/styles/styled";

export const MobilePreview = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: hidden;

      .device-img-wrapper {
        width: 45rem;
        min-width: 39rem;
        height: 92.5rem;
        align-self: center;
        transform: scale(0.69);
        border: 1rem solid #121212;
        border-radius: 4.8rem;
        overflow: hidden;
        position: relative;
      }

      .device-qr-wrapper {
        align-self: flex-end;
        border: 1rem solid black;
        border-radius: 1rem;
        margin-bottom: 10rem;
        margin-left: -8.5rem;
        z-index: 100;
      }

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        justify-content: center;
        align-items: flex-start;
        padding-left: 12rem;

        video::-webkit-media-controls-panel {
          position: absolute;
          bottom: 11rem;
          left: 0;
          width: 100%;
        }

        .device-img-wrapper {
          transform: scale(0.8);
        }

        .device-qr-wrapper {
          margin-left: -7rem;
          margin-bottom: 24rem;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        padding-top: 3rem;

        video::-webkit-media-controls-panel {
          position: absolute;
          bottom: 2.5rem;
          left: 0;
          width: 100%;
        }
      }

      @media only screen and (max-width: ${770 / 16}em) {
        padding-top: 3rem;
        padding-left: 0rem;

        video::-webkit-media-controls-panel {
          bottom: 6.5rem;
        }

        .device-qr-wrapper {
          display: none;
        }
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        padding-top: 25rem;

        video::-webkit-media-controls-panel {
          bottom: 17.5rem;
        }
      }
    `;
  }}
`;
