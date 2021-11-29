import React from "react";
import { SpringValue } from "react-spring";

import { StyledHeaderContent } from "./styled";
import { useToggledTrails } from "@/hooks/useToggledTrail";

interface HCProps {
  children: React.ReactNode;
}

interface TrailsProps {
  opacity: SpringValue<number>;
  y: SpringValue<number>;
}

export const AnimatedWrapHeader = ({ children }: HCProps) => {
  const animatedTrails = useToggledTrails(React.Children.count(children), {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 2300,
  });

  const animatedText = animatedTrails.map(({ opacity, y }: TrailsProps, idx: number) => {
    const child = React.Children.toArray(children)[idx];
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        key: idx,
        style: {
          opacity,
          transform: y.to((y) => `translate3d(0,${y}px,0)`),
        },
      });
    }
    return null;
  });

  return <StyledHeaderContent>{animatedText}</StyledHeaderContent>;
};
