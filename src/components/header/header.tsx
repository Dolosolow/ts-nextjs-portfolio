import NextImage from "next/image";

import { AnimatedWrapHeader } from "./AnimatedWrapHeader";
import {
  LayoutLimiter,
  StyledHeader,
  StyledTitle,
  AnimtedStyledText,
  MediaWrapper,
} from "./styled";

import lang from "src/lang/en.lang";

export const Header = () => (
  <StyledHeader>
    <MediaWrapper>
      <video autoPlay loop muted>
        <source media="(min-width: 950px)" src="/videos/bg_vid.mp4" type="video/mp4" />
      </video>
    </MediaWrapper>
    <MediaWrapper>
      <div>
        <NextImage priority src="/images/png/bg_img.png" alt="smoked backed image" layout="fill" />
      </div>
    </MediaWrapper>
    <LayoutLimiter>
      <AnimatedWrapHeader>
        <AnimtedStyledText $colored={true} $margin="0 0 0.5rem 0">
          {lang.header.subText}
        </AnimtedStyledText>
        <StyledTitle $light={true}>{lang.header.title1}</StyledTitle>
        <StyledTitle>{lang.header.title2}</StyledTitle>
        <AnimtedStyledText $maxWidth="400" $margin="2.5rem 0">
          {lang.header.context}
        </AnimtedStyledText>
      </AnimatedWrapHeader>
      <div className="path-shifter na" />
    </LayoutLimiter>
  </StyledHeader>
);
