import type { HTMLInputTypeAttribute, ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type Stack =
  | "Css3"
  | "Expo"
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
  | "NextJS"
  | "JQuery"
  | "NodeJS"
  | "Postgres"
  | "Redis"
  | "Redux"
  | "ReactJS"
  | "React Native"
  | "Sass"
  | "Styled-Components"
  | "Chakra-ui"
  | "Sketch"
  | "Javascript"
  | "Typescript"
  | "Typeorm"
  | "Socketio"
  | "Webpack";

export type ResponseType = "response";
export type RequestType = "request";

export type ResponseBlock = { [key: string]: any } | string | undefined;
export type RequestBlock = {
  request: string;
  operation: string;
  description: string;
  response: ResponseBlock;
  fields: { fieldName: string; type: HTMLInputTypeAttribute }[];
};

export type DocumentApiBody =
  | { link: { href: string; link_text: string; text?: string; description?: string } }
  | {
      type: ResponseType;
      codeBlock: ResponseBlock;
      title?: string;
      description?: string;
    }
  | {
      type: RequestType;
      codeBlock: RequestBlock;
      title?: string;
      description?: string;
    };

export type DocumentMobileBody =
  | string
  | { link: { href: string; link_text: string; text?: string; description?: string } }
  | Document[];

export interface Document<T> {
  title: string;
  caption: string;
  body: T extends DocumentMobileBody ? DocumentMobileBody[] : DocumentApiBody[];
  description?: string;
}

export type ProjectDocument = {
  [key: string]: {
    title: string;
    caption: string;
    flipBook: string[];
    sections: Document[];
  };
};

export interface JRMProject {
  id: string;
  color: string;
  name: string;
  subName: string;
  type: "api" | "web" | "mobile";
  github: string;
  siteUrl: string;
  caption: string;
  description: string;
  stack: Stack[];
  images: {
    height: string;
    width: string;
    thumbnail: string;
    detailed: string;
    videoSrc: string | null;
    qrImgSrc: string | null;
  };
}
