import Marquee from "react-fast-marquee";

import MarqueeImages from "./images";

interface MGProps {
  secondRow?: boolean;
}

export const MarqueeGallery = ({ secondRow = true }: MGProps) => {
  const firstSet = MarqueeImages.slice(MarqueeImages.length / 2);
  const secondSet = MarqueeImages.reverse().slice(MarqueeImages.length / 2);

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
      ? [firstSet, secondSet].map((images, index) => {
          return renderRow(images, index === 1 ? "right" : "left");
        })
      : renderRow(MarqueeImages, "left");
  };

  return (
    <div
      style={{ width: "100%", padding: "20px 0", margin: "45px 0", backgroundColor: "#393b3d56" }}
    >
      {renderContent()}
    </div>
  );
};
