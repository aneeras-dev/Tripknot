import Image from 'next/image';
import Link from 'next/link';
import SmartAppCta from '@/components/SmartAppCta';
import type { ShareView } from '@/lib/share';

const KIND_EYEBROW: Record<ShareView['kind'], string> = {
  itinerary: 'Shared itinerary',
  trip: 'Group trip invite',
  place: 'Shared place',
  destination: 'Shared destination',
  state: 'Explore India',
};

export default function ShareLanding({ view }: { view: ShareView }) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-4">{KIND_EYEBROW[view.kind]}</p>
          <h1 className="display text-[34px] md:text-[52px] text-ink mb-3">{view.title}</h1>
          {view.subtitle && (
            <p className="text-[16px] md:text-[18px] text-muted mb-8">{view.subtitle}</p>
          )}

          {view.past && (
            <div className="mb-8 rounded-xl border border-ink/[0.08] bg-bg2 px-4 py-3 text-[14px] text-muted">
              This trip has already taken place.
            </div>
          )}

          {view.image && (
            <div className="relative mb-10 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-bg2">
              <Image
                src={view.image}
                alt={view.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                unoptimized
              />
            </div>
          )}

          <p className="text-[16px] leading-relaxed text-ink2 mb-10">{view.description}</p>

          {view.facts.length > 0 && (
            <dl className="mb-12 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-ink/[0.08] py-8">
              {view.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[12px] uppercase tracking-wider text-muted mb-1">{f.label}</dt>
                  <dd className="text-[15px] text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <SmartAppCta deepLinkPath={view.deepLinkPath} past={view.past} />

          <div className="mt-16 border-t border-ink/[0.08] pt-8 text-center">
            <Link
              href="/"
              className="text-[14px] font-medium text-muted transition-colors hover:text-teal"
            >
              ← tripknot.in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
