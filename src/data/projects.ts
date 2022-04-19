import { JRMProject } from "@/types/index";

const projects: JRMProject[] = [
  {
    id: "0",
    color: "#ad341c",
    name: "FLIX",
    subName: "Movie Theater Website",
    type: "web",
    siteUrl: "https://flix-movie-ticket-booking-site.herokuapp.com/",
    github: "https://github.com/Dolosolow/mvb",
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
      "Heroku",
      "Babel",
      "Webpack",
    ],
    images: {
      height: "11397",
      width: "1810",
      blur: "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1648705383/images/flix-layout-blur_yxduaj.png",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642715624/images/FLIX_zabc63.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1648705369/images/flix-layout_mpfsod.png",
      videoSrc: null,
      qrImgSrc: null,
    },
  },
  {
    id: "1",
    color: "#008080",
    name: "Harbor",
    subName: "Home Services",
    type: "web",
    siteUrl: "https://harborhomeser.com/",
    github: "https://github.com/Dolosolow/harbor-home-services",
    caption:
      "Handyman website, view services and previous work. Receive project inquiries via email.",
    description:
      "A movie theater ticket booking website. With real-time seat reservations, movie scheduling, account signup, reward system, email confirmation and qrcode e-ticket.",
    stack: ["NextJS", "Chakra-ui", "Typescript", "NodeJS", "SendGrid", "REST"],
    images: {
      height: "14499",
      width: "1810",
      blur: "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1648705383/images/hhs-layout-blur_wxzmss.png",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642715624/images/Harbor_Home_qnz7ju.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1648705367/images/hhs-layout_yqzkxi.png",
      videoSrc: null,
      qrImgSrc: null,
    },
  },
  {
    id: "2",
    color: "#121212",
    name: "Server",
    subName: "TS GraphQL Server",
    type: "api",
    siteUrl: "",
    github: "https://github.com/Dolosolow/gql-typescript-server",
    caption:
      "Boilerplate server with user management system. Register, authenticate, and send emails.",
    description:
      "Full-stack Monorepo clone of Spotify. Mobile app, Web app, and desktop app all connected together. sign-in capabilities, using expo-av for audio, search for music and liked/add songs to your playlist.",
    stack: [
      "Typescript",
      "Typeorm",
      "NodeJS",
      "Express",
      "Graphql",
      "Postgres",
      "SendGrid",
      "REST",
      "Heroku",
    ],
    images: {
      height: "",
      width: "",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1640321626/images/api_illu_md_n5q35r.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1640321626/images/api_illu_md_n5q35r.png",
      videoSrc: null,
      qrImgSrc: null,
    },
  },
  {
    id: "3",
    color: "#3f6e8a",
    name: "Fascio",
    subName: "Product Bundler",
    type: "web",
    siteUrl: "https://fascio.herokuapp.com/",
    github: "https://github.com/Dolosolow/fascio-product-bundler",
    caption:
      "Fascio, a BigCommerce app, can create product bundles which can be listed to sell at a storefront.",
    description:
      "Create a bundle, encourage customers to spend more to save more by setting required products, discounts, if/then conditions, and min/max order values.",
    stack: [
      "ReactJS",
      "Typescript",
      "Typeorm",
      "NodeJS",
      "Redis",
      "Express",
      "Postgres",
      "Graphql",
      "Chakra-ui",
      "Heroku",
    ],
    images: {
      height: "11397",
      width: "1810",
      blur: "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1647742066/images/hhs-layout-blur_y1kau6.png",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642715625/images/Fascio_hwzdcr.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642912451/images/fascio-layout_nukilh.png",
      videoSrc: null,
      qrImgSrc: null,
    },
  },
  {
    id: "4",
    color: "#168c40",
    name: "Spotify",
    subName: "Music Streaming",
    type: "mobile",
    siteUrl: "",
    github: "https://github.com/Dolosolow/Spotify-Clone",
    caption: "Cloned Music streaming app from the popular Swedish audio service Spotify.",
    description:
      "Full-stack Monorepo clone of Spotify. Mobile app, Web app, and desktop app all connected together. sign-in capabilities, using expo-av for audio, search for music and liked/add songs to your playlist.",
    stack: ["Typescript", "Expo", "React Native", "Redux"],
    images: {
      height: "",
      width: "",
      thumbnail:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1642715624/images/spotify_2_ymjq0n.png",
      detailed:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1628018526/images/ex-img_uwifuw.png",
      videoSrc: {
        src: "https://res.cloudinary.com/dnrj5jpxf/video/upload/v1650038687/images/spotify-screen_xuhmce.mov",
        poster:
          "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1647734954/images/spotify-screen-poster_wdofto.png",
      },
      qrImgSrc: "",
    },
  },
];

export default projects;
