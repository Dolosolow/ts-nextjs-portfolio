import { useState } from "react";

export const useClipboard = (textToCopy: string) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.permissions.query({ name: "clipboard-write" as PermissionName }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(textToCopy).then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        });
      }
    });
  };

  return { copied, copyToClipboard };
};
