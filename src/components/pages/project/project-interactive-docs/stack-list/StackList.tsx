import NextImage from "next/image";
import dynamic from "next/dynamic";

import { PuzzleIcon } from "@/components/common/icons";
import { StackWrapper } from "./styled";
import type { GIProps } from "@/components/common/grid-list";

import techImgs from "@/utils/tech-stack-imgs";

import { JRMProject } from "@/types/index";

const DynamicGridList = dynamic<GIProps>(() =>
  import("src/components/common/grid-list").then((mod) => mod.GridList)
);

const StackItem = ({ item }: { item: string }) => (
  <StackWrapper className="f-align">
    <div className="stack__logo">
      {techImgs[item.toLowerCase()] ? (
        <NextImage src={techImgs[item.toLowerCase()]} alt="tech" layout="fill" />
      ) : (
        <PuzzleIcon fontSize={16} />
      )}
    </div>
    <p className="stack__name">{item}</p>
  </StackWrapper>
);

export const StackList = ({ items }: { items: JRMProject }) => (
  <DynamicGridList
    items={items.stack}
    renderItem={<StackItem item={""} />}
    renderProps={{ item: {} }}
  />
);
