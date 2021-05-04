import React from "react";

import HeaderContent from "./headerContent";

import BgVideo from "assets/vid/bg_vid.mp4";
import BgImage from "assets/png/bg_img.png";
import {
  LayoutLimiter,
  StyledHeader,
  StyledTitle,
  AnimtedStyledText,
} from "./styled";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <video autoPlay loop muted>
        <source media="(min-width: 950px)" src={BgVideo} type="video/mp4" />
      </video>
      <picture>
        <source media="(max-width: 949px)" srcSet={BgImage} />
        <img src={BgImage} alt="smoked background" />
      </picture>
      <LayoutLimiter>
        <HeaderContent>
          <AnimtedStyledText $colored={true} $margin="0 0 0.5rem 0">
            Hi, my name is
          </AnimtedStyledText>
          <StyledTitle $light={true}>Jose Munoz</StyledTitle>
          <StyledTitle>I build things for the web</StyledTitle>
          <AnimtedStyledText $maxWidth="400" $margin="2.5rem 0">
            I'm a software engineer based in Jersey City, NJ specializing in
            building and designing high-quality websites and applications.
          </AnimtedStyledText>
        </HeaderContent>
        <div className="path-shifter" />
      </LayoutLimiter>
    </StyledHeader>
  );
};

export default Header;
