import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledButtonContainer, StyledCopyButton } from "./styled";
import { useClipboard } from "../../hooks/useClipboard";

interface CBProps {
  text: string;
}

export const CopyButton = ({ text }: CBProps) => {
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
