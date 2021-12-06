import { CodeBlock, atomOneDark } from "react-code-blocks";

import { ResponseViewWrapper } from "./styled";

export interface RVProps {
  codeBlock?: { [key: string]: any } | string;
  title?: string;
  desc?: string;
}

export const ResponseView = ({ codeBlock, title, desc }: RVProps) => (
  <ResponseViewWrapper>
    {title && <h2 className="responseview__title">{title}</h2>}
    {desc && (
      <div className="responseview__desc">
        <p>{desc}</p>
      </div>
    )}
    {codeBlock && (
      <div className="responseview__block">
        <CodeBlock
          style
          text={typeof codeBlock === "string" ? codeBlock : JSON.stringify(codeBlock, null, 5)}
          language="graphql"
          showLineNumbers={false}
          startingLineNumber={0}
          theme={atomOneDark}
        />
      </div>
    )}
  </ResponseViewWrapper>
);
