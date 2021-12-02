export interface IconProps {
  fontSize?: string | number;
  className?: string;
  color?: React.CSSProperties["color"];
  style?: Omit<React.CSSProperties, "fontSize" | "height" | "width">;
}

export const getIconSize = (size?: string | number) => {
  let iconSize = size ?? 13;

  if (typeof iconSize === "string") {
    iconSize = +iconSize.split("px")[0];
  }
  const formattedSize = `${iconSize * 2}px`;

  return { height: formattedSize, width: formattedSize };
};
