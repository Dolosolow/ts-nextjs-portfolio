import { ProgressBar } from "./styled";
import { useToggledSprings } from "hooks/useToggledSpring";

export const TopProgressbar = () => {
  const animatedProgress = useToggledSprings({
    value: 105,
    delay: 100,
    from: { value: 0 },
    config: { duration: 600 },
  });

  const animatedProgressBar = {
    width: animatedProgress.value.to((value) => `${value}%`),
    display: animatedProgress.value.to((value) => (value === 105 ? "none" : "block")),
  };

  return <ProgressBar style={animatedProgressBar} />;
};
