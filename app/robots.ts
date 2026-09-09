import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Per-user share links — not for indexing.
      disallow: ['/i/', '/t/'],
    },
    sitemap: 'https://tripknot.in/sitemap.xml',
  };
}
