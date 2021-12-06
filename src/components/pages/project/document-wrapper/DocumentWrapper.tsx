import dynamic from "next/dynamic";

import type { SHProps } from "@/components/common/section-headline";
import type { JRMProject, DocumentApiBody, DocumentMobileBody, Document } from "@/types/index";

const DynamicSectionHeadline = dynamic<SHProps>(() =>
  import("src/components/common/section-headline").then((mod) => mod.SectionHeadline)
);
const DynamicDocSection = dynamic<{ apiDocs: DocumentApiBody[] }>(() =>
  import("@/components/pages/project/project-doc-details/docs-section").then(
    (mod) => mod.DocsSection
  )
);
const DynamicStackList = dynamic<{ items: JRMProject }>(() =>
  import("@/components/pages/project/stack-list").then((mod) => mod.StackList)
);

interface DWProps {
  type: "api" | "mobile";
  project: JRMProject;
  section: Document<DocumentMobileBody> | Document<DocumentApiBody>;
}

export const DocumentWrapper = ({ type, project, section }: DWProps) => {
  const renderMobileSections = () => (
    <>
      {section.title.toLowerCase().includes("tech stack") ? (
        <DynamicStackList items={project} />
      ) : (
        section.body.map((bodyContent) => {
          if (typeof bodyContent === "string") {
            return <p className="text-block">{bodyContent}</p>;
          }
          return;
        })
      )}
    </>
  );

  const renderApiSections = () => (
    <>
      {section.title.toLowerCase().includes("tech stack") && <DynamicStackList items={project} />}
      {section.body.length > 0 && <DynamicDocSection apiDocs={section.body as DocumentApiBody[]} />}
    </>
  );

  return (
    <>
      <DynamicSectionHeadline text={section.title} subText={section.caption} />
      <p className="full-description">{section.description}</p>
      {type === "api" ? renderApiSections() : renderMobileSections()}
    </>
  );
};
