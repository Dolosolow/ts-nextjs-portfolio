import dynamic from "next/dynamic";

import { FlipBook } from "@/components/common/flip-book";
import { StackList } from "@/components/pages/project/project-interactive-docs/stack-list";
import type { SHProps } from "@/components/common/section-headline";
import type { PHProps } from "@/components/pages/project/project-interactive-docs/header";
import type { JRMProject } from "@/types/index";

import { MainWrapper, BodyWrapper } from "./styled";

import lang from "src/lang/en.project-lang";

const DynamicSectionHeadline = dynamic<SHProps>(() =>
  import("src/components/common/section-headline").then((mod) => mod.SectionHeadline)
);
const DynamicDocSection = dynamic<{}>(() =>
  import("src/components/pages/project/project-interactive-docs/docs-section").then(
    (mod) => mod.DocsSection
  )
);
const DynamicHeader = dynamic<PHProps>(() =>
  import("src/components/pages/project/project-interactive-docs/header").then((mod) => mod.Header)
);

export const ProjectDocument = ({ project }: { project: JRMProject }) => (
  <MainWrapper>
    <DynamicHeader
      backgroundImg={project.images.detailed.toString()}
      desc={lang.header.caption}
      xlink="/ADD-URL-LINK-TO-EACH-PROJECT-GH"
      headline={
        <h2>
          Simple Auth Server
          <p style={{ display: "inline-block" }}>Built on</p>
          <FlipBook words={lang.header.flipBook} />
        </h2>
      }
    />
    <BodyWrapper className="f-column-center">
      <DynamicSectionHeadline
        text={lang.headline.intro.title}
        subText={lang.headline.intro.caption}
        spacing={{ marginTop: "-15px" }}
      />
      <p className="full-description">{lang.genDesc}</p>
      <DynamicSectionHeadline
        text={lang.headline.techStacks.title}
        subText={lang.headline.techStacks.caption}
      />
      <StackList items={project} />
      <DynamicSectionHeadline
        text={lang.headline.examples.title}
        subText={lang.headline.examples.caption}
      />
      <DynamicDocSection />
    </BodyWrapper>
  </MainWrapper>
);
