import { projects } from '@/data/projects';
import { works } from '@/data/works';
import { SectionTitle } from '@/components/shared/section-title';

const allItems = [...projects, ...works];
const uniqueTechCount = new Set(allItems.flatMap((item) => item.techStack))
  .size;
const completedCount = allItems.filter(
  (item) => item.status === 'completed',
).length;

const stats = [
  { label: 'Total Projects', value: projects.length },
  { label: 'Total Works', value: works.length },
  { label: 'Unique Technologies', value: uniqueTechCount },
  { label: 'Completed Deliveries', value: completedCount },
];

export function TechSummary() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Summary"
        title="Tech summary"
        description="A quick look at delivery volume and technical breadth across projects and client work."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/2 p-5"
          >
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
