import { faGithub, faCodepen, faFigma } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { CopyButton } from "@/components/copy-button";
import {
  LayoutAboutLimiter,
  StyledSection,
  StyledAboutText,
  StyledIconContainer,
  SocialLinkWrapper,
} from "./styled";

import lang from "src/lang/en.lang";

export const AboutSection = () => {
  const renderSectionText = () => {
    const paras = lang.aboutSection.context;
    return paras.split("<br>").map((text, idx) => (
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
    <LayoutAboutLimiter $flexDirection="column" $width="70%">
      <StyledSection>
        <h2>About me</h2>
        <StyledAboutText>{renderSectionText()}</StyledAboutText>
      </StyledSection>
      <StyledSection>
        <h2>Contact me</h2>
        <SocialLinkWrapper>
          <StyledIconContainer>
            <a href="/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faFigma} />
            </a>
          </StyledIconContainer>
          <CopyButton text={lang.aboutSection.email} />
        </SocialLinkWrapper>
      </StyledSection>
    </LayoutAboutLimiter>
  );
};
