import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShareLanding from '@/components/ShareLanding';
import { getShareView } from '@/lib/share';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ code: string }> };

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const view = await getShareView('itinerary', code);
  return pageMetadata({
    title: view?.title ?? 'Shared itinerary',
    description: view?.description ?? 'View this itinerary in the TripKnot app.',
    path: `/i/${code}`,
    image: view?.image,
    noindex: true,
  });
}

export default async function SharedItineraryPage({ params }: Props) {
  const { code } = await params;
  const view = await getShareView('itinerary', code);
  if (!view) notFound();
  return <ShareLanding view={view} />;
}
