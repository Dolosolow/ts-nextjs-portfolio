import styled, { css } from "styled-components";

import type { StyledProps } from "@/styles/styled";

export const StyledFooter = styled.footer<StyledProps>`
  ${({ theme: { colors, mediaPx }, $isRootRoute }) => {
    return css`
      width: 100%;
      background-color: ${$isRootRoute ? colors.rasinBlack : "#fafafa"};

      p {
        font-size: 1rem;
        font-weight: 300;
        color: ${$isRootRoute ? colors.smokedWhite : "#121212"};
        padding: 2.5rem 0;
      }

      .footer__divider {
        width: 83%;
        border-top: ${$isRootRoute
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.12)"};
      }

      @media only screen and (max-width: ${mediaPx.phone / 16}em) {
        p {
          padding: 2rem 0;
        }
      }
    `;
  }}
`;
