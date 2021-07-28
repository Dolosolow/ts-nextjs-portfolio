import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { Theme } from "./styles/globalStyles";

import App from "./components/app/App";

import { JRMProject } from "./types/index";

const projects: JRMProject[] = [
  {
    id: 0,
    color: "#080808",
    name: "Spotify",
    subName: "Spotify Music Streaming Clone",
    caption:
      "Cloned Music streaming service from the popular Swedish audio streaming and media service Spotify.",
    description:
      "Full-stack Monorepo clone of Spotify. Mobile app, Web app, and desktop app all connected together. sign-in capabilities, using expo-av for audio, search for music and liked/add songs to your playlist.",
    stack: [
      "Typescript",
      "ReactJS",
      "React-Native",
      "NodeJS",
      "MongoDB",
      "Socket-io",
      "Chakra-ui",
      "Graphql",
      "Postgres",
      "Typeorm",
      "Heroku",
      "Docker",
      "Digital Ocean",
    ],
    imgUrl:
      "https://images.creativemarket.com/0.1.0/ps/8725987/1820/1214/m1/fpnw/wm0/spotify-.jpg?1594828228&s=1b710ecda88c0e7d0415da75db4d6324",
    subColor: "#1DB954",
  },
  {
    id: 1,
    color: "#e65144",
    name: "FLIX",
    subName: "Movie Theater Website",
    caption:
      "Buy movie tickets in advance, find movie times, read movie reviews, and more with FLIX.",
    description:
      "A movie theater ticket booking website. With real-time seat reservations, movie scheduling, account signup, reward system, email confirmation and qrcode e-ticket.",
    stack: [
      "Html5",
      "Css3",
      "Javascript",
      "JQuery",
      "NodeJS",
      "Express",
      "MongoDB",
      "REST",
      "Socket-io",
      "Webpack",
    ],
    imgUrl: "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1627384335/images/FLIX_an2ob7.png",
    subColor: "#eee",
  },
  {
    id: 2,
    color: "#008080",
    name: "Fascio",
    subName: "Product Bundler",
    caption:
      "Fascio, a BigCommerce app, is a product bundler which takes the products selected by the store owner and creates a bundle where a customer can select from the list.",
    description:
      "App gives the store owners the ability to create a bundle, encourage customers to spend more to save more by setting required products, tiered discounts, if/then conditions, and min/max order values.",
    stack: [
      "ReactJS",
      "Typescript",
      "NodeJS",
      "Redis",
      "Express",
      "Postgres",
      "Graphql",
      "Figma",
      "Chakra-ui",
    ],
    imgUrl:
      "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1627442766/images/Fascio_fhg2rn.png",
    subColor: "#eee",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App projects={projects} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
