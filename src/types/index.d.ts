import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type stack =
  | "Css3"
  | "Cypress"
  | "DigitalOcean"
  | "Docker"
  | "Figma"
  | "Html5"
  | "Graphql"
  | "Express"
  | "REST"
  | "MongoDB"
  | "Heroku"
  | "Jest"
  | "JQuery"
  | "NodeJS"
  | "Postgres"
  | "Redis"
  | "Redux"
  | "ReactJS"
  | "React-Native"
  | "Sass"
  | "Styled-Components"
  | "Chakra-ui"
  | "Sketch"
  | "Javascript"
  | "Typescript"
  | "Typeorm"
  | "Socketio"
  | "Webpack";

export interface JRMProject {
  id: string;
  color: string;
  name: string;
  subName: string;
  caption: string;
  description: string;
  stack: stack[];
  isApi: boolean;
  images: {
    height: string;
    width: string;
    thumbnail: string;
    detailed: string;
  };
}
