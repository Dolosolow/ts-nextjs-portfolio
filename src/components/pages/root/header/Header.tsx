import NextImage from "next/image";

import { AnimatedHeaderContainer } from "./AnimatedHeaderContainer";
import { LayoutLimiter, StyledHeader, AnimatedStyledTitle, AnimtedStyledText } from "./styled";

import lang from "@/lang/en.lang";

interface HProps {
  content: {
    title_first: string;
    title_second: string;
    subText: string;
    text: string;
  };
}

export const Header = (props: HProps) => {
  return (
    <StyledHeader className="f">
      <div className="header-img">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <NextImage
            priority
            src={lang.homepage.header.images.reg}
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
            {props.content.subText}
          </AnimtedStyledText>
          <AnimatedStyledTitle $light={true}>{props.content.title_first}</AnimatedStyledTitle>
          <AnimatedStyledTitle>{props.content.title_second}</AnimatedStyledTitle>
          <AnimtedStyledText $maxWidth="400" $margin="2.5rem 0">
            {props.content.text}
          </AnimtedStyledText>
        </AnimatedHeaderContainer>
        <div className="path-shifter na" />
      </LayoutLimiter>
    </StyledHeader>
  );
};
