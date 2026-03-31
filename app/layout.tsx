import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import { createLocaleAlternates } from '@/lib/seo';
import { Outfit, Roboto_Mono } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/layout/navbar';
import GoToTop from '@/components/shared/go-to-top';
import Footer from '@/components/layout/footer';

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | Abdulrahman Moussa',
  },
  description:
    'Expert Frontend Developer & React/Next.js Engineer based in Egypt. Explore a showcase of scalable web applications, interactive frontend projects, and practical product engineering experience. | معرض أعمال عبدالرحمن موسى، مطور واجهات أمامية وخبير في بناء وتطوير تطبيقات الويب باستخدام React.',
  applicationName: siteConfig.name,
  alternates: createLocaleAlternates('/'),
  keywords: [
    'Abdulrahman Moussa',
    'عبدالرحمن موسى',
    'Frontend Developer',
    'React Developer',
    'React.js',
    'Next.js Developer',
    'Next.js Portfolio',
    'TypeScript',
    'UI Engineering',
    'مطور واجهات أمامية',
    'مطور React',
    'بورتفوليو',
    'تطوير مواقع',
    'Egypt Frontend Developer',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdulrahman Moussa portfolio homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'EG-C',
    'geo.placename': 'Cairo',
    'geo.position': '30.0444;31.2357',
    ICBM: '30.0444, 31.2357',
    'content-language': 'en, ar',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: ['en', 'ar'],
  description:
    'Frontend developer and React/Next.js engineer portfolio for Abdulrahman Moussa. Discover web development projects, UI engineering skills, and contact channels.',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  alternateName: 'عبدالرحمن موسى',
  jobTitle: 'Frontend Developer, React & Next.js Engineer',
  description:
    'Frontend Developer specializing in React, Next.js, and modern TypeScript web applications.',
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  knowsLanguage: ['en', 'ar'],
  sameAs: siteConfig.socialLinks.map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${robotoMono.variable} h-full antialiased black`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}
