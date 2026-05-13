import type { Metadata } from 'next';
import { Bricolage_Grotesque, Figtree } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/Cursor';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700', '800']
});
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: {
    default: 'Tripknot — Travel smarter. Experience more.',
    template: '%s | Tripknot',
  },
  description:
    'Smart itineraries, hidden gems, weekend escapes, and trips with like-minded travelers — all in one elegant app.',
  keywords: [
    'travel app', 'trip planner', 'itinerary generator', 'hidden gems',
    'weekend trips India', 'travel with strangers', 'Pondicherry', 'Ooty',
    'Manali', 'Varkala', 'Goa travel', 'smart travel', 'Tripknot'
  ],
  authors: [{ name: 'Tripknot', url: 'https://tripknot.in' }],
  creator: 'Tripknot',
  metadataBase: new URL('https://tripknot.in'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Tripknot — Travel smarter. Experience more.',
    description:
      'Smart itineraries, hidden gems, weekend escapes, and trips with like-minded travelers — all in one elegant app.',
    url: 'https://tripknot.in',
    siteName: 'Tripknot',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tripknot — Travel smarter. Experience more.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tripknot — Travel smarter. Experience more.',
    description:
      'Smart itineraries, hidden gems, weekend escapes, and trips with like-minded travelers — all in one elegant app.',
    images: ['/og-image.png'],
    creator: '@tripknotapp',
  },
};

const GTM_ID = 'GTM-NJSXTBFC';
const GA_ID = 'G-8GMEQ6NR82';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-script" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            className="hidden"
          />
        </noscript>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
