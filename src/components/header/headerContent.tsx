import React from "react";
import { SpringValue, useTrail } from "react-spring";
import { StyledHeaderContent } from "./styled";

interface Props {
  children: React.ReactNode;
}

interface TrailsProps {
  opacity: SpringValue<number>;
  y: SpringValue<number>;
}

const HeaderContent: React.FC<Props> = ({ children }) => {
  const animatedTrails = useTrail(React.Children.count(children), {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 2300,
  });
  const animatedText = animatedTrails.map(
    ({ opacity, y }: TrailsProps, idx: number) => {
      if (children) {
        return React.cloneElement(children[idx], {
          key: idx,
          style: {
            opacity,
            transform: y.to((y) => `translate3d(0,${y}px,0)`),
          },
        });
      }
      return null;
    }
  );

  return <StyledHeaderContent>{animatedText}</StyledHeaderContent>;
};

export default HeaderContent;
