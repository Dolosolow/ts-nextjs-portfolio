export type stack =
  | "Css3"
  | "Cypress"
  | "Digital Ocean"
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
  | "Socket-io"
  | "Webpack";

export interface JRMProject {
  id: string;
  color: string;
  imgUrl: string;
  name: string;
  subName: string;
  caption: string;
  description: string;
  stack: stack[];
}
