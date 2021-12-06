import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledProjectImg = styled.div<StyledProps>`
  ${({ theme: { mediaPx, colors } }) => {
    return css`
      background-color: ${colors.rasinBlack};
      width: 100%;
      padding: 100px 0;
      height: 100%;

      .projectlayout {
        &__imgwrapper {
          width: 83%;
          position: "relative";
          height: max-content;

          img {
            border-radius: 3rem;
          }
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        .projectlayout {
          &__imgwrapper {
            width: 90%;
          }
        }
      }

      @media only screen and (max-width: ${750 / 16}em) {
        .projectlayout {
          &__imgwrapper {
            width: 100%;

            img {
              border-radius: 0;
            }
          }
        }
      }
    `;
  }}
`;
