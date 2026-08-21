import type { MetadataRoute } from 'next';
import { legalDocs } from '@/lib/legal-docs';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/help`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/legal`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    ...legalDocs.map((doc) => ({
      url: `${SITE_URL}/legal/${doc.slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
