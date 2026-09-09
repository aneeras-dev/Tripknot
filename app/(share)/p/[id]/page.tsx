import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShareLanding from '@/components/ShareLanding';
import { getShareView } from '@/lib/share';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ id: string }> };

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const view = await getShareView('place', id);
  return pageMetadata({
    title: view?.title ?? 'A place on TripKnot',
    description: view?.description ?? 'Discover this place in the TripKnot app.',
    path: `/p/${id}`,
    image: view?.image,
    noindex: true,
  });
}

export default async function SharedPlacePage({ params }: Props) {
  const { id } = await params;
  const view = await getShareView('place', id);
  if (!view) notFound();
  return <ShareLanding view={view} />;
}
