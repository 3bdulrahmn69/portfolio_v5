import Link from 'next/link';
import { SectionTitle } from '@/components/shared/section-title';

export function AboutPreview() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
      <SectionTitle
        eyebrow="About"
        title="Brief about me"
        description="Frontend developer focused on building elegant interfaces, strong UX foundations, and maintainable product architecture."
      />

      <p className="max-w-3xl text-sm leading-7 text-soft sm:text-base">
        I enjoy turning complex requirements into simple interfaces, blending
        design precision with engineering discipline. My work is centered on
        reliability, accessibility, and user flow clarity.
      </p>

      <Link
        href="/about"
        className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-soft transition hover:border-white/35 hover:text-white"
      >
        Read Full About
      </Link>
    </section>
  );
}
