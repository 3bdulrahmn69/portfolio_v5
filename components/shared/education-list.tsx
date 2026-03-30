import { education } from '@/data/education';
import { SectionTitle } from '@/components/shared/section-title';

export function EducationList() {
  return (
    <section className="space-y-6">
      <SectionTitle eyebrow="Learning" title="Education" />
      <div className="grid gap-4">
        {education.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/2 p-5"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-muted">{item.provider}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
              {item.period}
            </p>
            <p className="mt-4 text-sm leading-7 text-soft">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
