import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { TopProgressbar } from "@/components/top-progress-bar";
import { ToTopButton } from "@/components/to-top-button";
import type { CLProps } from "@/components/card-list";

import { MainWrapper, SectionDivider } from "@/styles/pages/styled-home";
import type { JRMProject } from "@/types/index";
import projects from "@/data/projects";

interface Props {
  projects: JRMProject[];
}

const DynamicCards = dynamic<CLProps>(() =>
  import("../components/card-list").then((mod) => mod.CardList)
);
const DynamicMarquee = dynamic<any>(() =>
  import("../components/marquee-gallery").then((mod) => mod.MarqueeGallery)
);
const DynamicAboutSection = dynamic<any>(() =>
  import("../components/about-section").then((mod) => mod.AboutSection)
);
const DynamicFooter = dynamic<any>(() => import("../components/footer").then((mod) => mod.Footer));

const Home = ({ projects }: Props) => {
  const [enableFocus, setEnableFocus] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", () => {
      setEnableFocus(true);
    });

    document.addEventListener("mousedown", () => {
      setEnableFocus(false);
    });
  }, []);

  return (
    <MainWrapper $enableFocus={enableFocus}>
      <SectionDivider $name="top" id="top" />
      <TopProgressbar />
      <Navbar />
      <Header />
      <SectionDivider $name="projects" id="projects" />
      <DynamicCards projects={projects} />
      <SectionDivider $name="skills" id="skills" />
      <DynamicMarquee />
      <SectionDivider $name="about" id="about" />
      <DynamicAboutSection />
      <DynamicFooter />
      <ToTopButton />
    </MainWrapper>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return { props: { projects } };
};
