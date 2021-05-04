import styled, { css } from "styled-components";
import { animated } from "react-spring";
import { StyledProps } from "styles/styled";

const getSectionDivider = (
  position: string | undefined,
  screen: number | null = null
) => {
  switch (position) {
    case "projects":
      if (screen !== null && screen <= 950) {
        return "64.3rem";
      }
      return "68.5rem";
    case "about":
      if (screen !== null && screen <= 750) {
        return "297rem";
      }
      return "245rem";
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

export const ProgressBar = styled(animated.div)`
  background-color: #fff;
  height: 5px;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  z-index: 300;
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
