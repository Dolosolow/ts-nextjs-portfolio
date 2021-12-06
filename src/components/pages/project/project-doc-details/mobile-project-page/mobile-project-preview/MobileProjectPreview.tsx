import React, { useRef, useEffect } from "react";
import NextImage from "next/image";

import { MobilePreview } from "./styled";

interface MPRProps {
  videoSrc: string;
  qrImgSrc: string;
}

export const MobileProjectPreview = ({ videoSrc, qrImgSrc }: MPRProps) => {
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    playerRef.current!.currentTime = 0;
  }, [playerRef]);

  return (
    <MobilePreview>
      <div className="device-img-wrapper">
        <video
          controls
          ref={playerRef}
          preload="metadata"
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="device-qr-wrapper">
        <NextImage src={qrImgSrc} width="200px" height="200px" />
      </div>
    </MobilePreview>
  );
};
