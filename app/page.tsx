import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { createBilingualPageMetadata } from '@/lib/seo';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import TechStack from '@/components/landing/tech-stack';
import Projects from '@/components/landing/projects';
import ContactCTA from '@/components/landing/contact-cta';

export const metadata: Metadata = createBilingualPageMetadata({
  title: siteConfig.title,
  path: '/',
  descriptionEn:
    'Abdulrahman Moussa - Expert Frontend Developer specializing in React, Next.js, and TypeScript. View my portfolio, modern web development projects, and software engineering skills.',
  descriptionAr:
    'معرض أعمال عبدالرحمن موسى - مطور واجهات أمامية متخصص في React و Next.js. يضم المشاريع، التقنيات الحديثة، وطرق التواصل.',
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
      <About />
      <TechStack />
      <Projects />
      <ContactCTA />
    </div>
  );
}
