import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { PageContainer, ImageWrapper, InfoCard } from "./styled";
import { JRMProject } from "types/index";
import projects from "data/projects";

export const Details = ({ match }: RouteComponentProps<{ id: string }>) => {
  const [project, setProject] = useState<JRMProject | null>(null);

  useEffect(() => {
    const selectedPrj = projects.find((prj) => prj.id === match.params.id);
    if (selectedPrj) setProject(selectedPrj);
  }, [match.params.id]);

  return (
    <PageContainer>
      <ImageWrapper>
        <img src={project?.images.detailed} width="100%" alt="img" />
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
    </PageContainer>
  );
};
