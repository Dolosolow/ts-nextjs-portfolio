import { useState } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledButtonContainer, StyledCopyButton } from "./styled";

interface CBProps {
  text: string;
}

const CopyButton = ({ text }: CBProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        });
      }
    });
  };

  return (
    <StyledButtonContainer>
      <StyledCopyButton onClick={copyToClipboard}>
        <p>{text}</p>
      </StyledCopyButton>
      <span style={{ transition: "all 0.3s ease-in-out", transform: `scale(${copied ? 1 : 0})` }}>
        <FontAwesomeIcon icon={faCopy} />
      </span>
      <span style={{ transition: "all 0.3s ease-in-out", transform: `scale(${copied ? 1 : 0})` }}>
        Copied!
      </span>
    </StyledButtonContainer>
  );
};

export default CopyButton;
