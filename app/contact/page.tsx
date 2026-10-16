import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { createPageMetadata, createBreadcrumbJsonLd } from '@/lib/seo';

import Container from '@/components/layout/container';
import ContactDetails from '@/components/contact/contact-details';
import ContactForm from '@/components/contact/contact-form';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Abdulrahman Moussa | Hire React Frontend Developer',
  path: '/contact',
  description:
    'Get in touch with Abdulrahman Moussa — hire a frontend developer based in Egypt for your next React, Next.js, or web application project.',
  ogImage: '/og-contact.jpg',
  keywords: [
    'Contact Abdulrahman Moussa',
    'Hire Frontend Developer',
    'Hire React Developer',
    'Freelance Frontend Developer',
    'Contact Developer',
    'توظيف مطور واجهات',
    'تواصل مع عبدالرحمن',
  ],
});

const FAQS = [
  {
    question: 'Are you available for freelance or full-time work?',
    answer:
      "Yes — I'm open to freelance projects and full-time frontend roles. Send a message and I'll get back to you within 24–48 hours.",
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'React, Next.js, and TypeScript for interfaces; Tailwind CSS for styling; and Node.js, Express, and MongoDB when a project needs a backend.',
  },
  {
    question: 'Do you work remotely?',
    answer:
      'Yes — I work remotely with clients and teams in Egypt, Saudi Arabia, and internationally, overlapping working hours when needed.',
  },
  {
    question: 'How do we start working together?',
    answer:
      "Send a short brief through the form or by email — what you're building, the timeline, and your budget range. I'll reply with questions and a plan.",
  },
];

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.name,
      alternateName: 'عبدالرحمن موسى',
      email: siteConfig.email,
      telephone: siteConfig.phone,
      jobTitle: 'Frontend Developer (React & Next.js)',
      url: siteConfig.url,
      sameAs: siteConfig.socialLinks.map((link) => link.href),
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col items-center bg-background w-full relative overflow-hidden pt-28 pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createBreadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Contact', path: '/contact' },
            ]),
          ),
        }}
      />
      <div className="absolute top-[-15%] right-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <Container className="z-(--z-content)">
        <header className="mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-semibold text-secondary-foreground mb-6">
            Contact Details
          </p>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-5">
            Let&apos;s <span className="text-primary italic">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Reach out directly using the form or the contact channels below.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">
          <ContactDetails />
          <ContactForm />
        </div>

        <section aria-labelledby="faq-heading" className="mt-24">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-black tracking-tight mb-8"
          >
            Frequently Asked{' '}
            <span className="text-primary italic">Questions</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {FAQS.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
