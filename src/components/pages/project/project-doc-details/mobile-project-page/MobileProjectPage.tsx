import React, { useState } from "react";
import dynamic from "next/dynamic";

import { Header } from "@/components/pages/project/project-doc-details/header";
import { FlipBook } from "@/components/common/flip-book";
import { MobileProjectPreview } from "./mobile-project-preview";
import { DocumentWrapper } from "../document-wrapper";
import type { SHProps } from "@/components/common/section-headline";
import type { JRMProject, DocumentMobileBody, Document } from "@/types/index";

import { MainMobileWrapper, BodyWrapper } from "../styled";

import lang from "src/lang/en-documented-projects";

const DynamicSectionHeadline = dynamic<SHProps>(() =>
  import("src/components/common/section-headline").then((mod) => mod.SectionHeadline)
);

export const MobileProjectPage = ({ project }: { project: JRMProject }) => {
  const [projectContent] = useState(lang[project.name]);

  const renderBodyContent = () => {
    return projectContent.sections.map((section: Document<DocumentMobileBody>, idx) => (
      <DocumentWrapper key={idx} type="mobile" project={project} section={section} />
    ));
  };

  return (
    <MainMobileWrapper>
      <Header
        pageType={project.type as "api" | "mobile"}
        desc={projectContent.caption}
        xlink={project.github}
        liveLink={project.siteUrl}
        imgContainer={
          <MobileProjectPreview
            video={{ src: project.images.videoSrc!.src, poster: project.images.videoSrc!.poster }}
            qrImgSrc={project.images.qrImgSrc!}
          />
        }
        headline={
          <h2 style={{ whiteSpace: "nowrap" }}>
            {projectContent.title}
            <br />
            <p style={{ display: "inline-block" }}>Built on</p>
            <FlipBook pages={projectContent.flipBook} />
          </h2>
        }
      />
      <BodyWrapper className="f-column-center">
        {renderBodyContent()}
        <DynamicSectionHeadline
          text="Installation"
          subText="Sadly no plug and play. The following are required use the app"
        />
        <p className="text-block">
          For better performace the app performs well on an actual device but to help make the
          process quick the app was published with Expo. This way it lacks a little in performace
          because of the way Expo works but it is quicker to get up and running.
        </p>
        <p className="doclink__link">
          visit the following link to the Expo website to install Expo Go App via Apple app
          store&nbsp;
          <a rel="noopener" href="https://expo.dev/client">
            Expo Go App
          </a>
        </p>
      </BodyWrapper>
    </MainMobileWrapper>
  );
};
