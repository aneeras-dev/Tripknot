import type { Metadata } from 'next';
import { Bricolage_Grotesque, Figtree } from 'next/font/google';
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
  title: 'Tripknot — Travel smarter. Experience more.',
  description:
    'Smart itineraries, hidden gems, weekend escapes, and trips with like-minded travelers — all in one elegant app.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Tripknot — Travel smarter. Experience more.',
    description:
      'Smart itineraries, hidden gems, weekend escapes, and trips with like-minded travelers — all in one elegant app.',
    url: 'https://tripknot.in',
    siteName: 'Tripknot',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 296,
        alt: 'Tripknot — Don\'t Just Travel. Connect.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tripknot — Travel smarter. Experience more.',
    description:
      'Smart itineraries, hidden gems, weekend escapes, and trips with like-minded travelers — all in one elegant app.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <body>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
