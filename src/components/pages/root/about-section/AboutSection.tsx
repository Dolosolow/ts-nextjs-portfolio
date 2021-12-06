import React from "react";

import { Codepen, Figma, Github } from "@/components/common/icons";
import { CopyButton } from "@/components/common/copy-button";
import { StyledButton } from "@/components/common/styled-button";
import { ExternalLinkIcon } from "@/components/common/icons/ExternalLink";
import { LayoutAboutLimiter, SocialLinkWrapper } from "./styled";
import { StyledText } from "@/styles/styled";

export interface ASProps {
  id: string;
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
        <h2 className="section-content__title">About me</h2>
        <StyledText className="section-content__aboutme-text">{renderSectionText()}</StyledText>
      </div>
      <div className="section-content">
        <h2 className="section-content__title">Contact me</h2>
        <SocialLinkWrapper className="f-column">
          <div className="social-links">
            <a href="https://github.com/Dolosolow" aria-label="visit github page" target="_blank">
              <Github />
            </a>
            <a href="/" aria-label="visit codepen page" target="_blank">
              <Codepen />
            </a>
            <a href="/" aria-label="visit figma page" target="_blank">
              <Figma />
            </a>
          </div>
          <div id="resume" className="f-column" style={{ width: "max-content" }}>
            <StyledButton
              $variant="outline"
              style={{
                paddingRight: "2rem",
                margin: "1.5rem 0 1.5rem 0",
                width: "max-content",
              }}
            >
              <a
                href={props.content.resumeUrl}
                target="_blank"
                aria-label="view resume"
                style={{ color: "inherit" }}
              >
                View Resume
              </a>
              <ExternalLinkIcon
                fontSize={8}
                style={{ position: "absolute", marginLeft: "8px", marginTop: "2px" }}
              />
            </StyledButton>
            <CopyButton text={props.content.email} />
          </div>
        </SocialLinkWrapper>
      </div>
    </LayoutAboutLimiter>
  );
};
