import { HomeContent } from '@/components/pages/root/home-content';
import projects from '@/data/projects';

export default function Home() {
  return <HomeContent projects={projects} />;
}
