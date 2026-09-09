import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShareLanding from '@/components/ShareLanding';
import { getShareView } from '@/lib/share';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ id: string }> };

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const view = await getShareView('trip', id);
  return pageMetadata({
    title: view?.title ?? 'Group trip on TripKnot',
    description: view?.description ?? 'Join this group trip in the TripKnot app.',
    path: `/t/${id}`,
    image: view?.image,
    noindex: true,
  });
}

export default async function SharedTripPage({ params }: Props) {
  const { id } = await params;
  const view = await getShareView('trip', id);
  if (!view) notFound();
  return <ShareLanding view={view} />;
}
