import type { SpringValue } from "react-spring";

import { Card } from "@/components/common/card";
import { StyledCLContainer, StyledCardList } from "./styled";

import { useToggledTrails } from "@/hooks/useToggledTrail";
import type { JRMProject } from "@/types/index";

interface TrailProps {
  opacity: SpringValue<number>;
  y: SpringValue<number>;
}

export interface CLProps {
  id: string;
  projects: JRMProject[];
}

export const CardList = ({ projects, id }: CLProps) => {
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
    <StyledCardList id={id} className="f-column-align">
      <StyledCLContainer>{animatedCards}</StyledCLContainer>
    </StyledCardList>
  );
};
