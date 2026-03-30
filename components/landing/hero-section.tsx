import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(183,230,255,0.22),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(255,190,90,0.24),transparent_35%),linear-gradient(170deg,#0a0d12,#050607)] px-6 py-16 sm:px-10 sm:py-24">
      <div className="max-w-3xl space-y-7">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted">
          Frontend Engineer
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {siteConfig.name}
          <span className="block text-accent">
            Building focused digital products.
          </span>
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-soft sm:text-lg">
          I design and build polished, high-performance web experiences with a
          product mindset, turning business goals into clean interfaces that
          users trust.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full border border-accent bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-accent-soft"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-soft transition hover:border-white/40 hover:text-white"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
