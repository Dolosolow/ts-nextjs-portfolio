import { CodeView } from "@/components/common/code-view";
import { SectionBlock } from "./section-block/SectionBlock";
import { StyledDocsSection } from "./styled";

import lang from "src/lang/en.project-lang";

export const DocsSection = () => (
  <StyledDocsSection className="f-column">
    <div className="docsection__wrapper">
      <p className="docsection__desclink">
        To keep things simple suggest use this neat{" "}
        <a
          rel="noopener"
          href="https://10minemail.com/en/"
          target="_blank"
          style={{
            cursor: "pointer",
            color: "#ee0d6b",
            backgroundColor: "#ee1f75f",
            margin: 0,
            padding: 0,
          }}
        >
          10 min email generator
        </a>
        .
      </p>
      <p className="docsection____desc">{lang.emailGeneratorDesc}</p>
    </div>
    <CodeView
      title="Error Handling"
      desc={lang.errorHandling.info}
      codeBlock={{ path: "error-path-here", message: "error-msg-here" }}
    />
    <CodeView
      desc={lang.errorHandling.response}
      codeBlock={{
        data: { register: [{ path: "error-path-here", message: "error-msg-here" }] },
      }}
    />
    <SectionBlock request="register" fields={[{ fieldName: "email", type: "email" }]} />
    <SectionBlock
      request="login"
      fields={[
        { fieldName: "email", type: "email" },
        { fieldName: "password", type: "password" },
      ]}
    />
    <SectionBlock request="forgot_password" fields={[{ fieldName: "email", type: "email" }]} />
    <SectionBlock
      request="change_password"
      fields={[
        { fieldName: "new_password", type: "password" },
        { fieldName: "key", type: "text" },
      ]}
    />
  </StyledDocsSection>
);
