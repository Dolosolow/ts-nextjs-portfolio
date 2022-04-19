import NextImage from "next/image";
import Link from "next/link";
import type { SpringValue } from "react-spring";

import { StyledLinkBtn } from "@/components/common/styled-link-btn";
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
    aria-label={`${data.name} detail card`}
    $background={data.color}
    style={{
      opacity,
      transform: y.to((y) => `translate3d(0,${y}px,0)`),
    }}
  >
    <div className="card__content f-column">
      <h3 role="heading" className="card__title">
        <span>{data.name}</span>&nbsp;{data.subName}
      </h3>
      <p role="note" className="card__desc" style={{ padding: "2.5rem 0 0 0" }}>
        {data.caption}
      </p>
      <div className="card__btns f">
        <Link passHref href={generateUrlQuery(data, data.type)}>
          <StyledLinkBtn
            role="link"
            aria-label={`view ${data.name} ${data.subName} details`}
            tabIndex={0}
            $background={data.color}
          >
            Details
          </StyledLinkBtn>
        </Link>
        {data.siteUrl.length > 1 && (
          <StyledLinkBtn
            role="link"
            aria-label={`View ${data.name} ${data.subName} site`}
            target="_blank"
            rel="noopener noreferrer"
            href={data.siteUrl}
            $background={data.color}
            $variant="outline"
          >
            <span style={{ marginRight: "1rem" }}>See live site</span>
            <ExternalLinkIcon fontSize={8} />
          </StyledLinkBtn>
        )}
      </div>
    </div>
    <div className="card__img" style={{ backgroundColor: data.color }}>
      <div style={{ position: "relative" }}>
        <NextImage
          role="img"
          layout="fill"
          src={data.images.thumbnail}
          alt={data.name}
          objectFit="cover"
        />
      </div>
    </div>
  </StyledCard>
);
