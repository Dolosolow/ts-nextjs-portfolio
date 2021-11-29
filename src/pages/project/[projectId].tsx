import { GetStaticPaths, GetStaticProps } from "next";
import NextImage from "next/image";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { ImageWrapper, InfoCard, MainWrapper } from "@/styles/pages/styled-project";
import { JRMProject } from "@/types/index";
import Projects from "@/data/projects";

const ProjectDetail = ({ project }: { project: JRMProject }) => {
  return (
    <MainWrapper>
      {project && (
        <>
          <ImageWrapper>
            <NextImage
              priority
              src={project.images.detailed.toString()}
              alt="project layout"
              height="7598"
              width="1206"
            />
          </ImageWrapper>
          <InfoCard>
            <div>
              <p>
                {project?.name} {project?.subName}
              </p>
              <p style={{ opacity: "0.5", fontSize: "14px", marginTop: "5px" }}>Jose R Munoz</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <p>View live site</p>
              <ExitToAppIcon fontSize="large" style={{ marginLeft: "8px", marginTop: "2px" }} />
            </div>
          </InfoCard>
        </>
      )}
    </MainWrapper>
  );
};

export default ProjectDetail;

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
