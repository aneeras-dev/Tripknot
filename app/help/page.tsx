import { pageMetadata } from '@/lib/seo';
import { FAQ_SECTIONS } from '@/lib/faqs';
import HelpCenter from '@/components/HelpCenter';

export const metadata = pageMetadata({
  title: 'Help Center',
  description: 'Find answers to common questions, contact the Tripknot team, or report a bug.',
  path: '/help',
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://tripknot.in/help#faq',
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  ),
};

export default function HelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HelpCenter />
    </>
  );
}
