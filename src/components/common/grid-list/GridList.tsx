import React from "react";
import type { ReactElement, CSSProperties } from "react";

import { GridListWrapper } from "./styled";

export interface GIProps {
  items: any[];
  renderItem: ReactElement;
  renderProps: { [key: string]: any };
  containerStyles?: CSSProperties;
}

export const GridList = ({ items, renderItem, renderProps, containerStyles = {} }: GIProps) => (
  <GridListWrapper className="f" style={containerStyles}>
    {items.map((item: any, idx: number) =>
      React.cloneElement(renderItem, { ...renderProps, item, key: idx })
    )}
  </GridListWrapper>
);
