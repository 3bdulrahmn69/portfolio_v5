import { works } from '@/data/works';
import { SectionTitle } from '@/components/shared/section-title';
import { ProjectCard } from '@/components/shared/project-card';

export function MyWorks() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Professional"
        title="My works"
        description="Production work delivered for clients and organizations across different domains."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {works.map((work) => (
          <ProjectCard key={work.slug} project={work} />
        ))}
      </div>
    </section>
  );
}
