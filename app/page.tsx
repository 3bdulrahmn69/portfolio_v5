import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { createPageMetadata } from '@/lib/seo';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import TechStack from '@/components/landing/tech-stack';
import Projects from '@/components/landing/projects';
import ContactCTA from '@/components/landing/contact-cta';
import Reveal from '@/components/shared/reveal';

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  path: '/',
  description:
    'Frontend developer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and client work — Abdulrahman Moussa.',
  ogImage: '/og-home.jpg',
  keywords: [
    'Abdulrahman Moussa',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Frontend Portfolio',
    'Personal Website',
    'Modern Web Development',
    'React.js',
    'TypeScript Engineer',
    'Egypt Web Developer',
  ],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-background w-full relative overflow-hidden">
      {/* Background glow effects - premium look */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <Projects />
      <Reveal>
        <ContactCTA />
      </Reveal>
    </div>
  );
}
