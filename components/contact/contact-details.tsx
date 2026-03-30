import Link from 'next/link';
import { FiExternalLink, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { siteConfig } from '@/lib/site';
import { SectionTitle } from '@/components/shared/section-title';

export function ContactDetails() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
      <SectionTitle
        eyebrow="Reach Out"
        title="Contact details"
        description="Open for freelance work, collaboration, and product development opportunities."
      />

      <div className="space-y-5 text-sm text-soft">
        <p className="flex items-center gap-3">
          <FiMail className="text-accent" aria-hidden />
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition hover:text-white"
          >
            {siteConfig.email}
          </a>
        </p>
        <p className="flex items-center gap-3">
          <FiPhone className="text-accent" aria-hidden />
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="transition hover:text-white"
          >
            {siteConfig.phone}
          </a>
        </p>
        <p className="flex items-center gap-3">
          <FiMapPin className="text-accent" aria-hidden />
          {siteConfig.location}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {siteConfig.socialLinks.map((social) => (
          <Link
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.14em] text-soft transition hover:border-white/30 hover:text-white"
          >
            {social.label}
            <FiExternalLink aria-hidden />
          </Link>
        ))}
      </div>
    </section>
  );
}
