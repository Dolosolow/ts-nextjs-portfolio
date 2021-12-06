import { ApiProjectPage } from "./api-project-page";
import { MobileProjectPage } from "./mobile-project-page";

import type { JRMProject } from "@/types/index";

export const ProjectDocDetails = ({ project }: { project: JRMProject }) => {
  return project.type === "api" ? (
    <ApiProjectPage project={project} />
  ) : (
    <MobileProjectPage project={project} />
  );
};
