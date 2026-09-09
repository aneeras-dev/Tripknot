import { NextResponse } from 'next/server';

/**
 * Apple App Site Association — enables iOS Universal Links for the TripKnot app.
 *
 * Must be served at https://tripknot.in/.well-known/apple-app-site-association
 * (and on www) as `application/json`, over HTTPS, with NO redirect.
 *
 * `appID` = <Apple Team ID>.<bundle identifier>.
 * `paths` mirror the share link prefixes handled by the app's `+native-intent`.
 */
export const dynamic = 'force-static';

const APPLE_TEAM_ID = 'JW9T6352GX';
const IOS_BUNDLE_ID = 'com.tripknot.app';

const body = {
  applinks: {
    apps: [],
    details: [
      {
        appID: `${APPLE_TEAM_ID}.${IOS_BUNDLE_ID}`,
        paths: ['/i/*', '/t/*', '/p/*', '/d/*', '/s/*'],
      },
    ],
  },
};

export function GET() {
  return NextResponse.json(body, {
    headers: { 'Cache-Control': 'public, max-age=3600' },
  });
}
