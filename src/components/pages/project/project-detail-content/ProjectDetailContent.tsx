'use client';

import Layout from '@/components/layout/Layout';
import { ProjectDocDetails } from '@/components/pages/project/project-doc-details';
import { ProjectImgDetails } from '@/components/pages/project/project-img-details';
import type { JRMProject } from '@/types/index';

export const ProjectDetailContent = ({ project }: { project: JRMProject }) => {
  return (
    <Layout>
      {project.type === 'web' ? (
        <ProjectImgDetails project={project} />
      ) : (
        <ProjectDocDetails project={project} />
      )}
    </Layout>
  );
};
