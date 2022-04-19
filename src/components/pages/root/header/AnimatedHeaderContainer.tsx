import React from "react";
import type { SpringValue } from "react-spring";

import { useToggledTrails } from "@/hooks/useToggledTrail";

import { AnimatedHeader } from "./styled";
interface HCProps {
  children: React.ReactNode;
}

interface TrailsProps {
  opacity: SpringValue<number>;
  y: SpringValue<number>;
}

export const AnimatedHeaderContainer = ({ children }: HCProps) => {
  const animatedTrails = useToggledTrails(React.Children.count(children), {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 1200,
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

  return <AnimatedHeader>{animatedText}</AnimatedHeader>;
};
