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
    'Clean and elegant portfolio showcasing frontend engineering work, projects, certifications, and practical product experience. | معرض أعمال احترافي لعرض مشاريع تطوير الواجهات الأمامية والخبرة العملية بشكل واضح وسهل.',
  applicationName: siteConfig.name,
  alternates: createLocaleAlternates('/'),
  keywords: [
    'Abdulrahman Moussa',
    'Frontend Developer',
    'React Developer',
    'Next.js Portfolio',
    'TypeScript',
    'UI Engineering',
    'مطور واجهات أمامية',
    'مطور React',
    'بورتفوليو',
    'تطوير مواقع',
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
    'Frontend developer portfolio with selected projects, technical stack, and contact channels.',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: 'Frontend Developer',
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
