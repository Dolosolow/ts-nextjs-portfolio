import React from "react";
import NextImage from "next/image";

import { MobilePreview } from "./styled";

interface MPRProps {
  videoSrc: string;
  qrImgSrc: string;
}

export const MobileProjectPreview = ({ videoSrc, qrImgSrc }: MPRProps) => (
  <MobilePreview>
    <div className="device-img-wrapper">
      <video
        controls
        height="100%"
        width="100%"
        style={{ objectFit: "fill" }}
        poster="https://res.cloudinary.com/dnrj5jpxf/image/upload/v1647734954/images/spotify-screen-poster_wdofto.png"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
    <div className="device-qr-wrapper">
      <NextImage src={qrImgSrc} width="200px" height="200px" />
    </div>
  </MobilePreview>
);
