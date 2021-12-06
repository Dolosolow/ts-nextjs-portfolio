import { ExternalLinkIcon } from "@/components/common/icons";
import type { JRMProject } from "@/types/index";

import { BannerWrapper } from "./styled";

import { StyledButton } from "@/components/common/styled-button";

export const ProjectBanner = ({ project }: { project: JRMProject }) => {
  return (
    <BannerWrapper className="f-col-center">
      <div>
        <p>
          {project.name} {project.subName}
        </p>
      </div>
      <div className="banner-link__container f-center">
        <a href={project.github} target="_blank">
          <StyledButton $background="#121212" $variant="outline" style={{ paddingRight: "2rem" }}>
            <span>View Code</span>
            <ExternalLinkIcon
              fontSize={8}
              style={{ position: "absolute", marginLeft: "8px", marginTop: "2px" }}
            />
          </StyledButton>
        </a>
        <a href={project.siteUrl} target="_blank">
          <StyledButton $background="#121212" style={{ paddingRight: "2rem" }}>
            <span>View live site</span>
            <ExternalLinkIcon
              fontSize={8}
              style={{ position: "absolute", marginLeft: "8px", marginTop: "2px" }}
            />
          </StyledButton>
        </a>
      </div>
    </BannerWrapper>
  );
};
