import { useState, useEffect } from "react";

import { MainWrapper, SectionDivider } from "./styled";
import { AboutSection } from "components/aboutSection";
import { CardList } from "components/cardList";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { MarqueeGallery } from "components/MarqueeGallery";
import { Navbar } from "components/navbar";
import { TopProgressbar } from "components/TopProgressbar";
import { ToTopButton } from "components/toTopButton";

import { JRMProject } from "types/index";

interface Props {
  projects: JRMProject[];
}

export const Home = ({ projects }: Props) => {
  const [enableFocus, setEnableFocus] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      setEnableFocus(true);
    });

    document.addEventListener("mousedown", (evt) => {
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
      <CardList projects={projects} />
      <SectionDivider $name="skills" id="skills" />
      <MarqueeGallery />
      <SectionDivider $name="about" id="about" />
      <AboutSection />
      <Footer />
      <ToTopButton />
    </MainWrapper>
  );
};
