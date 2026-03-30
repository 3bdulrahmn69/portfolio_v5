import { SectionTitle } from '@/components/shared/section-title';

export function AboutSummary() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
      <SectionTitle
        eyebrow="About Me"
        title="Summary"
        description="I build scalable frontend systems with attention to user behavior, accessibility, and visual quality."
      />
      <p className="text-sm leading-7 text-soft sm:text-base">
        My focus is creating interfaces that are both expressive and practical.
        I enjoy turning detailed product requirements into robust user
        experiences with clean architecture and long-term maintainability.
      </p>
    </section>
  );
}
