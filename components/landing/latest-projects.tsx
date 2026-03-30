import Link from 'next/link';
import { projects } from '@/data/projects';
import { SectionTitle } from '@/components/shared/section-title';
import { ProjectCard } from '@/components/shared/project-card';

const latest = [...projects].sort((a, b) => b.year - a.year).slice(0, 4);

export function LatestProjects() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Recent Work"
        title="Latest projects"
        description="A curated selection of recent product builds, from idea to polished release."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {latest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Link
        href="/projects"
        className="inline-flex rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-soft transition hover:border-white/35 hover:text-white"
      >
        Browse All Projects
      </Link>
    </section>
  );
}
