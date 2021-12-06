import { CopyIcon } from "@/components/common/icons";

import { useClipboard } from "@/hooks/useClipboard";

import { StyledCopyButton } from "./styled";

export const CopyButton = ({ text }: { text: string }) => {
  const { copied, copyToClipboard } = useClipboard(text);

  return (
    <StyledCopyButton className="f-align" aria-label="copy email address">
      <div className="copy-button__text" onClick={copyToClipboard}>
        <p>{text}</p>
      </div>
      <span className="copy-button__msg" style={{ transform: `scale(${copied ? 1 : 0})` }}>
        <CopyIcon fontSize={11} />
        <span>Copied!</span>
      </span>
    </StyledCopyButton>
  );
};
