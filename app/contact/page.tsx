import type { Metadata } from 'next';
import { ContactDetails } from '@/components/contact/contact-details';
import { ContactForm } from '@/components/contact/contact-form';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    'Contact details and message form for collaboration and project inquiries.',
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: 'Get in touch for freelance work and collaboration.',
    url: `${siteConfig.url}/contact`,
    images: [siteConfig.ogImages.home],
  },
};

export default function ContactPage() {
  return (
    <div className="grid gap-8 xl:grid-cols-[1fr_1.2fr]">
      <ContactDetails />
      <section className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Contact form
        </h1>
        <p className="mt-3 text-sm leading-7 text-soft">
          Tell me what you are building, expected timeline, and key outcomes.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
