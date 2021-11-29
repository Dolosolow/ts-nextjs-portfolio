import { SpringValue } from "react-spring";

import { Card } from "@/components/card";
import { useToggledTrails } from "@/hooks/useToggledTrail";

import { StyledCLContainer, StyledCardList } from "./styled";
import { JRMProject } from "@/types/index";

interface TrailProps {
  opacity: SpringValue<number>;
  y: SpringValue<number>;
}

export interface CLProps {
  projects: JRMProject[];
}

export const CardList = ({ projects }: CLProps) => {
  const animatedTrails = useToggledTrails(projects.length, {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    delay: 100,
    config: { duration: 700 },
  });

  const animatedCards = animatedTrails.map((props: TrailProps, idx: number) => (
    <Card key={projects[idx].id} data={projects[idx]} style={props} />
  ));

  return (
    <StyledCardList>
      <StyledCLContainer>{animatedCards}</StyledCLContainer>
    </StyledCardList>
  );
};