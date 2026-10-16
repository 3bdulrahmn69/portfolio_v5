import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { createPageMetadata, createBreadcrumbJsonLd } from '@/lib/seo';

import Container from '@/components/layout/container';
import Button from '@/components/ui/button';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy | Abdulrahman Moussa',
  path: '/privacy',
  description:
    'Privacy policy for abdulrahman-moussa portfolio — what data is collected through the contact form and how it is used.',
  ogImage: '/og-privacy.jpg',
  keywords: ['privacy policy', 'Abdulrahman Moussa'],
});

const SECTIONS = [
  {
    heading: 'What I collect',
    body: `When you use the contact form, I collect the details you provide: your name, email address, and message content. No account creation, tracking cookies, or hidden data collection takes place on this site.`,
  },
  {
    heading: 'How it is used',
    body: `Your message is delivered to my inbox via EmailJS so I can reply to your inquiry. It is never sold, shared with third parties for marketing, or used for anything beyond responding to you.`,
  },
  {
    heading: 'Analytics',
    body: `This site uses Vercel Analytics and Speed Insights — privacy-friendly, cookie-less performance and traffic measurement. No personal identifiers are captured.`,
  },
  {
    heading: 'Third-party services',
    body: `The contact form is powered by EmailJS, and the site is hosted on Vercel. Each processes data only as needed to deliver their service, under their own privacy policies.`,
  },
  {
    heading: 'Your rights',
    body: `You can request a copy of anything you've sent me, or ask me to delete it, at any time — just email me at ${siteConfig.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col items-center bg-background w-full relative overflow-hidden pt-28 pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createBreadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Privacy', path: '/privacy' },
            ]),
          ),
        }}
      />
      <div className="absolute top-[-15%] right-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <Container className="z-(--z-content)">
        <header className="mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-semibold text-secondary-foreground mb-6">
            Legal
          </p>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-5">
            Privacy <span className="text-primary italic">Policy</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Short version: this site collects almost nothing, and what it does
            collect is only used to reply to you.
          </p>
        </header>

        <div className="grid gap-4 max-w-3xl">
          {SECTIONS.map((section) => (
            <article
              key={section.heading}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <h2 className="text-xl font-bold mb-3 text-foreground">
                {section.heading}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <Button
            href="/contact"
            variant="secondary"
            size="md"
            className="font-bold"
          >
            Questions? Contact Me
          </Button>
        </div>
      </Container>
    </div>
  );
}
