import styled from "styled-components";
import { animated } from "react-spring";

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
