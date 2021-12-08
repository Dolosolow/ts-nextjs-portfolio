import { LinkTextArea } from "@/components/common/link-text-area";
import { ResponseView } from "./response-view";
import { RequestView } from "./request-view";
import type { DocumentApiBody } from "@/types/index";

import { StyledDocsSection } from "./styled";

export const DocsSection = ({ apiDocs }: { apiDocs: DocumentApiBody[] }) => {
  const renderDocSections = () => {
    return apiDocs.map((section, idx) => {
      if ("type" in section) {
        return section.type === "request" ? (
          <RequestView key={idx} requestData={section.codeBlock} />
        ) : (
          <ResponseView
            key={idx}
            title={section.title}
            desc={section.description}
            codeBlock={section.codeBlock}
          />
        );
      } else {
        const { href, link_text, description, text } = section.link;
        return (
          <LinkTextArea
            key={idx}
            href={href}
            linkText={link_text}
            text={text}
            description={description}
          />
        );
      }
    });
  };

  return <StyledDocsSection className="f-column">{renderDocSections()}</StyledDocsSection>;
};
