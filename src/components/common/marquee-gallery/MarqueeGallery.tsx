import Marquee from "react-fast-marquee";
import NextImage from "next/image";
import { useRef } from "react";

import { StyledMarqueeContainer } from "./styled";

import techImgs from "@/utils/tech-stack-imgs";

export interface MGProps {
  id: string;
  secondRow?: boolean;
}

const images = Object.keys(techImgs).map((key) => techImgs[key]);
const firstImgSet = images.slice(images.length / 2);
const secondImgSet = images.reverse().slice(images.length / 2);

export const MarqueeGallery = ({ id, secondRow = true }: MGProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const renderRow = (images: string[], direction: "left" | "right") => {
    return (
      <Marquee
        className="marquee f-align"
        key={direction}
        direction={direction}
        gradient={false}
        style={{ marginTop: direction === "right" ? "10px" : undefined }}
      >
        {images.map((img, idx) => {
          return (
            <div key={idx} className="marquee__img">
              <NextImage src={img} alt="stack" width="100%" height="100%" />
            </div>
          );
        })}
      </Marquee>
    );
  };

  const renderContent = () => {
    return secondRow
      ? [firstImgSet, secondImgSet].map((images, index) => {
          return renderRow(images, index === 1 ? "right" : "left");
        })
      : renderRow(images, "left");
  };

  return (
    <StyledMarqueeContainer id={id} ref={nodeRef}>
      {renderContent()}
    </StyledMarqueeContainer>
  );
};
