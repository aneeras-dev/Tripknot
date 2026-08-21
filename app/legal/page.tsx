import Link from 'next/link';
import { legalDocs } from '@/lib/legal-docs';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Legal',
  description: 'Privacy policy, terms of use, EULA, and other legal documents for Tripknot.',
  path: '/legal',
});

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="container-x py-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Tripknot</p>
          <h1 className="display text-[40px] md:text-[52px] text-ink mb-4">Legal</h1>
          <p className="text-[17px] leading-relaxed text-muted">
            Our legal documents explain your rights and responsibilities when using Tripknot.
            Please read them carefully.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {legalDocs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/legal/${doc.slug}`}
              className="group block rounded-2xl border border-ink/[0.08] bg-bg p-6 transition-all hover:shadow-md"
            >
              <h2 className="font-semibold text-[16px] mb-2 text-ink group-hover:text-teal transition-colors">
                {doc.title}
              </h2>
              <p className="text-[13.5px] leading-relaxed mb-4 text-muted">
                {doc.description}
              </p>
              <span className="text-[12px] font-medium text-teal">
                Read →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-[13px] text-muted">
          Questions about our legal policies?{' '}
          <a href="mailto:hello@tripknot.in" className="underline hover:text-teal">
            hello@tripknot.in
          </a>
        </p>
      </div>
    </div>
  );
}