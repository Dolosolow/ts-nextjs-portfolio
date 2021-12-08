import NextImage from "next/image";
import Link from "next/link";
import type { SpringValue } from "react-spring";

import { StyledButton } from "@/components/common/styled-button";
import { ExternalLinkIcon } from "@/components/common/icons";
import { StyledCard } from "./styled";
import type { JRMProject } from "@/types/index";

interface CProps {
  data: JRMProject;
  style: {
    opacity: any;
    y: SpringValue<number>;
  };
}

const generateUrlQuery = (data: JRMProject, type: "api" | "mobile" | "web") => {
  const baseParams = "/project";

  switch (type) {
    case "api":
    case "mobile":
      return `${baseParams}/${data.id}?doc=true`;
    default:
      return `${baseParams}/${data.id}?web=true`;
  }
};

export const Card = ({ data, style: { opacity, y } }: CProps) => (
  <StyledCard
    className="f"
    $background={data.color}
    style={{
      opacity,
      transform: y.to((y) => `translate3d(0,${y}px,0)`),
    }}
  >
    <div className="card__content f-column">
      <h2 className="card__title">
        <span>{data.name}</span>&nbsp;{data.subName}
      </h2>
      <p className="card__desc">{data.caption}</p>
      <div className="card__btns f">
        <Link href={generateUrlQuery(data, data.type)}>
          <StyledButton $background={data.color}>Details</StyledButton>
        </Link>
        {data.siteUrl.length > 1 && (
          <a target="_blank" rel="noopener noreferrer" href={data.siteUrl}>
            <StyledButton
              $background={data.color}
              $variant="outline"
              style={{ paddingRight: "2rem" }}
            >
              <span>See live site</span>
              <ExternalLinkIcon
                fontSize={8}
                style={{ position: "absolute", marginLeft: "8px", marginTop: "2px" }}
              />
            </StyledButton>
          </a>
        )}
      </div>
    </div>
    <div className="card__img" style={{ backgroundColor: data.color }}>
      <div style={{ position: "relative" }}>
        <NextImage layout="fill" src={data.images.thumbnail} alt={data.name} objectFit="cover" />
      </div>
    </div>
  </StyledCard>
);
