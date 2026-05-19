import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { SlideLink } from "./styled";

export interface SLLProps {
  href: string;
  icon: JSX.Element;
  linkText: string;
}

export const SlideLeftLink = ({ href, icon, linkText }: SLLProps) => {
  const router = useRouter();

  const [isHovered, setisHovered] = useState(false);

  return (
    <SlideLink
      role="link"
      aria-label="go back"
      className="f-align"
      onMouseEnter={() => {
        setisHovered(true);
      }}
      onMouseLeave={() => {
        setisHovered(false);
      }}
      onClick={() => {
        router.push(href);
      }}
    >
      {React.cloneElement(icon as React.ReactElement<{ style?: React.CSSProperties }>, {
        style: {
          transform: "translateX(-30px)",
        },
      })}
      <p
        style={{
          marginLeft: "10px",
          transition: "all 0.35s ease-in-out",
          transform: `${isHovered ? "translateX(0px)" : "translateX(-30px)"}`,
          opacity: `${isHovered ? 1 : 0}`,
        }}
      >
        {linkText}
      </p>
    </SlideLink>
  );
};
