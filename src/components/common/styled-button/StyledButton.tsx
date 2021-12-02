import styled, { css } from "styled-components";
import Color from "color";

import type { StyledProps } from "@/styles/styled";

export const StyledButton = styled.button<StyledProps>`
  height: 4.5rem;
  min-width: 14rem;

  :focus {
    outline: ${({ $focus }) => (!$focus ? "default" : "none")};
  }

  ${({ theme: { colors }, $background, $variant }) => {
    let color = Color($background);
    /**
     * outline-variant
     */
    if ($variant === "outline") {
      return css`
        background-color: transparent;
        border: 1px solid ${color.isDark() ? colors.white : colors.black};
        color: ${color.isDark() ? colors.white : colors.black};

        &:hover {
          background-color: ${color.isDark() ? colors.white : colors.black};
          color: ${color.isLight() ? colors.white : colors.black};
        }
      `;
    }
    /**
     * default-variant
     */
    if (+color.luminosity().toFixed(2) <= 0.01 || +color.luminosity().toFixed(2) >= 0.95) {
      color = Color(colors.primary);
    }

    return css`
      background-color: ${color.hex() === "#DD457C" ? color.hex() : color.lighten(0.3).hex()};
      color: ${color.isDark() ? colors.white : colors.black};

      &:hover {
        background-color: ${color.darken(0.1).hex()};
        color: ${Color($background).isDark() ? colors.white : colors.black};
      }
    `;
  }};
`;
