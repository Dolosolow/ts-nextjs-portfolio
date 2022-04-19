import styled, { css } from "styled-components";
import Color from "color";

import type { StyledProps } from "@/styles/styled";

export const StyledLinkBtn = styled.a<StyledProps>`
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: ${({ theme: { fonts } }) => fonts.primaryFont};
  font-size: 1.4rem;
  text-transform: capitalize;
  transition: all 0.25s ease-in-out;
  height: 4.5rem;
  min-width: 16rem;
  position: relative;

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
