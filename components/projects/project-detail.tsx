import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/definitions';

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Project detail
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-soft sm:text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 text-xs">
          <span className="rounded-full border border-white/20 px-3 py-1 text-soft">
            {project.category}
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-soft">
            {project.status}
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-soft">
            {project.year}
          </span>
        </div>
      </header>

      <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          {typeof project.image === 'string' ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <aside className="space-y-4 rounded-2xl border border-white/10 bg-white/2 p-6">
          <h2 className="text-lg font-semibold text-white">Tech used</h2>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-soft"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-3">
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-accent bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black"
              >
                Live site
              </Link>
            ) : null}
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-soft"
              >
                GitHub
              </Link>
            ) : null}
          </div>
        </aside>
      </section>

      {project.highlights?.length ? (
        <section className="space-y-4 rounded-2xl border border-white/10 bg-white/2 p-6">
          <h2 className="text-2xl font-semibold text-white">Highlights</h2>
          <ul className="grid gap-3 text-sm text-soft sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
