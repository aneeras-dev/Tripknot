import { NextResponse, type NextRequest } from 'next/server';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/seo';

/**
 * Share links — `/i /t /p /d /s/*` — are deep links into the TripKnot app.
 *
 * When the app is installed, the OS (iOS Universal Links / Android App Links)
 * opens it directly and this middleware never runs. It runs only when the link
 * is opened in a browser — i.e. the app is NOT installed (or an in-app webview
 * that ignores app links) — and its whole job is to send the visitor to the
 * right store to download the app.
 *
 * The marketing site does not render a preview of the shared content; the app
 * itself is the only place that content is shown.
 */
export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') ?? '';

  const target = /iPhone|iPad|iPod/i.test(ua)
    ? APP_STORE_URL
    : /Android/i.test(ua)
      ? PLAY_STORE_URL
      : new URL('/', req.url); // desktop / crawlers → marketing home

  // Temporary + uncached: the same URL behaves differently once the app is
  // installed (the OS intercepts it and this never runs).
  const res = NextResponse.redirect(target, 307);
  res.headers.set('Cache-Control', 'no-store');
  return res;
}

export const config = {
  matcher: ['/i/:path*', '/t/:path*', '/p/:path*', '/d/:path*', '/s/:path*'],
};
