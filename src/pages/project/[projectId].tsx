import type { ReactElement } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";

import Layout from "@/components/layout/Layout";
import { ProjectDocDetails } from "@/components/pages/project/project-doc-details";
import { ProjectImgDetails } from "@/components/pages/project/project-img-details";

import Projects from "@/data/projects";
import type { JRMProject } from "@/types/index";

const ProjectDetail = ({ project }: { project: JRMProject }) => {
  return project.type === "web" ? (
    <ProjectImgDetails project={project} />
  ) : (
    <ProjectDocDetails project={project} />
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
