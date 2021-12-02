import NextImage from "next/image";

import { ExternalLinkIcon } from "@/components/common/icons";
import { StyledProjectImg } from "../styled";

import type { JRMProject } from "@/types/index";

export const ProjectImgDocs = ({ project }: { project: JRMProject }) => (
  <StyledProjectImg className="f-column-center">
    {project && (
      <>
        <div className="projectlayout__imgwrapper">
          <NextImage
            priority
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPsrQcAAZ8BDlpDGcMAAAAASUVORK5CYII="
            src={project.images.detailed.toString()}
            alt="project layout"
            height={project.images.height}
            width={project.images.width}
            objectFit="contain"
          />
        </div>
        <div className="projectlayout__cardinfo f-align">
          <div>
            <p>
              {project?.name} {project?.subName}
            </p>
            <p style={{ opacity: "0.5", fontSize: "1.4rem", marginTop: "5px" }}>Jose R Munoz</p>
          </div>
          <div className="projectlayout__cardinfo-link f-center">
            <a href="http://google.com" target="_blank">
              <span>View live site</span>
              <ExternalLinkIcon
                fontSize={8}
                style={{ position: "absolute", marginLeft: "8px", marginTop: "2px" }}
              />
            </a>
          </div>
        </div>
      </>
    )}
  </StyledProjectImg>
);
