import { IconProps, getIconSize } from "./icons.utils";

export const ArrowLeftIcon = ({ color, fontSize, style, className }: IconProps) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1057 542"
    data-prefix="ico"
    data-icon="arrow-left"
    className={className}
    style={{ ...style, height: getIconSize(fontSize).height, width: getIconSize(fontSize).width }}
  >
    <path
      stroke={color || "currentColor"}
      d="M294.5 49 73 270.5m0 0L294.5 492M73 270.5h906"
      strokeWidth="85"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
