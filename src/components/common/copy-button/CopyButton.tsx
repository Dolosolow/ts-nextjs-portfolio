import { CopyIcon } from "@/components/common/icons";

import { useClipboard } from "@/hooks/useClipboard";

import { StyledCopyButton } from "./styled";

export const CopyButton = ({ text }: { text: string }) => {
  const { copied, copyToClipboard } = useClipboard(text);

  return (
    <StyledCopyButton
      tabIndex={0}
      role="button"
      aria-label="copy email address"
      className="f-align"
      onClick={copyToClipboard}
    >
      <span>{text}</span>
      <CopyIcon fontSize={11} />
      <span className="copy-button__msg" style={{ transform: `scale(${copied ? 1 : 0})` }}>
        Copied!
      </span>
    </StyledCopyButton>
  );
};
