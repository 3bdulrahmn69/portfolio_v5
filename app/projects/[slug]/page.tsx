import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { createBilingualDescription, createLocaleAlternates } from '@/lib/seo';
import { notFound } from 'next/navigation';
import { StaticImageData } from 'next/image';
import { projects, works } from '@/data';

import Container from '@/components/layout/container';
import ProjectActionButtons from '@/components/projects/project-action-buttons';
import ProjectDemoModal from '@/components/projects/project-demo-modal';
import ProjectGallery from '@/components/projects/project-gallery';
import ProjectTechStack from '@/components/projects/project-tech-stack';
import Button from '@/components/ui/button';

import {
  FaArrowRight,
  FaCircleCheck,
  FaEnvelope,
  FaGithub,
  FaLayerGroup,
  FaLink,
} from 'react-icons/fa6';

type ProjectDetailsProps = {
  params: Promise<{ slug: string }>;
};

function toAbsoluteImageUrl(image: string | StaticImageData): string {
  const src = typeof image === 'string' ? image : image.src;
  if (/^https?:\/\//.test(src)) return src;
  return `${siteConfig.url}${src.startsWith('/') ? '' : '/'}${src}`;
}

export async function generateMetadata({
  params,
}: ProjectDetailsProps): Promise<Metadata> {
  const { slug } = await params;
  const project = [...works, ...projects].find((item) => item.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project details are not available.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const shareImage = toAbsoluteImageUrl(project.gallery?.[0] || project.image);
  const englishDescription = project.description;
  const arabicDescription = `تفاصيل مشروع ${project.title}، التقنيات المستخدمة، الروابط، وأهم النتائج.`;
  const description = createBilingualDescription(
    englishDescription,
    arabicDescription,
  );

  return {
    title: `${project.title} | Projects`,
    description,
    alternates: createLocaleAlternates(`/projects/${project.slug}`),
    openGraph: {
      title: `${project.title} | Abdulrahman Moussa`,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      locale: 'en_US',
      alternateLocale: 'ar_EG',
      images: [
        {
          url: shareImage,
          width: 1200,
          height: 630,
          alt: `${project.title} screenshot`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Abdulrahman Moussa`,
      description,
      images: [shareImage],
    },
    keywords: [...project.tags, 'مشروع برمجي', 'تفاصيل المشروع'],
    other: {
      'geo.region': 'EG-C',
      'geo.placename': 'Cairo',
      'geo.position': '30.0444;31.2357',
      ICBM: '30.0444, 31.2357',
      'content-language': 'en, ar',
    },
  };
}

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const { slug } = await params;
  const project = [...works, ...projects].find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  // JSON-LD structured data for SEO and AI agents
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    image: toAbsoluteImageUrl(project.image),
    dateCreated: project.year ? `${project.year}-01-01` : undefined,
    programmingLanguage: project.techStack.join(', '),
    ...(project.githubUrl && { codeRepository: project.githubUrl }),
    ...(project.liveUrl && { url: project.liveUrl }),
    ...(project.parts &&
      project.parts.length > 0 && {
        hasPart: project.parts.map((part) => ({
          '@type': 'SoftwareApplication',
          name: part.label,
          ...(part.description && { description: part.description }),
          ...(part.liveUrl && { url: part.liveUrl }),
          ...(part.githubUrl && { codeRepository: part.githubUrl }),
        })),
      }),
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: project.tags?.join(', '),
  };

  return (
    <div className="flex flex-col items-center bg-background w-full relative overflow-hidden pt-28 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="absolute top-[-8%] right-[-8%] w-[42%] h-[42%] bg-primary/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute top-[45%] left-[-10%] w-[36%] h-[36%] bg-accent/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <Container className="z-10">
        <header className="mb-10">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-semibold text-secondary-foreground mb-6">
            Project Details
          </p>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 text-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-5">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary border border-border text-secondary-foreground">
              {project.type === 'professional' ? 'Professional' : 'Personal'}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary border border-border text-secondary-foreground">
              {project.year}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary border border-border text-secondary-foreground">
              {project.status}
            </span>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl leading-relaxed mb-7">
            {project.description}
          </p>
        </header>

        <ProjectGallery
          title={project.title}
          image={project.image}
          gallery={project.gallery}
        />

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
          {project.liveUrl ? (
            <Button
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
            >
              <FaLink /> Live Demo
            </Button>
          ) : (
            <Button
              disabled
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
            >
              <FaLink /> Demo Unavailable
            </Button>
          )}

          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
            >
              <FaGithub /> Source Code
            </Button>
          ) : (
            <Button
              disabled
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
            >
              <FaGithub /> Private Source
            </Button>
          )}

          {project.demoUrl && (
            <ProjectDemoModal demoUrl={project.demoUrl} title={project.title} />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <section className="lg:col-span-2 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-black mb-5">Tech Stack</h2>
            <ProjectTechStack
              techStack={project.techStack}
              maxVisible={project.techStack.length}
            />
          </section>

          <section className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl font-black mb-5">Category</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.category}
            </p>
          </section>
        </div>

        {project.parts && project.parts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <FaLayerGroup className="text-primary" /> Project Parts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.parts.map((part) => (
                <article
                  key={part.label}
                  className="rounded-2xl border border-border bg-card p-6 shadow-lg flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-3">{part.label}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
                    {part.description || 'Part details will be available soon.'}
                  </p>

                  <ProjectActionButtons
                    title={`${project.title} - ${part.label}`}
                    liveUrl={part.liveUrl}
                    githubUrl={part.githubUrl}
                    showDetails={false}
                  />
                </article>
              ))}
            </div>
          </section>
        )}

        {(project.highlights?.length || project.whatILearned?.length) && (
          <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {project.highlights && project.highlights.length > 0 && (
              <article className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-lg">
                <h2 className="text-2xl font-black mb-5">Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCircleCheck className="text-primary mt-1 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            {project.whatILearned && project.whatILearned.length > 0 && (
              <article className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-lg">
                <h2 className="text-2xl font-black mb-5">What I Learned</h2>
                <ul className="space-y-3">
                  {project.whatILearned.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCircleCheck className="text-primary mt-1 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </section>
        )}

        <section className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Need Something Like This?
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            I Build Reliable Products Without the Stress.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
            From planning and architecture to polished delivery, I can turn your
            idea into a production-ready web app with clean UX, strong
            performance, and zero unnecessary complexity for you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="font-bold"
            >
              <FaEnvelope /> Start Your Project
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              size="lg"
              className="font-bold"
            >
              More Projects <FaArrowRight />
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
