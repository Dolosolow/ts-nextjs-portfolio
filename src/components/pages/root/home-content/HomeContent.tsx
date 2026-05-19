'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Layout from '@/components/layout/Layout';
import { MainWrapper } from '@/styles/pages/styled-home';
import { Header } from '@/components/pages/root/header';
import type { CLProps } from '@/components/common/card-list';
import type { MGProps } from '@/components/common/marquee-gallery';
import type { ASProps } from '@/components/pages/root/about-section';
import type { JRMProject } from '@/types/index';

import lang from 'src/lang/en.lang';

const DynamicCards = dynamic<CLProps>(() =>
  import('@/components/common/card-list').then((mod) => mod.CardList)
);
const DynamicMarquee = dynamic<MGProps>(() =>
  import('@/components/common/marquee-gallery').then((mod) => mod.MarqueeGallery)
);
const DynamicAboutSection = dynamic<ASProps>(() =>
  import('@/components/pages/root/about-section').then((mod) => mod.AboutSection)
);

export const HomeContent = ({ projects }: { projects: JRMProject[] }) => {
  const [enableFocus, setEnableFocus] = useState(false);

  useEffect(() => {
    const eventlistenerKD = () => setEnableFocus(true);
    const eventlistenerMD = () => setEnableFocus(false);

    document.addEventListener('keydown', eventlistenerKD);
    document.addEventListener('mousedown', eventlistenerMD);

    return () => {
      document.removeEventListener('keydown', eventlistenerKD);
      document.removeEventListener('mousedown', eventlistenerMD);
    };
  }, []);

  return (
    <Layout>
      <MainWrapper $enableFocus={enableFocus}>
        <Header content={{ ...lang.homepage.header }} />
        <DynamicCards id="projects" projects={projects} />
        <DynamicMarquee id="about" />
        <DynamicAboutSection id="about" content={{ ...lang.homepage.aboutSection }} />
      </MainWrapper>
    </Layout>
  );
};
