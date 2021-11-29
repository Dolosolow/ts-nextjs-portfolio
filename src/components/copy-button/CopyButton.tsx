import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useClipboard } from "@/hooks/useClipboard";

import { StyledButtonContainer, StyledCopyButton } from "./styled";

export const CopyButton = ({ text }: { text: string }) => {
  const { copied, copyToClipboard } = useClipboard(text);

  return (
    <StyledButtonContainer>
      <StyledCopyButton onClick={copyToClipboard}>
        <p>{text}</p>
      </StyledCopyButton>
      <span style={{ transform: `scale(${copied ? 1 : 0})` }}>
        <FontAwesomeIcon icon={faCopy} />
      </span>
      <span style={{ transform: `scale(${copied ? 1 : 0})` }}>Copied!</span>
    </StyledButtonContainer>
  );
};
