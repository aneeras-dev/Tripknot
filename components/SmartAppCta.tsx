'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { APP_SCHEME, APP_STORE_URL, PLAY_STORE_URL } from '@/lib/seo';

type Platform = 'ios' | 'android' | 'other';

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'other';
}

const BADGE_BOX =
  'flex items-center justify-center w-[180px] h-[54px] rounded-[9px] overflow-hidden transition-shadow duration-300';

/**
 * Landing-page call-to-action for a shared entity.
 * - "Open in app" → `tripknotapp://<deepLinkPath>` (no-op if the app isn't installed).
 * - Store badges, reordered so the visitor's platform comes first.
 *
 * No auto-redirect timers — iOS Universal Links / Android App Links already hand
 * off to the app before this page renders when the app is installed; this page is
 * the fallback for everyone else.
 */
export default function SmartAppCta({ deepLinkPath }: { deepLinkPath: string }) {
  const [platform, setPlatform] = useState<Platform>('other');
  useEffect(() => setPlatform(detectPlatform()), []);

  const appLink = `${APP_SCHEME}://${deepLinkPath}`;

  const appStore = (
    <a
      key="ios"
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download TripKnot on the App Store"
      className={BADGE_BOX}
      style={{ background: '#000', boxShadow: '0 8px 24px rgba(0,0,0,0.14)' }}
    >
      <Image src="/appstore.svg" alt="Download on the App Store" width={180} height={54} unoptimized className="block h-full w-auto" />
    </a>
  );

  const playStore = (
    <a
      key="android"
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get TripKnot on Google Play"
      className={BADGE_BOX}
      style={{ background: '#fff', border: '1px solid rgba(13,13,13,0.10)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
    >
      <Image src="/playstore.svg" alt="Get it on Google Play" width={180} height={54} unoptimized className="block h-full w-auto" />
    </a>
  );

  const badges = platform === 'android' ? [playStore, appStore] : [appStore, playStore];

  return (
    <div className="flex flex-col items-center gap-5">
      <a href={appLink} className="btn btn-primary btn-lg">
        Open in the TripKnot app
      </a>
      <div className="flex flex-wrap items-center justify-center gap-4">{badges}</div>
      <p className="text-[13px] text-muted">
        Don&apos;t have the app? Install it, then open this link again.
      </p>
    </div>
  );
}
