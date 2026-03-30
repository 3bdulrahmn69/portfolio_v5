import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/projects/project-detail';
import { projects } from '@/data/projects';
import { works } from '@/data/works';
import { siteConfig } from '@/lib/site';

const allProjects = [...works, ...projects];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: `Project Not Found | ${siteConfig.name}`,
    };
  }

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [
        typeof project.image === 'string' ? project.image : project.image.src,
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
