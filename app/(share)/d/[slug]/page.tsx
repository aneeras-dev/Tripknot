import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShareLanding from '@/components/ShareLanding';
import { getShareView } from '@/lib/share';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const view = await getShareView('destination', slug);
  return pageMetadata({
    title: view?.title ?? 'A destination on TripKnot',
    description: view?.description ?? 'Explore this destination in the TripKnot app.',
    path: `/d/${slug}`,
    image: view?.image,
    noindex: true,
  });
}

export default async function SharedDestinationPage({ params }: Props) {
  const { slug } = await params;
  const view = await getShareView('destination', slug);
  if (!view) notFound();
  return <ShareLanding view={view} />;
}
