import React from "react";
import { SpringValue, useTrail } from "react-spring";
import { StyledCLContainer, StyledCardList } from "./styled";

import Card from "components/card";

interface Props {
  projects: Array<{ id: number; name: string }>;
}

interface TrailProps {
  opacity: SpringValue<number>;
  y: SpringValue<number>;
}

const CardList: React.FC<Props> = ({ projects }) => {
  const animatedTrails = useTrail(projects.length, {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    delay: 100,
    config: { duration: 700 },
  });
  const animatedCards = animatedTrails.map((props: TrailProps, idx: number) => (
    <Card
      key={projects[idx].name}
      background={projects[idx].name}
      style={props}
    />
  ));

  return (
    <StyledCardList>
      <StyledCLContainer>{animatedCards}</StyledCLContainer>
    </StyledCardList>
  );
};

export default CardList;
