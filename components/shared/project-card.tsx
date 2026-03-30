import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/definitions';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const imageAlt = `${project.title} preview`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01))]">
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:outline-none"
      >
        <div className="relative aspect-16/10 overflow-hidden">
          {typeof project.image === 'string' ? (
            // Remote images are rendered with img to avoid remotePatterns configuration coupling.
            <img
              src={project.image}
              alt={imageAlt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <Image
              src={project.image}
              alt={imageAlt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
          <p className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white">
            {project.year}
          </p>
        </div>

        <div className="space-y-3 p-5">
          <h3 className="text-xl font-semibold text-white transition group-hover:text-accent">
            {project.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-6 text-soft">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
