import { useLayoutEffect } from "react";
import { useTrail } from "react-spring";

interface ToggleTrailsProps {
  from: { opacity: number; y: number };
  to: { opacity: number; y: number };
  delay?: number;
  config?: { duration: number };
}

export const useToggledTrails = (length: number, props: ToggleTrailsProps) => {
  const showAnimation = window.localStorage.getItem("ela");
  const trailValues = showAnimation === null ? props : { ...props, from: props.to };

  window.onbeforeunload = () => {
    window.localStorage.removeItem("ela");
  };

  useLayoutEffect(() => {
    if (!showAnimation) window.localStorage.setItem("ela", "true");
  }, [showAnimation]);

  return useTrail(length, trailValues);
};
