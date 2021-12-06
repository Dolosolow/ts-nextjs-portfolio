import styled, { css } from "styled-components";

import { StyledProps } from "@/styles/styled";

export const StyledBlock = styled.div<StyledProps>`
  margin: 2.5rem 0;
  width: 100%;

  .styledblock__resloader {
    min-height: 16.1rem;
    overflow: hidden;
    border-radius: 1rem;
    padding: 1rem;
    position: relative;

    &-floatBtn {
      background-color: #66ad3d;
      width: max-content;
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
    }
  }
`;

export const InputGroup = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      align-items: flex-start;
      align-self: center;
      margin: 2.5rem 0;
      width: 90%;

      .inputgroup__fieldwrapper {
        justify-content: space-between;
        padding: 1rem 0;

        > p {
          width: 19.5rem;
        }

        input {
          margin: 0 4rem;
        }
      }

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        width: 100%;

        .inputgroup__fieldwrapper {
          flex-direction: column;
          align-items: flex-start;

          > p {
            width: 19.5rem;
            margin-bottom: 1rem;
          }

          input {
            margin: 1rem 0;
            min-width: 35rem;
          }
        }

        button {
          margin-top: 2.5rem;
        }
      }
    `;
  }}
`;
