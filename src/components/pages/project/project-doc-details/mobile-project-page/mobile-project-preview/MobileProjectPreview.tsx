import React from "react";
import NextImage from "next/image";

import { MobilePreview } from "./styled";

interface MPRProps {
  video: { src: string; poster: string };
  qrImgSrc: string;
}

export const MobileProjectPreview = ({ video, qrImgSrc }: MPRProps) => (
  <MobilePreview>
    <div className="device-img-wrapper">
      <video
        controls
        height="100%"
        width="100%"
        style={{ objectFit: "fill" }}
        poster={video.poster}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    </div>
    {qrImgSrc.length > 1 && (
      <div className="device-qr-wrapper">
        <NextImage src={qrImgSrc} width="200px" height="200px" />
      </div>
    )}
  </MobilePreview>
);
