import type { MetadataRoute } from 'next';
import { projects, works } from '@/data';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en-US': siteConfig.url,
          'ar-EG': siteConfig.url,
        },
      },
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-US': `${siteConfig.url}/about`,
          'ar-EG': `${siteConfig.url}/about`,
        },
      },
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          'en-US': `${siteConfig.url}/projects`,
          'ar-EG': `${siteConfig.url}/projects`,
        },
      },
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-US': `${siteConfig.url}/contact`,
          'ar-EG': `${siteConfig.url}/contact`,
        },
      },
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = [...works, ...projects].map(
    (project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${siteConfig.url}/projects/${project.slug}`,
          'ar-EG': `${siteConfig.url}/projects/${project.slug}`,
        },
      },
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}
