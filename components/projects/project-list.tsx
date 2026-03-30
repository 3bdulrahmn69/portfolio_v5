import { projects } from '@/data/projects';
import { SectionTitle } from '@/components/shared/section-title';
import { ProjectCard } from '@/components/shared/project-card';

export function ProjectList() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Portfolio"
        title="My projects"
        description="Personal product experiments, portfolio builds, and technical explorations."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
