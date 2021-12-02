import { useState, useEffect } from "react";
import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";

import { MainWrapper } from "@/styles/pages/styled-home";
import { Header } from "@/components/pages/root/header";
import Layout from "@/components/layout/Layout";
import type { CLProps } from "@/components/common/card-list";
import type { MGProps } from "@/components/common/marquee-gallery";

import type { JRMProject } from "@/types/index";

import projects from "@/data/projects";

interface Props {
  projects: JRMProject[];
}

const DynamicCards = dynamic<CLProps>(() =>
  import("../components/common/card-list").then((mod) => mod.CardList)
);
const DynamicMarquee = dynamic<MGProps>(() =>
  import("../components/common/marquee-gallery").then((mod) => mod.MarqueeGallery)
);
const DynamicAboutSection = dynamic<{ id: string }>(() =>
  import("../components/pages/root/about-section").then((mod) => mod.AboutSection)
);

const Home = ({ projects }: Props) => {
  const [enableFocus, setEnableFocus] = useState(false);

  useEffect(() => {
    const eventlistenerKD = () => {
      setEnableFocus(true);
    };

    const eventlistenerMD = () => {
      setEnableFocus(false);
    };

    document.addEventListener("keydown", eventlistenerKD);
    document.addEventListener("mousedown", eventlistenerMD);

    return () => {
      document.removeEventListener("keydown", eventlistenerKD);
      document.removeEventListener("mousedown", eventlistenerMD);
    };
  }, []);

  return (
    <MainWrapper $enableFocus={enableFocus}>
      <Header />
      <DynamicCards id="projects" projects={projects} />
      <DynamicMarquee id="stacks" />
      <DynamicAboutSection id="about" />
    </MainWrapper>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return { props: { projects } };
};
