import type { Metadata } from 'next';
import { createBilingualPageMetadata } from '@/lib/seo';
import { projects, works } from '@/data';

import Button from '@/components/ui/button';
import Container from '@/components/layout/container';
import ProjectCard from '@/components/projects/project-card';

import {
  FaArrowRight,
  FaCode,
  FaFolderOpen,
  FaLaptopCode,
  FaUser,
} from 'react-icons/fa6';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createBilingualPageMetadata({
  title: 'Projects by Abdulrahman Moussa | Next.js & React Developer',
  path: '/projects',
  descriptionEn:
    'Explore selected frontend and full-stack projects by Abdulrahman Moussa, including production work, React applications, Next.js products, and personal builds.',
  descriptionAr:
    'استعرض مشاريع عبدالرحمن موسى في تطوير الواجهات الأمامية وتطبيقات React و Next.js، بما يشمل أعمال احترافية ومشاريع شخصية.',
  ogImage: '/og-projects.jpg',
  keywords: [
    'Abdulrahman Moussa Projects',
    'Frontend Projects',
    'React Projects',
    'Next.js Projects',
    'Portfolio Projects',
    'Web Development Portfolio',
    'TypeScript Projects',
    'Software Engineer Portfolio',
    'مشاريع تطوير واجهات',
    'مشاريع React',
  ],
});

export default function ProjectsPage() {
  const allProjects = [...works, ...projects];
  const totalProjects = allProjects.length;
  const uniqueTechnologies = new Set(
    allProjects.flatMap((project) => project.techStack),
  ).size;
  const professionalProjects = allProjects.filter(
    (project) => project.type === 'professional',
  ).length;
  const personalProjects = allProjects.filter(
    (project) => project.type === 'personal',
  ).length;

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects by Abdulrahman Moussa',
    description:
      'A curated collection of web development projects, featuring React, Next.js, and modern frontend architectures.',
    url: `${siteConfig.url}/projects`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allProjects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareSourceCode',
          name: project.title,
          description: project.description,
          url: `${siteConfig.url}/projects/${project.slug}`,
          programmingLanguage: project.techStack.join(', '),
          author: {
            '@type': 'Person',
            name: 'Abdulrahman Moussa',
          },
        },
      })),
    },
  };

  return (
    <div className="flex flex-col items-center bg-background w-full relative overflow-hidden pt-28 pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <div className="absolute top-[-8%] right-[-8%] w-[42%] h-[42%] bg-primary/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute top-[45%] left-[-10%] w-[36%] h-[36%] bg-accent/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <Container className="z-10">
        <header className="mb-16 md:mb-20">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-semibold text-secondary-foreground mb-6">
            Portfolio Collection
          </p>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-5">
            All <span className="text-primary italic">Projects</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A curated collection of professional and personal products focused
            on robust architecture, performance, and polished user experience.
          </p>
        </header>

        <div className="flex flex-col gap-24">
          {allProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} idx={idx} />
          ))}
        </div>

        <div className="flex justify-center mt-24">
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="font-extrabold text-lg"
          >
            Let&apos;s Work Together <FaArrowRight />
          </Button>
        </div>

        <section className="mt-20 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-6">
            Portfolio Stats
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <article className="rounded-2xl border border-border bg-background p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary mb-3">
                <FaFolderOpen />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Total Projects
              </p>
              <p className="text-3xl font-black text-foreground">
                {totalProjects}
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-background p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary mb-3">
                <FaCode />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Technologies Used
              </p>
              <p className="text-3xl font-black text-foreground">
                {uniqueTechnologies}
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-background p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary mb-3">
                <FaLaptopCode />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Professional
              </p>
              <p className="text-3xl font-black text-foreground">
                {professionalProjects}
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-background p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary mb-3">
                <FaUser />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Personal
              </p>
              <p className="text-3xl font-black text-foreground">
                {personalProjects}
              </p>
            </article>
          </div>
        </section>
      </Container>
    </div>
  );
}
