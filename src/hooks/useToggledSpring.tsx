import { useLayoutEffect } from "react";
import { useSpring } from "react-spring";

interface ToggleSpringProps {
  value: number;
  delay: number;
  from: { value: number };
  config: { duration: number };
}

export const useToggledSprings = (props: ToggleSpringProps) => {
  const showAnimation = window.localStorage.getItem("ela");
  const springValues = showAnimation === null ? props : { ...props, from: { value: props.value } };

  window.onbeforeunload = () => {
    window.localStorage.removeItem("ela");
  };

  useLayoutEffect(() => {
    if (!showAnimation) window.localStorage.setItem("ela", "true");
  }, [showAnimation]);

  return useSpring(springValues);
};
