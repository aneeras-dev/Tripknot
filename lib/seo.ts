import type { Metadata } from 'next';

export const SITE_URL = 'https://tripknot.in';
export const APP_STORE_URL = 'https://apps.apple.com/in/app/tripknot/id6781707127';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.tripknot.app';

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
  image,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  /** Absolute image URL. Defaults to the site-wide OG card. */
  image?: string;
  /** Keep the page out of search results (per-user share links). */
  noindex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const images = image
    ? [{ url: image, alt: title }]
    : [
        {
          url: '/og-image.png',
          width: 2400,
          height: 1200,
          alt: 'Tripknot — Travel smarter. Experience more.',
        },
      ];
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: 'Tripknot',
      locale: 'en_IN',
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((i) => i.url),
    },
  };
}
