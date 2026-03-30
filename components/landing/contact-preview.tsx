import Link from 'next/link';
import { FiMail, FiPhone } from 'react-icons/fi';
import { siteConfig } from '@/lib/site';
import { SectionTitle } from '@/components/shared/section-title';
import { ContactForm } from '@/components/contact/contact-form';

export function ContactPreview() {
  return (
    <section className="grid gap-8 rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
      <div className="space-y-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something useful"
          description="Share your project brief, timeline, and scope. I will get back to you quickly."
        />

        <div className="space-y-3 text-sm text-soft">
          <p className="flex items-center gap-2">
            <FiMail className="text-accent" aria-hidden />
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition hover:text-white"
            >
              {siteConfig.email}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FiPhone className="text-accent" aria-hidden />
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="transition hover:text-white"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-soft transition hover:border-white/35 hover:text-white"
        >
          Open Full Contact Page
        </Link>
      </div>

      <ContactForm compact />
    </section>
  );
}
