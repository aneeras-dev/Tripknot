import type { Metadata } from 'next';

export const SITE_URL = 'https://tripknot.in';
export const APP_STORE_URL = 'https://apps.apple.com/in/app/tripknot/id6781707127';

/**
 * Builds per-route metadata with a correct canonical + Open Graph URL.
 *
 * Next.js merges metadata shallowly, so a canonical (or an `openGraph` block)
 * declared on the root layout leaks onto every child route. Both are therefore
 * set per page here rather than inherited.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Tripknot',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 2400,
          height: 1200,
          alt: 'Tripknot — Travel smarter. Experience more.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}
