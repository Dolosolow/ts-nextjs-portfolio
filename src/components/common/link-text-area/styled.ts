import styled from "styled-components";

import { StyledProps } from "@/styles/styled";

export const LinkTextWrapper = styled.div<StyledProps>`
  align-self: flex-start;
  margin-bottom: 20px;
  width: 100%;

  .linkarea {
    &__text {
      font-size: 1.5rem;
      margin-bottom: 1rem;

      a {
        cursor: pointer;
        color: #ee0d6b;
        background-color: "#ee1f75f";
        margin: 0;
        padding: 0;
      }
    }

    &__desc {
      font-size: 1.5rem;
      line-height: 1.6;
    }
  }
`;
