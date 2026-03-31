import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, works } from '@/data';
import { siteConfig } from '@/lib/site';
import { createLocaleAlternates } from '@/lib/seo';

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

const DEFAULT_PROJECT_KEYWORDS = [
  'project details',
  'case study',
  'frontend project',
  'software project',
  'web development',
] as const;

function toAbsoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith('/')
    ? pathOrUrl
    : `/${pathOrUrl}`;
  return `${siteConfig.url}${normalizedPath}`;
}

function getProjectImageUrl(image: string | { src: string }) {
  return typeof image === 'string' ? image : image.src;
}

function buildProjectKeywords(tags: string[]) {
  return Array.from(new Set([...DEFAULT_PROJECT_KEYWORDS, ...tags]));
}

function getProject(slug: string) {
  return (
    works.find((work) => work.slug === slug) ??
    projects.find((project) => project.slug === slug)
  );
}

export async function generateStaticParams() {
  return [...works, ...projects].map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }

  const imageUrl = getProjectImageUrl(project.image);
  const projectPath = `/projects/${project.slug}`;
  const projectUrl = toAbsoluteUrl(projectPath);
  const imageAbsoluteUrl = toAbsoluteUrl(imageUrl);
  const keywords = buildProjectKeywords(project.tags);

  return {
    title: `${project.title} | Project Details`,
    description: project.description,
    keywords,
    category: 'technology',
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: createLocaleAlternates(projectPath),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${project.title} | Project Details`,
      description: project.description,
      type: 'article',
      url: projectUrl,
      siteName: siteConfig.name,
      locale: 'en_US',
      alternateLocale: 'ar_EG',
      tags: project.tags,
      images: [
        {
          url: imageAbsoluteUrl,
          alt: project.title,
        },
      ],
    },
    twitter: {
      title: `${project.title} | Abdulrahman Moussa`,
      card: 'summary_large_image',
      description: project.description,
      creator: '@3bdulrahmn69',
      site: '@3bdulrahmn69',
      images: [imageAbsoluteUrl],
    },
  };
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectPath = `/projects/${project.slug}`;
  const projectUrl = toAbsoluteUrl(projectPath);
  const imageAbsoluteUrl = toAbsoluteUrl(getProjectImageUrl(project.image));

  // Rich JSON-LD graph helps search engines and AI systems parse relationships.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${projectUrl}#webpage`,
        url: projectUrl,
        name: `${project.title} | Project Details`,
        description: project.description,
        inLanguage: 'en',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${siteConfig.url}#website`,
          name: siteConfig.name,
          url: siteConfig.url,
        },
        breadcrumb: {
          '@id': `${projectUrl}#breadcrumb`,
        },
        primaryImageOfPage: {
          '@id': `${projectUrl}#primaryimage`,
        },
      },
      {
        '@type': 'ImageObject',
        '@id': `${projectUrl}#primaryimage`,
        contentUrl: imageAbsoluteUrl,
        url: imageAbsoluteUrl,
        caption: project.title,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${projectUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${siteConfig.url}/projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
      {
        '@type': 'SoftwareSourceCode',
        '@id': `${projectUrl}#software`,
        name: project.title,
        description: project.description,
        url: projectUrl,
        image: imageAbsoluteUrl,
        dateCreated: project.year ? `${project.year}-01-01` : undefined,
        dateModified: project.year ? `${project.year}-12-31` : undefined,
        inLanguage: 'en',
        author: {
          '@type': 'Person',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        creator: {
          '@type': 'Person',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        codeSampleType: project.type,
        programmingLanguage: project.techStack,
        keywords: project.tags.join(', '),
        applicationCategory: project.category,
        ...(project.githubUrl && { codeRepository: project.githubUrl }),
        ...(project.liveUrl && { url: project.liveUrl }),
        ...(typeof project.paid === 'boolean' && {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: project.paid ? '1' : '0',
            availability: 'https://schema.org/InStock',
          },
        }),
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
      },
    ],
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
