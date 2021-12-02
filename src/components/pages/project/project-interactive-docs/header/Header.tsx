import NextImage from "next/image";

import { ExternalLinkIcon } from "@/components/common/icons";
import { StyledButton } from "@/components/common/styled-button";
import { StyledHeader } from "./styled";

export interface PHProps {
  backgroundImg: string;
  headline: React.ReactElement;
  xlink: string;
  desc?: string;
}

export const Header = ({ backgroundImg, headline, desc, xlink }: PHProps) => (
  <StyledHeader>
    <div className="header-wrapper__context f-column-center">
      {headline}
      {desc && <h4>{desc}</h4>}
      <div className="btns-container f">
        <a href={xlink} target="_blank" aria-label="view code">
          <StyledButton $background={"#424242"}>View Code</StyledButton>
        </a>
        <StyledButton
          $background={"#121212"}
          $variant="outline"
          style={{ paddingRight: "45px", paddingLeft: "30px" }}
        >
          <span>View Live Demo</span>
          <ExternalLinkIcon
            fontSize={8}
            style={{ position: "absolute", marginLeft: "8px", marginTop: "2px" }}
          />
        </StyledButton>
      </div>
    </div>
    <div className="header-wrapper__img">
      <NextImage priority src={backgroundImg} alt="image" layout="fill" objectFit="contain" />
    </div>
  </StyledHeader>
);
