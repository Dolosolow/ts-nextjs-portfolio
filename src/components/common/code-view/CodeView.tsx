import { CodeBlock, atomOneDark } from "react-code-blocks";

import { StyledCodeView } from "./styled";

export interface CVProps {
  codeBlock: { [key: string]: any } | string;
  title?: string;
  desc?: string;
}

export const CodeView = ({ codeBlock, title, desc }: CVProps) => (
  <StyledCodeView>
    {title && <h2 className="codeview__title">{title}</h2>}
    {desc && (
      <div className="codeview__desc">
        <p>{desc}</p>
      </div>
    )}
    <div className="codeview__block">
      <CodeBlock
        text={typeof codeBlock === "string" ? codeBlock : JSON.stringify(codeBlock, null, 5)}
        language="graphql"
        showLineNumbers={false}
        startingLineNumber={0}
        theme={atomOneDark}
        style
      />
    </div>
  </StyledCodeView>
);
