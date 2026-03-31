import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { createBilingualPageMetadata } from '@/lib/seo';
import { certifications, courses, education } from '@/data';
import Image from 'next/image';

import Container from '@/components/layout/container';
import Button from '@/components/ui/button';

import {
  FaAward,
  FaBookOpen,
  FaGraduationCap,
  FaLocationDot,
  FaRegFileLines,
  FaSuitcase,
} from 'react-icons/fa6';

export const metadata: Metadata = createBilingualPageMetadata({
  title: 'About | Abdulrahman Moussa',
  path: '/about',
  descriptionEn:
    'Learn about Abdulrahman Moussa: frontend engineering background, certifications, courses, education, and design-first development philosophy.',
  descriptionAr:
    'تعرف على عبدالرحمن موسى وخلفيته في تطوير الواجهات الأمامية، الشهادات، التعليم، وفلسفة العمل التي تركز على الجودة والتجربة.',
  ogImage: '/og-about.jpg',
  type: 'profile',
  keywords: [
    'Frontend Developer Egypt',
    'Software Engineering Certifications',
    'السيرة الذاتية',
    'شهادات تطوير الويب',
  ],
});

const coreSkills = [
  'React & Next.js Architecture',
  'Performance Optimization',
  'Responsive UI Design',
  'Cross-Browser Development',
];

const currentFocus = [
  'Advanced React Patterns',
  'TypeScript Mastery',
  'UI/UX Principles',
  'Accessibility Standards',
];

const philosophy = [
  { title: 'Clarity First', desc: 'Readable, maintainable code structure' },
  { title: 'Pixel Precision', desc: 'UI consistency across devices' },
  { title: 'Performance', desc: 'Optimized loading and interactions' },
];

const careerGoals = [
  'Scalable web applications',
  'Innovative SaaS products',
  'Open source projects',
];

const hobbies = [
  {
    title: 'Gaming & Entertainment',
    desc: 'Competitive gaming, story-driven games, movies and TV series',
  },
  { title: 'Social Connections', desc: 'Friends, family, social media' },
  {
    title: 'Continuous Learning',
    desc: 'Reading, educational content, new technologies',
  },
  {
    title: 'Music & Podcasts',
    desc: 'Playlists, discovering artists, podcasts',
  },
  {
    title: 'Outdoor Activities',
    desc: 'Walks, coffee shops, local hangouts',
  },
  {
    title: 'Digital Exploration',
    desc: 'Tech news, trends, online communities',
  },
];

const hobbyHoverStyles = [
  'hover:border-primary/50 hover:bg-primary/10 hover:shadow-primary/20',
  'hover:border-accent/50 hover:bg-accent/10 hover:shadow-accent/20',
  'hover:border-success/40 hover:bg-success/10 hover:shadow-success/20',
  'hover:border-warning/40 hover:bg-warning/10 hover:shadow-warning/20',
  'hover:border-info/40 hover:bg-info/10 hover:shadow-info/20',
  'hover:border-highlight-foreground/40 hover:bg-highlight hover:shadow-highlight-foreground/20',
];

export default function AboutPage() {
  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2025-01-01T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.name,
      alternateName: 'عبدالرحمن موسى',
      jobTitle: 'Frontend Developer',
      description:
        'Frontend developer who loves creating responsive and user-friendly web interfaces.',
      image: `${siteConfig.url}/og-about.jpg`,
      sameAs: siteConfig.socialLinks.map((link) => link.href),
    },
  };

  return (
    <div className="flex flex-col items-center bg-background w-full relative overflow-hidden pt-32 pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] opacity-30 pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[150px] opacity-30 pointer-events-none" />

      <Container className="z-10">
        {/* Header Section */}
        <section className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-secondary-foreground font-semibold text-sm mb-6">
            <span>Get to know me</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-foreground mb-6">
            About <span className="text-primary italic">Me</span>
          </h1>
          <p className="text-2xl text-muted-foreground font-medium">
            Abdulrahman Moussa
          </p>
          <div className="mt-8">
            <Button
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              className="font-bold"
            >
              <FaRegFileLines /> View Resume
            </Button>
          </div>
        </section>

        {/* Bio Section */}
        <section className="mb-24">
          <div className="bg-card border border-border p-8 sm:p-12 rounded-3xl shadow-xl space-y-6 text-lg text-card-foreground leading-relaxed">
            <p>
              I&apos;m Abdulrahman Moussa, a frontend developer who loves
              creating responsive and user-friendly web interfaces. I started my
              journey through self-learning, building small projects and diving
              into HTML, CSS, and JavaScript on my own. That foundation led me
              to join the ALX Software Engineering program, where I improved my
              problem-solving skills and learned how to build real-world
              applications through consistent, independent learning.
            </p>
            <p>
              After that, I joined the Intensive Training Program (ITP) at the
              Information Technology Institute (ITI), specializing in frontend
              and cross-platform development. There, I worked on practical
              projects using modern tools like React and APIs.
            </p>
            <p className="font-semibold text-foreground border-l-4 border-primary pl-6">
              Learning has always been at the heart of what I do — before ALX
              and ITI, during them, and still every day. I&apos;m always
              exploring better ways to build fast, accessible, and modern web
              experiences.
            </p>
          </div>
        </section>

        {/* Info Grid 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Core Skills */}
          <section className="flex flex-col">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              Core Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 rounded-xl bg-background border border-border shadow-sm font-semibold text-foreground hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Current Focus */}
          <section className="flex flex-col">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              Current Focus
            </h2>
            <div className="flex flex-wrap gap-3">
              {currentFocus.map((focus) => (
                <span
                  key={focus}
                  className="px-5 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold"
                >
                  {focus}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Philosophy & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <section className="flex flex-col gap-12">
            <div className="bg-background text-foreground border border-primary p-10 rounded-3xl shadow-lg shadow-primary/20">
              <h2 className="text-3xl font-bold mb-6">Personal Info</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaLocationDot className="text-xl opacity-80" />
                  <span className="font-semibold">Cairo, Egypt</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaGraduationCap className="text-xl opacity-80" />
                  <span className="font-semibold">
                    Bachelor of Management Information Systems
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <FaSuitcase className="text-xl opacity-80" />
                  <span className="font-semibold">Open for opportunities</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-10 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Career Goals</h2>
              <p className="text-muted-foreground mb-4">
                Seeking frontend roles where I can contribute to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground font-medium">
                {careerGoals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-card border border-border p-10 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8">Engineering Philosophy</h2>
            <ul className="space-y-6">
              {philosophy.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-1 border-b border-border/50 pb-4 last:border-0 last:pb-0"
                >
                  <strong className="text-xl text-primary">{item.title}</strong>
                  <span className="text-muted-foreground">{item.desc}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Hobbies Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Life Outside Code
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.title}
                className={`bg-muted p-6 rounded-2xl border border-border shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${hobbyHoverStyles[index % hobbyHoverStyles.length]}`}
              >
                <h3 className="font-bold text-foreground mb-2 text-lg">
                  {hobby.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hobby.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-24">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="text-4xl font-bold">Education</h2>
            <FaGraduationCap className="text-2xl text-primary" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {education.map((item) => (
              <article
                key={item.title}
                className="bg-card border border-border rounded-2xl p-7 shadow-lg"
              >
                <p className="text-sm font-semibold text-primary mb-2">
                  {item.period}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground mb-3">
                  {item.provider}
                </p>
                <p className="text-card-foreground leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-24">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="text-4xl font-bold">Certifications</h2>
            <FaAward className="text-2xl text-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((certification) => (
              <article
                key={`${certification.title}-${certification.issueDate}`}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative w-full aspect-video bg-muted">
                  <Image
                    src={certification.image}
                    alt={certification.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Issued{' '}
                    {new Date(certification.issueDate).toLocaleDateString()}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {certification.title}
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    {certification.issuer}
                  </p>

                  {certification.credentialUrl ? (
                    <Button
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                    >
                      View Credential
                    </Button>
                  ) : (
                    <Button disabled variant="outline" size="sm">
                      Credential Unavailable
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section>
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="text-4xl font-bold">Courses</h2>
            <FaBookOpen className="text-2xl text-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <article
                key={`${course.title}-${course.period}`}
                className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {course.period}
                  </p>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      course.status === 'In Progress'
                        ? 'bg-warning/15 text-warning border-warning/40'
                        : 'bg-success/15 text-success border-success/40'
                    }`}
                  >
                    {course.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4">{course.provider}</p>
                <p className="text-card-foreground leading-relaxed">
                  {course.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
