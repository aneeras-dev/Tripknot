'use client';
import { motion } from 'framer-motion';
import { SectionHead } from './Explore';

const steps = [
  { n: '01', t: 'Select destination', p: 'Pick a city, a mood, or just say "somewhere green for a long weekend." We\'ll take it from there.', icon: <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /> },
  { n: '02', t: 'Generate your trip', p: 'A day-by-day plan appears in seconds, drawn around your pace, budget and the best time to visit each place.', icon: <path d="M2 12l5-5 5 5 5-5 5 5M2 19l5-5 5 5 5-5 5 5" /> },
  { n: '03', t: 'Explore like a local', p: 'Carry it offline, swap spots on the fly, and add hidden gems as you go. Travel that flexes with you.', icon: <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z" /> }
];

export default function HowItWorks() {
  return (
    <section className="py-[120px]" data-screen-label="How it works">
      <div className="container-x">
        <SectionHead eyebrow="How it works" title="Three calm steps." sub="From a single search to a full day already drawn on a map — Tripknot keeps planning out of the way." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] mt-[60px]">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, backgroundColor: '#fff' }}
              className="border border-[var(--line)] rounded-[24px] p-8 bg-white/40 backdrop-blur relative transition-colors"
            >
              <div className="absolute top-8 right-8 w-[42px] h-[42px] rounded-[12px] grid place-items-center text-teal" style={{ background: 'rgba(13,122,123,0.10)' }}>
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>{s.icon}</svg>
              </div>
              <div className="font-display text-[80px] tracking-[-0.04em] text-teal leading-none mb-6">{s.n}</div>
              <h4 className="font-display font-semibold text-[24px] tracking-[-0.02em] m-0 mb-2">{s.t}</h4>
              <p className="text-muted text-[15px] leading-[1.5] m-0">{s.p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
