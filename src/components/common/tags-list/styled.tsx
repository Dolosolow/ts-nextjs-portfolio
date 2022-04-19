import styled from "styled-components";

import type { StyledProps } from "@/styles/styled";

export const StyledTagList = styled.ul<StyledProps>`
  width: 100%;
  max-width: 45rem;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 30px 0;

  .tag-item {
    background-color: #fafafa1b;
    padding: 8px;
    text-align: center;
    border-radius: 100px;
    margin-right: 5px;
    margin-top: 10px;
    line-height: 1;
  }

  .tag-item p {
    font-size: 11px;
    color: #fafafa;
  }

  @media only screen and (max-width: ${750 / 16}em) {
    justify-content: center;

    .tag-item p {
      font-size: 10px;
      color: #fafafa;
    }
  }
`;
