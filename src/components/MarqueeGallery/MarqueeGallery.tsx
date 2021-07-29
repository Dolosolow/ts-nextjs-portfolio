import { useRef } from "react";
import Marquee from "react-fast-marquee";

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { StyledMarqueeContainer } from "./styled";
import MarqueeImages from "./images";

interface MGProps {
  secondRow?: boolean;
}

const firstImgSet = MarqueeImages.slice(MarqueeImages.length / 2);
const secondImgSet = MarqueeImages.reverse().slice(MarqueeImages.length / 2);

export const MarqueeGallery = ({ secondRow = true }: MGProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const { nodeVisible } = useIntersectionObserver(nodeRef);

  const renderRow = (images: string[], direction: "left" | "right") => {
    return (
      <Marquee
        key={direction}
        direction={direction}
        gradient={false}
        style={{
          display: "flex",
          alignItems: "center",
          height: "max-content",
          marginTop: direction === "right" ? "10px" : undefined,
        }}
      >
        {images.map((image, index) => {
          return (
            <picture key={`${direction}${index}`} style={{ marginRight: 40 }}>
              <source media="(max-width: 949px)" srcSet={image} />
              <img src={image} alt="stack" width={100} />
            </picture>
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
      : renderRow(MarqueeImages, "left");
  };

  return (
    <StyledMarqueeContainer ref={nodeRef}>{nodeVisible && renderContent()}</StyledMarqueeContainer>
  );
};
