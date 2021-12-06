import { ExternalLinkIcon } from "@/components/common/icons";
import type { JRMProject } from "@/types/index";

import { BannerWrapper } from "./styled";

import { StyledButton } from "@/components/common/styled-button";

export const ProjectBanner = ({ project }: { project: JRMProject }) => {
  return (
    <BannerWrapper className="f-align">
      <div>
        <p>
          {project.name} {project.subName}
        </p>
        <p style={{ opacity: "0.5", fontSize: "1.4rem", marginTop: "5px" }}>Jose R Munoz</p>
      </div>
      <div className="banner-link__container f-center">
        <a href="http://google.com" target="_blank">
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
