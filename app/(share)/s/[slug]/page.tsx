import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShareLanding from '@/components/ShareLanding';
import { getShareView } from '@/lib/share';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const view = await getShareView('state', slug);
  return pageMetadata({
    title: view?.title ?? 'Explore India on TripKnot',
    description: view?.description ?? 'Explore this state in the TripKnot app.',
    path: `/s/${slug}`,
    image: view?.image,
    noindex: true,
  });
}

export default async function SharedStatePage({ params }: Props) {
  const { slug } = await params;
  const view = await getShareView('state', slug);
  if (!view) notFound();
  return <ShareLanding view={view} />;
}
