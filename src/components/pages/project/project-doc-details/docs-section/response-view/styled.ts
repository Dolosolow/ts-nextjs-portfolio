import styled, { css } from "styled-components";
import { atomOneDark } from "react-code-blocks";

export const ResponseViewWrapper = styled.div`
  ${({ theme: { mediaPx } }) => {
    return css`
      .responseview {
        &__title {
          font-size: 3.5rem;
          font-weight: 700;
          margin: 3rem 0;
        }

        &__desc {
          align-self: flex-start;
          width: 100%;
          margin: 1.5rem 0;

          p {
            font-size: 1.6rem;
            line-height: 1.6;
          }
        }

        &__block {
          font-size: 1.4rem;
          background-color: ${atomOneDark.backgroundColor};
          overflow-x: scroll;
          border-radius: 1rem;
          padding: 1rem;
          margin-top: 1.8rem;
        }
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        .responseview {
          &__title {
            font-size: 2.8rem;
            margin: 2rem 0;
          }

          &__desc {
            margin: 2rem 0;

            p {
              font-size: 1.4rem;
              line-height: 1.6;
            }
          }

          &__block {
            padding: 1rem;
            margin-top: 1.8rem;
          }
        }
      }
    `;
  }}
`;
