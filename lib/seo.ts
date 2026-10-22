import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

const GEO_META = {
  'geo.region': 'EG-C',
  'geo.placename': 'Cairo',
  'geo.position': '30.0444;31.2357',
  ICBM: '30.0444, 31.2357',
  'content-language': 'en',
} as const;

const DEFAULT_KEYWORDS = [
  'Abdulrahman Moussa',
  'Frontend Developer',
  'Frontend Engineer',
  'React Developer',
  'React.js Developer',
  'Next.js Developer',
  'Next.js Portfolio',
  'TypeScript Developer',
  'UI Engineering',
  'Web Developer Egypt',
  'Software Engineer',
  'مطور واجهات أمامية',
  'مطور React',
  'مطور Next.js',
  'عبدالرحمن موسى',
  'بورتفوليو',
  'تطوير مواقع',
] as const;

function buildAbsoluteUrl(path: string): string {
  if (path === '/') return siteConfig.url;
  return `${siteConfig.url}${path.startsWith('/') ? '' : '/'}${path}`;
}

function buildAlternates(path: string): Metadata['alternates'] {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return {
    canonical: normalizedPath,
  };
}

function mergeKeywords(customKeywords: string[] = []): string[] {
  return Array.from(new Set([...DEFAULT_KEYWORDS, ...customKeywords]));
}

type PageMetadataInput = {
  title: string;
  path: string;
  description: string;
  ogImage: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'profile';
};

export function createPageMetadata({
  title,
  path,
  description,
  ogImage,
  keywords,
  type = 'website',
}: PageMetadataInput): Metadata {
  const pageUrl = buildAbsoluteUrl(path);
  const absoluteOgImage = buildAbsoluteUrl(ogImage);

  return {
    title,
    description,
    alternates: buildAlternates(path),
    keywords: mergeKeywords(keywords),
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      type,
      locale: 'en_US',
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteOgImage],
      site: '@abdulrahmonssa',
      creator: '@abdulrahmonssa',
    },
    other: GEO_META,
  };
}

export function createLocaleAlternates(path: string): Metadata['alternates'] {
  return buildAlternates(path);
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path),
    })),
  };
}
