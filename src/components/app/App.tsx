import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";

import { MainWrapper, ProgressBar, SectionDivider } from "./styled";
import { AboutSection } from "components/aboutSection";
import { CardList } from "components/cardList";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { MarqueeGallery } from "components/MarqueeGallery";
import { Navbar } from "components/navbar";
import { ToTopButton } from "components/toTopButton";

import { JRMProject } from "../../types/index";

interface Props {
  projects: JRMProject[];
}

const App = ({ projects }: Props) => {
  const [enableFocus, setEnableFocus] = useState(false);

  const animatedProgress = useSpring({
    value: 105,
    delay: 100,
    from: { value: 0 },
    config: { duration: 600 },
  });
  const animatedProgressBar = {
    width: animatedProgress.value.to((value) => `${value}%`),
    display: animatedProgress.value.to((value) => (value === 105 ? "none" : "block")),
  };

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
      <ProgressBar style={animatedProgressBar} />
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

export default App;
