import styled from "styled-components";
import { atomOneDark } from "react-code-blocks";

export const StyledCodeView = styled.div`
  .codeview {
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
      background-color: ${atomOneDark.backgroundColor};
      overflow: hidden;
      border-radius: 1rem;
      padding: 1rem;
      margin-top: 1.8rem;
    }
  }
`;
