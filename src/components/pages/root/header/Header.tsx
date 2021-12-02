import NextImage from "next/image";

import { AnimatedHeaderContainer } from "./AnimatedHeaderContainer";
import { LayoutLimiter, StyledHeader, AnimatedStyledTitle, AnimtedStyledText } from "./styled";

import lang from "src/lang/en.home-lang";

export const Header = () => (
  <StyledHeader className="f">
    <div className="header-img">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <NextImage
          priority
          src="/images/png/bg_img.png"
          alt="smoked backed image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
    <LayoutLimiter>
      <AnimatedHeaderContainer>
        <AnimtedStyledText $colored={true} $margin="0 0 0.5rem 0">
          {lang.header.subText}
        </AnimtedStyledText>
        <AnimatedStyledTitle $light={true}>{lang.header.title1}</AnimatedStyledTitle>
        <AnimatedStyledTitle>{lang.header.title2}</AnimatedStyledTitle>
        <AnimtedStyledText $maxWidth="400" $margin="2.5rem 0">
          {lang.header.context}
        </AnimtedStyledText>
      </AnimatedHeaderContainer>
      <div className="path-shifter na" />
    </LayoutLimiter>
  </StyledHeader>
);
