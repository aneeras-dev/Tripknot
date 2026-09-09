import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tripknot — Travel smarter. Experience more.',
    short_name: 'Tripknot',
    description:
      'Smart itineraries, hidden gems, weekend escapes, and trips with like-minded travelers — all in one elegant app.',
    // 'browser' (not 'standalone') so Chrome on Android does NOT treat the
    // marketing site as an installable PWA and stop popping the "Install app"
    // prompt over share links. The site's job is to send people to the native
    // app stores, not to be installed itself.
    start_url: '/',
    display: 'browser',
    background_color: '#FAF7F2',
    theme_color: '#0D7A7B',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
