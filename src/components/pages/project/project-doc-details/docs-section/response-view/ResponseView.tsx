import { CodeBlock, atomOneDark } from "react-code-blocks";

import { StyledCodeView } from "./styled";

export interface RVProps {
  codeBlock?: { [key: string]: any } | string;
  title?: string;
  desc?: string;
}

export const ResponseView = ({ codeBlock, title, desc }: RVProps) => (
  <StyledCodeView>
    {title && <h2 className="responseview__title">{title}</h2>}
    {desc && (
      <div className="responseview__desc">
        <p>{desc}</p>
      </div>
    )}
    {codeBlock && (
      <div className="responseview__block">
        <CodeBlock
          text={typeof codeBlock === "string" ? codeBlock : JSON.stringify(codeBlock, null, 5)}
          language="graphql"
          showLineNumbers={false}
          startingLineNumber={0}
          theme={atomOneDark}
          style
        />
      </div>
    )}
  </StyledCodeView>
);
