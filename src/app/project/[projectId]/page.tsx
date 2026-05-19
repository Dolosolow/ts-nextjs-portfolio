import { notFound } from 'next/navigation';
import { ProjectDetailContent } from '@/components/pages/project/project-detail-content';
import Projects from '@/data/projects';

export function generateStaticParams() {
  return Projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const project = Projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
