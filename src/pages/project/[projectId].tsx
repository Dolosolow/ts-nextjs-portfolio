import type { ReactElement } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";

import { ProjectDocument } from "@/components/pages/project/project-interactive-docs";
import { ProjectImgDocs } from "@/components/pages/project/project-img-docs";
import Layout from "@/components/layout/Layout";

import type { JRMProject } from "@/types/index";
import Projects from "@/data/projects";

const ProjectDetail = ({ project }: { project: JRMProject }) => {
  return project.isApi ? (
    <ProjectDocument project={project} />
  ) : (
    <ProjectImgDocs project={project} />
  );
};

ProjectDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = () => {
  const projects: JRMProject[] = Projects;

  const paths = projects.map((project) => ({ params: { projectId: project.id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { projectId } = context.params as { projectId: string };
  const project = Projects.find((project) => project.id === projectId);

  return { props: { project } };
};

export default ProjectDetail;
