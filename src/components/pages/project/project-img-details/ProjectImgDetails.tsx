import NextImage from "next/image";

import { ProjectBanner } from "../project-banner";
import type { JRMProject } from "@/types/index";

import { StyledProjectImg } from "../styled";

export const ProjectImgDetails = ({ project }: { project: JRMProject }) => (
  <StyledProjectImg className="f-column-center">
    {project && (
      <>
        <ProjectBanner project={project} />
        <div className="projectlayout__imgwrapper">
          <NextImage
            priority
            alt="project layout"
            src={project.images.detailed.toString()}
            placeholder="blur"
            blurDataURL={project.images.blur}
            height={project.images.height}
            width={project.images.width}
            objectFit="contain"
          />
        </div>
      </>
    )}
  </StyledProjectImg>
);
