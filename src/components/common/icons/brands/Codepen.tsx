import { IconProps, getIconSize } from "../icons.utils";

export const Codepen = ({ color, fontSize, style, className }: IconProps) => (
  <svg
    aria-hidden="true"
    data-prefix="brand-ico"
    data-icon="codepen"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{ ...style, height: getIconSize(fontSize).height, width: getIconSize(fontSize).width }}
  >
    <path
      fill={color || "currentColor"}
      d="m502.285 159.704-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001-55.143-36.857L468 219.132v73.714z"
    />
  </svg>
);
