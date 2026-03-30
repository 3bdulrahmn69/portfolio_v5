import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/definitions';

import ProjectTechStack from './project-tech-stack';
import ProjectActionButtons from './project-action-buttons';

export default function ProjectCard({
  project,
  idx,
}: {
  project: Project;
  idx: number;
}) {
  return (
    <article
      key={project.slug}
      className="group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full"
    >
      <div
        className={`w-full lg:w-1/2 flex flex-col ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="flex items-center justify-between gap-4 mb-4">
          <Link href={`/projects/${project.slug}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] group-hover:text-primary transition-colors duration-500">
              {project.title}
            </h2>
          </Link>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary border border-border text-secondary-foreground shrink-0">
            {project.year}
          </span>
        </div>

        <ProjectTechStack
          techStack={project.techStack}
          maxVisible={5}
          className="mb-6"
        />

        {project.parts && project.parts.length > 0 && (
          <p className="text-sm text-muted-foreground mb-4">
            {project.parts.length} part
            {project.parts.length > 1 ? 's' : ''} available
          </p>
        )}

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed line-clamp-4">
          {project.description}
        </p>

        <div className="mt-auto">
          <ProjectActionButtons
            title={project.title}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            detailsHref={`/projects/${project.slug}`}
          />
        </div>
      </div>

      <div
        className={`w-full lg:w-1/2 relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
      >
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-muted border border-border/50 transition-shadow duration-700 group-hover:shadow-primary/10">
          <Link
            href={`/projects/${project.slug}`}
            className="absolute inset-0 z-10"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="eager"
            />
          </Link>

          <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-md text-foreground text-xs font-bold px-3 py-1.5 rounded-full border border-border z-20 shadow-md">
            {project.type === 'professional' ? 'Professional' : 'Personal'}
          </div>
        </div>
      </div>
    </article>
  );
}
