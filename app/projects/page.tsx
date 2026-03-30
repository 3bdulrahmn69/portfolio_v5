import type { Metadata } from 'next';
import { MyWorks } from '@/components/projects/my-works';
import { ProjectList } from '@/components/projects/project-list';
import { TechSummary } from '@/components/projects/tech-summary';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description:
    'All professional works and personal projects, including technologies, highlights, and delivery outcomes.',
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: 'Explore works, projects, and a concise technology summary.',
    url: `${siteConfig.url}/projects`,
    images: [siteConfig.ogImages.projects],
  },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16">
      <MyWorks />
      <ProjectList />
      <TechSummary />
    </div>
  );
}
