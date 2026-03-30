import { SectionTitle } from '@/components/shared/section-title';

const interests = [
  'Gaming & entertainment',
  'Social connections',
  'Continuous learning',
  'Music & podcasts',
  'Outdoor activities',
  'Digital exploration',
];

export function HopesGoals() {
  return (
    <section className="space-y-6 rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
      <SectionTitle
        eyebrow="Future"
        title="Hopes & goals"
        description="I aim to keep shipping impactful products while deepening my craft in architecture, design systems, and product strategy."
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {interests.map((interest) => (
          <li
            key={interest}
            className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-soft"
          >
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
}
