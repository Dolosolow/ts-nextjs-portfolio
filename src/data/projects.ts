import { JRMProject } from "@/types/index";

const projects: JRMProject[] = [
  {
    id: "0",
    color: "#3f6e8a",
    name: "Fascio",
    subName: "Product Bundler",
    isApi: false,
    caption:
      "Fascio, a BigCommerce app, can create product bundles which can be listed to sell at a storefront.",
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
    images: {
      height: "11397",
      width: "1810",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642715625/images/Fascio_hwzdcr.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642912451/images/fascio-layout_nukilh.png",
    },
  },
  {
    id: "1",
    color: "#008080",
    name: "Harbor",
    subName: "Home Services",
    isApi: false,
    caption:
      "Handyman website, view services and previous work. Receive project inquiries via email.",
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
      "Socketio",
      "Webpack",
    ],
    images: {
      height: "14499",
      width: "1810",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642715624/images/Harbor_Home_qnz7ju.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642912450/images/hhs-layout_qiwgsa.png",
    },
  },
  {
    id: "2",
    color: "#eee",
    name: "FLIX",
    subName: "Movie Theater Website",
    isApi: false,
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
      "Socketio",
      "Webpack",
    ],
    images: {
      height: "",
      width: "",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642715624/images/FLIX_zabc63.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1628018526/images/ex-img_uwifuw.png",
    },
  },
  {
    id: "3",
    color: "#121212",
    name: "Server",
    subName: "TS GraphQL Server",
    isApi: true,
    caption:
      "Boilerplate server with user management system. Register, authenticate, and send emails.",
    description:
      "Full-stack Monorepo clone of Spotify. Mobile app, Web app, and desktop app all connected together. sign-in capabilities, using expo-av for audio, search for music and liked/add songs to your playlist.",
    stack: [
      "Typescript",
      "ReactJS",
      "React-Native",
      "NodeJS",
      "MongoDB",
      "Socketio",
      "Graphql",
      "Postgres",
      "Typeorm",
      "Heroku",
      "Docker",
      "DigitalOcean",
    ],
    images: {
      height: "",
      width: "",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1640321626/images/api_illu_md_n5q35r.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1640321626/images/api_illu_md_n5q35r.png",
    },
  },
  {
    id: "4",
    color: "#1db954",
    name: "Spotify",
    subName: "Music Streaming",
    isApi: false,
    caption: "Cloned Music streaming app from the popular Swedish audio service Spotify.",
    description:
      "Full-stack Monorepo clone of Spotify. Mobile app, Web app, and desktop app all connected together. sign-in capabilities, using expo-av for audio, search for music and liked/add songs to your playlist.",
    stack: [
      "Typescript",
      "ReactJS",
      "React-Native",
      "NodeJS",
      "MongoDB",
      "Socketio",
      "Graphql",
      "Postgres",
      "Typeorm",
      "Heroku",
      "Docker",
      "DigitalOcean",
    ],
    images: {
      height: "",
      width: "",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642715624/images/spotify_2_ymjq0n.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1628018526/images/ex-img_uwifuw.png",
    },
  },
];

export default projects;
