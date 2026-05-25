import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { legalDocs, getLegalDoc, type ContentBlock } from '@/lib/legal-docs';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return legalDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === 'p') {
    return (
      <p className="text-[15px] leading-[1.75] text-ink2">
        {block.text}
      </p>
    );
  }
  return (
    <ul className="list-disc pl-5 flex flex-col gap-1.5">
      {block.items.map((item, i) => (
        <li key={i} className="text-[15px] leading-[1.75] text-ink2">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function LegalDocPage({ params }: Props) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <div className="min-h-screen bg-bg">
      <div className="container-x py-16">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-[13px] text-muted">
          <Link href="/legal" className="hover:text-teal transition-colors">
            Legal
          </Link>
          <span>/</span>
          <span className="text-ink">{doc.title}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Header */}
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="display text-[36px] md:text-[48px] text-ink mb-4">
            {doc.title}
          </h1>
          <p className="text-[13px] mb-6 text-muted">
            Last updated: {doc.lastUpdated}
          </p>
          <p className="text-[16px] leading-relaxed mb-12 text-muted border-b border-ink/[0.08] pb-10">
            {doc.intro}
          </p>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-[18px] font-semibold mb-3 text-ink">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-ink/[0.08]">
            <Link
              href="/legal"
              className="text-[14px] font-medium text-muted hover:text-teal transition-colors"
            >
              ← Back to Legal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}