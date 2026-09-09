import { SITE_URL, TRIPKNOT_API_URL } from '@/lib/seo';

/**
 * Server-side data layer for the share landing pages (`/i /t /p /d /s`).
 *
 * The TripKnot backend wraps every response in `{ status_code, message, data }`
 * and always returns HTTP 200 — the real status is `body.status_code`. So a
 * "not found" is `status_code !== 200` (or missing `data`), not `res.ok`.
 */

export type ShareKind = 'itinerary' | 'trip' | 'place' | 'destination' | 'state';

export type ShareFact = { label: string; value: string };

export type ShareView = {
  kind: ShareKind;
  /** Real in-app route path, e.g. `shared-itinerary/ABC12-3XYZ`. Used to build
   *  the `tripknotapp://` deep link for the "Open in app" button. */
  deepLinkPath: string;
  /** Canonical web path, e.g. `/i/ABC12-3XYZ`. */
  webPath: string;
  title: string;
  subtitle?: string;
  description: string;
  /** Absolute image URL, or undefined to fall back to the site OG card. */
  image?: string;
  facts: ShareFact[];
};

const API = TRIPKNOT_API_URL.replace(/\/$/, '');

async function apiGet<T>(path: string): Promise<T | null> {
  if (!API) return null;
  try {
    const res = await fetch(`${API}${path}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const body: unknown = await res.json();
    if (
      !body ||
      typeof body !== 'object' ||
      (body as { status_code?: number }).status_code !== 200 ||
      !(body as { data?: unknown }).data
    ) {
      return null;
    }
    return (body as { data: T }).data;
  } catch {
    return null;
  }
}

function absImage(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  if (/^https?:\/\//.test(url)) return url;
  return `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
}

function fmtDate(iso: string | null | undefined): string | undefined {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── Backend response shapes (only the fields we read) ─────────────────────────

type ItineraryDetail = {
  title: string;
  destination: string;
  total_days: number;
  total_people?: number;
  group_type?: string;
  budget_tier?: string;
  cover_image?: string | null;
  days?: { items?: unknown[] }[];
};

type TripPreview = {
  title: string;
  description: string;
  destination?: string | null;
  start_date?: string;
  end_date?: string;
  total_days: number;
  transport?: string;
  budget?: number;
  cover_photo_url?: string | null;
  photos?: string[];
  total_spots: number;
  spots_remaining: number;
  creator_name?: string | null;
};

type PlaceDetail = {
  name: string;
  description: string;
  city?: string;
  state?: string;
  category?: string;
  cover_image?: string | null;
  images?: string[];
  rating?: number;
  rating_count?: number;
};

type DestinationDetail = {
  name: string;
  tagline?: string;
  description: string;
  state?: string;
  country?: string;
  cover_image?: string | null;
  images?: string[];
  best_time_to_visit?: string;
};

type StateDetail = {
  name: string;
  capital?: string;
  region?: string;
  overview: string;
  cover_image?: string | null;
  images?: string[];
  best_time_to_visit?: string | null;
  top_attractions?: string[];
};

// ── Per-kind loaders ─────────────────────────────────────────────────────────

async function loadItinerary(code: string): Promise<ShareView | null> {
  const it = await apiGet<ItineraryDetail>(`/itineraries/shared/${encodeURIComponent(code)}`);
  if (!it) return null;
  const stops = (it.days ?? []).reduce((n, d) => n + (d.items?.length ?? 0), 0);
  return {
    kind: 'itinerary',
    deepLinkPath: `shared-itinerary/${code}`,
    webPath: `/i/${code}`,
    title: it.title,
    subtitle: `${it.total_days}-day trip · ${it.destination}`,
    description: `A ${it.total_days}-day TripKnot itinerary for ${it.destination}${
      stops ? ` with ${stops} stops` : ''
    }. Open it in the app to explore day by day.`,
    image: absImage(it.cover_image),
    facts: [
      { label: 'Destination', value: it.destination },
      { label: 'Length', value: `${it.total_days} days` },
      ...(stops ? [{ label: 'Stops', value: String(stops) }] : []),
    ],
  };
}

async function loadTrip(id: string): Promise<ShareView | null> {
  const t = await apiGet<TripPreview>(`/trips/${encodeURIComponent(id)}/preview`);
  if (!t) return null;
  const start = fmtDate(t.start_date);
  const end = fmtDate(t.end_date);
  const dates = start && end ? `${start} – ${end}` : start ?? undefined;
  return {
    kind: 'trip',
    deepLinkPath: `find-people/${id}`,
    webPath: `/t/${id}`,
    title: t.title,
    subtitle: [t.destination, dates].filter(Boolean).join(' · ') || undefined,
    description:
      t.description?.slice(0, 200) ||
      `Join this ${t.total_days}-day group trip on TripKnot.`,
    image: absImage(t.cover_photo_url ?? t.photos?.[0]),
    facts: [
      ...(t.destination ? [{ label: 'Destination', value: t.destination }] : []),
      ...(dates ? [{ label: 'Dates', value: dates }] : []),
      { label: 'Spots left', value: `${t.spots_remaining} of ${t.total_spots}` },
      ...(t.creator_name ? [{ label: 'Hosted by', value: t.creator_name }] : []),
    ],
  };
}

async function loadPlace(id: string): Promise<ShareView | null> {
  const p = await apiGet<PlaceDetail>(`/places/${encodeURIComponent(id)}`);
  if (!p) return null;
  const where = [p.city, p.state].filter(Boolean).join(', ');
  return {
    kind: 'place',
    deepLinkPath: `place/${id}`,
    webPath: `/p/${id}`,
    title: p.name,
    subtitle: where || undefined,
    description: p.description?.slice(0, 200) || `${p.name} on TripKnot.`,
    image: absImage(p.cover_image ?? p.images?.[0]),
    facts: [
      ...(where ? [{ label: 'Location', value: where }] : []),
      ...(p.category ? [{ label: 'Category', value: p.category }] : []),
      ...(p.rating
        ? [{ label: 'Rating', value: `${p.rating.toFixed(1)}★ (${p.rating_count ?? 0})` }]
        : []),
    ],
  };
}

async function loadDestination(slug: string): Promise<ShareView | null> {
  const d = await apiGet<DestinationDetail>(`/destinations/${encodeURIComponent(slug)}`);
  if (!d) return null;
  const where = [d.state, d.country].filter(Boolean).join(', ');
  return {
    kind: 'destination',
    deepLinkPath: `destination/${slug}`,
    webPath: `/d/${slug}`,
    title: d.name,
    subtitle: d.tagline || where || undefined,
    description: d.description?.slice(0, 200) || `Explore ${d.name} on TripKnot.`,
    image: absImage(d.cover_image ?? d.images?.[0]),
    facts: [
      ...(where ? [{ label: 'Region', value: where }] : []),
      ...(d.best_time_to_visit ? [{ label: 'Best time', value: d.best_time_to_visit }] : []),
    ],
  };
}

async function loadState(slug: string): Promise<ShareView | null> {
  const s = await apiGet<StateDetail>(`/states/${encodeURIComponent(slug)}`);
  if (!s) return null;
  return {
    kind: 'state',
    deepLinkPath: `state/${slug}`,
    webPath: `/s/${slug}`,
    title: s.name,
    subtitle: [s.region, s.capital && `Capital: ${s.capital}`].filter(Boolean).join(' · ') || undefined,
    description: s.overview?.slice(0, 200) || `Explore ${s.name} on TripKnot.`,
    image: absImage(s.cover_image ?? s.images?.[0]),
    facts: [
      ...(s.capital ? [{ label: 'Capital', value: s.capital }] : []),
      ...(s.best_time_to_visit ? [{ label: 'Best time', value: s.best_time_to_visit }] : []),
      ...(s.top_attractions?.length
        ? [{ label: 'Highlights', value: s.top_attractions.slice(0, 3).join(', ') }]
        : []),
    ],
  };
}

export function getShareView(kind: ShareKind, key: string): Promise<ShareView | null> {
  switch (kind) {
    case 'itinerary':
      return loadItinerary(key);
    case 'trip':
      return loadTrip(key);
    case 'place':
      return loadPlace(key);
    case 'destination':
      return loadDestination(key);
    case 'state':
      return loadState(key);
  }
}
