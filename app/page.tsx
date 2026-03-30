import type { Metadata } from 'next';
import { AboutPreview } from '@/components/landing/about-preview';
import { ContactPreview } from '@/components/landing/contact-preview';
import { HeroSection } from '@/components/landing/hero-section';
import { LatestProjects } from '@/components/landing/latest-projects';
import { TechMarquee } from '@/components/landing/tech-marquee';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: 'Frontend Engineer',
  email: siteConfig.email,
  sameAs: siteConfig.socialLinks.map((social) => social.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="space-y-16 sm:space-y-20">
        <HeroSection />
        <TechMarquee />
        <LatestProjects />
        <AboutPreview />
        <ContactPreview />
      </div>
    </>
  );
}
