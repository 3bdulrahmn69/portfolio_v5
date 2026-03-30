import { techStack, toolsStack } from '@/data/tech-tool';
import { SectionTitle } from '@/components/shared/section-title';

const marqueeItems = [...techStack, ...toolsStack, ...techStack];

export function TechMarquee() {
  return (
    <section className="space-y-6">
      <SectionTitle
        eyebrow="Stack"
        title="Tech I'm using"
        description="A practical toolkit for shipping products fast, maintaining quality, and scaling with confidence."
      />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/2 py-5">
        <div className="marquee-track flex min-w-max gap-4 px-4">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm text-soft"
              >
                <Icon className="text-accent" aria-hidden />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
