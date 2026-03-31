import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

const GEO_META = {
  'geo.region': 'EG-C',
  'geo.placename': 'Cairo',
  'geo.position': '30.0444;31.2357',
  ICBM: '30.0444, 31.2357',
  'content-language': 'en, ar',
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
    languages: {
      'en-US': normalizedPath,
      'ar-EG': normalizedPath,
    },
  };
}

function mergeKeywords(customKeywords: string[] = []): string[] {
  return Array.from(new Set([...DEFAULT_KEYWORDS, ...customKeywords]));
}

type BilingualPageMetadataInput = {
  title: string;
  path: string;
  descriptionEn: string;
  descriptionAr: string;
  ogImage: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'profile';
};

export function createBilingualPageMetadata({
  title,
  path,
  descriptionEn,
  descriptionAr,
  ogImage,
  keywords,
  type = 'website',
}: BilingualPageMetadataInput): Metadata {
  const description = `${descriptionEn} | ${descriptionAr}`;
  const pageUrl = buildAbsoluteUrl(path);

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
      alternateLocale: 'ar_EG',
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
      site: '@3bdulrahmn69',
      creator: '@3bdulrahmn69',
    },
    other: GEO_META,
  };
}

export function createLocaleAlternates(path: string): Metadata['alternates'] {
  return buildAlternates(path);
}

export function createBilingualDescription(
  descriptionEn: string,
  descriptionAr: string,
): string {
  return `${descriptionEn} | ${descriptionAr}`;
}
