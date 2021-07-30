import styled, { css } from "styled-components";
import { StyledProps } from "styles/styled";

const getSectionDivider = (position: string | undefined, screen: number | null = null) => {
  switch (position) {
    case "projects":
      if (screen !== null && screen <= 950) {
        return "64.3rem";
      }
      return "68.5rem";
    case "skills":
      if (screen !== null && screen <= 950) {
        return "298rem";
      }
      return "242.3rem";
    case "about":
      if (screen !== null && screen <= 750) {
        return "350rem";
      }
      return "300rem";
    default:
      return 0;
  }
};

export const MainWrapper = styled.div<StyledProps>`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.rasinBlack};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  width: 100%;

  *:focus {
    outline: ${({ $enableFocus }) => ($enableFocus ? 1 : 0)};
  }
`;

export const SectionDivider = styled.span<StyledProps>`
  ${({ $name, theme: { mediaPx } }) => {
    return css`
      position: absolute;
      top: ${getSectionDivider($name)};
      z-index: 300;

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        top: ${getSectionDivider($name, mediaPx.tabPort)};
      }

      @media only screen and (max-width: ${750 / 16}em) {
        top: ${getSectionDivider($name, 750)};
      }
    `;
  }}
`;