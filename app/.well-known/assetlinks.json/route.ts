import { NextResponse } from 'next/server';

/**
 * Digital Asset Links — enables Android App Links (autoVerify) for the TripKnot app.
 *
 * Must be served at https://tripknot.in/.well-known/assetlinks.json (and on www)
 * as `application/json`, over HTTPS, with NO redirect.
 *
 * SHA-256 fingerprints come from `ANDROID_CERT_SHA256` (comma-separated) set in
 * the Vercel project env. Include BOTH:
 *   - the Play App Signing certificate  (Play Console → Test and release →
 *     App integrity → App signing key certificate)
 *   - the upload / dev certificate      (so internal-track + local builds verify)
 */
// Dynamic so the fingerprints are read from env at request time — setting
// ANDROID_CERT_SHA256 in Vercel takes effect without a code change / rebuild.
export const dynamic = 'force-dynamic';

const ANDROID_PACKAGE = 'com.tripknot.app';

export function GET() {
  const fingerprints = (process.env.ANDROID_CERT_SHA256 ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const body = [
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: ANDROID_PACKAGE,
        sha256_cert_fingerprints: fingerprints,
      },
    },
  ];

  return NextResponse.json(body, {
    headers: { 'Cache-Control': 'public, max-age=3600' },
  });
}
