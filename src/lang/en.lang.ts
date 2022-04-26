export default {
  meta: {
    domain: "jrmunz",
    url: "https://www.jrmunz.com/",
    cardImgUrl:
      "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1647732631/images/jrm_card_wsupgu.png",
    signed: `Designed & Built by Jose R. Munoz`,
    title: {
      key: "title",
      content: "JR | Full Stack Developer - Freelancer",
    },
    keywords: {
      key: "keywords",
      content: `full stack, full-stack, web developer, designer,
    react, node.js, node js, responsive design, mobile design`,
    },
    description: {
      key: "description",
      content: `Hire Freelancer and Full Stack developer. Hire Professional Freelancer, Web, and mobile Developer. Building hi-end solutions, cloud solutions, website maintenance & security`,
    },
  },
  pageNotFound: {
    images: {
      reg: "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1650291573/images/404page_cqdelt.png",
      mobile:
        "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1650305397/images/404page_sm_trfjsd.png",
    },
  },
  homepage: {
    aboutSection: {
      text: `
        Hello! I'm Jose, a self-taught web developer based in Jersey City, NJ. Passionate, well-organized person, problem solver, with strong attention to detail.<br>
        I enjoy building things that help people connect and make their life simpler. From websites and applications to anything in between. My goal is to keep learning and become better than I was yesterday. So the products I build are well designed for a better experience for the end-user.
            `,
      email: "Jose.Munoz07c@gmail.com",
      resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL as string,
    },
    header: {
      subText: "Hi, my name is",
      title_first: "Jose Munoz",
      title_second: "Build it and they will come",
      text: `I'm a web developer based in Jersey City, NJ specializing in building and designing
        high-quality websites and applications.`,
      images: {
        reg: "https://res.cloudinary.com/dnrj5jpxf/image/upload/v1650935864/images/bg_img_b8cxx5.webp",
      },
    },
  },
};
