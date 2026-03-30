import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

import Container from '@/components/layout/container';
import ContactDetails from '@/components/contact/contact-details';
import ContactForm from '@/components/contact/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Abdulrahman Moussa for frontend development, project collaboration, and product engineering work.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Abdulrahman Moussa',
    description:
      'Get in touch with Abdulrahman Moussa for frontend development, project collaboration, and product engineering work.',
    url: `${siteConfig.url}/contact`,
    images: [siteConfig.ogImages.home],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Abdulrahman Moussa',
    description:
      'Get in touch with Abdulrahman Moussa for frontend development, project collaboration, and product engineering work.',
    images: [siteConfig.ogImages.home],
  },
  other: {
    'geo.region': 'EG-C',
    'geo.placename': 'Cairo',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center bg-background w-full relative overflow-hidden pt-28 pb-28">
      <div className="absolute top-[-15%] right-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <Container className="z-10">
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
      </Container>
    </div>
  );
}
