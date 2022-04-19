import React from "react";

import { Github } from "@/components/common/icons";
import { CopyButton } from "@/components/common/copy-button";
import { StyledLinkBtn } from "@/components/common/styled-link-btn";
import { ExternalLinkIcon } from "@/components/common/icons/ExternalLink";
import { LayoutAboutLimiter, SocialLinkWrapper } from "./styled";
import { StyledText } from "@/styles/styled";

export interface ASProps {
  id?: string;
  content: {
    text: string;
    email: string;
    resumeUrl: string;
  };
}

export const AboutSection = (props: ASProps) => {
  const renderSectionText = () => {
    const paras = props.content.text.split("<br>");

    return paras.map((text, idx) => (
      <React.Fragment key={idx}>
        {text}
        {idx < paras.length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </React.Fragment>
    ));
  };

  return (
    <LayoutAboutLimiter id={props.id} $flexDirection="column" $width="70%">
      <div className="section-content f-align">
        <h2 role="heading" className="section-content__title">
          About me
        </h2>
        <StyledText role="article" className="section-content__aboutme-text">
          {renderSectionText()}
        </StyledText>
      </div>
      <div className="section-content">
        <h2 role="heading" className="section-content__title">
          Contact me
        </h2>
        <SocialLinkWrapper className="f-column">
          <div aria-label="social links" className="social-links">
            <a
              href="https://github.com/Dolosolow"
              role="link"
              aria-label="visit github page"
              target="_blank"
            >
              <Github />
            </a>
          </div>
          <div className="f-column" style={{ width: "max-content" }}>
            <StyledLinkBtn
              role="link"
              aria-label="view resume"
              $variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              href={props.content.resumeUrl}
              style={{ width: "max-content", margin: "1.5rem 0 1.5rem 0" }}
            >
              <span style={{ marginRight: "1rem", color: "inherit" }}>View Resume</span>
              <ExternalLinkIcon fontSize={8} />
            </StyledLinkBtn>
            <CopyButton text={props.content.email} />
          </div>
        </SocialLinkWrapper>
      </div>
    </LayoutAboutLimiter>
  );
};
