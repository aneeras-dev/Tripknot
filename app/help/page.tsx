import type { Metadata } from 'next';
import HelpCenter from '@/components/HelpCenter';

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Find answers to common questions, contact the Tripknot team, or report a bug.',
};

export default function HelpPage() {
  return <HelpCenter />;
}