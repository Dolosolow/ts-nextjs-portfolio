import { useState } from "react";
import dynamic from "next/dynamic";
import NextImage from "next/image";

import { FlipBook } from "@/components/common/flip-book";
import { DocumentWrapper } from "../document-wrapper";
import type { PHProps } from "@/components/pages/project/project-doc-details/header";
import type { JRMProject, DocumentApiBody, Document } from "@/types/index";

import { MainApiWrapper, BodyWrapper } from "../styled";

import lang from "src/lang/en-documented-projects";

const DynamicHeader = dynamic<PHProps>(() =>
  import("@/components/pages/project/project-doc-details/header").then((mod) => mod.Header)
);

export const ApiProjectPage = ({ project }: { project: JRMProject }) => {
  const [projectContent] = useState(lang[project.name]);

  const renderBodyContent = () => {
    return projectContent.sections.map((section: Document<DocumentApiBody>, idx) => (
      <DocumentWrapper key={idx} type="api" project={project} section={section} />
    ));
  };

  return (
    <MainApiWrapper>
      <DynamicHeader
        pageType={project.type as "api" | "mobile"}
        desc={projectContent.caption}
        xlink={project.github}
        liveLink={project.siteUrl}
        imgContainer={
          <NextImage
            priority
            src={project.images.detailed.toString()}
            alt="image"
            layout="fill"
            objectFit="contain"
          />
        }
        headline={
          <h2>
            {projectContent.title}
            <p style={{ display: "inline-block" }}>Built on</p>
            <FlipBook pages={projectContent.flipBook} />
          </h2>
        }
      />
      <BodyWrapper className="f-column-center">{renderBodyContent()}</BodyWrapper>
    </MainApiWrapper>
  );
};
