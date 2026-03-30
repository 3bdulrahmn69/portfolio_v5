import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import TechStack from '@/components/landing/tech-stack';
import Projects from '@/components/landing/projects';
import ContactCTA from '@/components/landing/contact-cta';

export const metadata: Metadata = {
  title: 'Abdulrahman Moussa | Frontend Developer',
  description:
    'Frontend developer portfolio for Abdulrahman Moussa with selected projects, technical stack, and contact details.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description:
      'Frontend developer portfolio for Abdulrahman Moussa with selected projects, technical stack, and contact details.',
    url: siteConfig.url,
    images: [siteConfig.ogImages.home],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description:
      'Frontend developer portfolio for Abdulrahman Moussa with selected projects, technical stack, and contact details.',
    images: [siteConfig.ogImages.home],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-background w-full relative overflow-hidden">
      {/* Background glow effects - premium look */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <Hero />
      <About />
      <TechStack />
      <Projects />
      <ContactCTA />
    </div>
  );
}
