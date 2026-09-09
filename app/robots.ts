import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Share deep links — these just redirect to the app store, nothing to index.
      disallow: ['/i/', '/t/', '/p/', '/d/', '/s/'],
    },
    sitemap: 'https://tripknot.in/sitemap.xml',
  };
}
