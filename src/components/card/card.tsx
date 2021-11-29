import { SpringValue } from "react-spring";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Link from "next/link";
import NextImage from "next/image";

import { StyledButton } from "@/components/styled-button";
import type { JRMProject } from "@/types/index";
import { StyledCard } from "./styled";

interface CProps {
  data: JRMProject;
  style: {
    opacity: any;
    y: SpringValue<number>;
  };
}

export const Card = ({ data, style: { opacity, y } }: CProps) => (
  <StyledCard
    $background={data.color}
    style={{
      opacity,
      transform: y.to((y) => `translate3d(0,${y}px,0)`),
    }}
  >
    <div className="card__content">
      <h2 className="card__title">
        <span>{data.name}</span>&nbsp;{data.subName}
      </h2>
      <p className="card__desc">{data.caption}</p>
      <div className="card__btns">
        <Link href={`/project/${data.id}`}>
          <StyledButton $background={data.color}>Details</StyledButton>
        </Link>
        <StyledButton $background={data.color} $variant="outline" style={{ paddingRight: "20px" }}>
          <span>See live site</span>
          <ExitToAppIcon fontSize="large" style={{ position: "absolute", marginLeft: "5px" }} />
        </StyledButton>
      </div>
    </div>
    <div className="card__img" style={{ backgroundColor: data.color }}>
      <div>
        <NextImage layout="fill" src={data.images.thumbnail} alt={data.name} objectFit="cover" />
      </div>
    </div>
  </StyledCard>
);
