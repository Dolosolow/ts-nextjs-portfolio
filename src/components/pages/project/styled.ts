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

        &__cardinfo {
          background-color: #49565c5f;
          justify-content: space-between;
          max-width: 83%;
          width: 93%;
          height: 12rem;
          margin-top: 3rem;
          border-radius: 2rem;
          padding: 4rem;
          color: white;

          &-link {
            margin-right: 3rem;

            :hover {
              text-decoration: underline;
            }

            span {
              margin-right: 3px;
            }

            a {
              cursor: pointer;
              color: #fafafa;
              white-space: nowrap;
              width: max-content;
            }
          }
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        .projectlayout {
          &__imgwrapper {
            width: 90%;
          }

          &__cardinfo {
            max-width: 93%;
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
