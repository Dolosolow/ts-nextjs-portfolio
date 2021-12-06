import { keyframes } from "styled-components";
// -------------------
// AnimateSvgPath
// -------------------
export const animateSvgPath = keyframes`
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -38226px 0px;
  }
`;
// -------------------
// slide-in-top
// -------------------
export const slideInTop = keyframes`
  0% {
  -webkit-transform: translateY(-40px);
  transform: translateY(-40px);
  /* opacity: 0; */
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    /* opacity: 1; */
  }
`;
// -------------------
// slide-in-right
// -------------------
export const slideInRight = keyframes`
  0% {
    -webkit-transform: translateX(40px);
    transform: translateX(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
`;
// -------------------
// slide-out-top
// -------------------
export const slideOutTop = keyframes`
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-40px);
    transform: translateY(-40px);
    opacity: 0;
  }
`;
// -------------------
// flip-bottom-in
// -------------------
export const XlFlipBottomIn = keyframes`
  0% { margin-top: -275px }
  5% { margin-top: -186px }
  33% { margin-top: -186px }
  38% { margin-top: -93px }
  66% { margin-top: -93px }
  71% { margin-top: 0px }
  99.99% { margin-top: 0px }
  100% { margin-top: -275px }
`;

export const LgFlipBottomIn = keyframes`
  0% { margin-top: -300px }
  5% { margin-top: -238px }
  33% { margin-top: -238px }
  38% { margin-top: -128px }
  66% { margin-top: -128px }
  71% { margin-top: -20px }
  99.99% { margin-top: -20px }
  100% { margin-top: -300px }
`;

export const MdFlipBottomIn = keyframes`
  0% { margin-top: -200px }
  5% { margin-top: -136px }
  33% { margin-top: -136px }
  38% { margin-top: -65px }
  66% { margin-top: -65px }
  71% { margin-top: 10px }
  99.99% { margin-top: 10px }
  100% { margin-top: -200px }
`;

export const SmFlipBottomIn = keyframes`
  0% { margin-top: -250px }
  5% { margin-top: -145px }
  33% { margin-top: -145px }
  38% { margin-top: -72px }
  66% { margin-top: -72px }
  71% { margin-top: 4px }
  99.99% { margin-top: 4px }
  100% { margin-top: -250px }
`;

// -------------------
// spin-clockwise
// -------------------
export const SpinClockwise = keyframes`
  to {
    transform: rotate(360deg)
  }
`;
