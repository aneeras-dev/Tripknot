'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/lib/useReveal';
import EarlyAccessModal from './EarlyAccessModal';

export default function FinalCTA() {
  const cta = useMagnetic<HTMLButtonElement>(0.3);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="cta" className="text-center relative overflow-hidden py-[160px]" style={{ background: 'linear-gradient(160deg,#EEF8F8 0%,#FAF7F2 45%,#FDF1E8 100%)' }} data-screen-label="Final CTA">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(55% 50% at 50% 0%, rgba(91,193,194,0.18), transparent 60%), radial-gradient(40% 40% at 50% 100%, rgba(232,168,108,0.14), transparent 60%)' }} />
        <div className="container-x relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow" style={{ color: '#0D7A7B' }}>Your next journey</div>
            <h2 className="font-display font-semibold tracking-[-0.035em] leading-[0.98] m-0 mb-5" style={{ fontSize: 'clamp(48px,7vw,108px)', color: 'var(--ink)' }}>Your next journey<br />starts here.</h2>
            <p className="text-[19px] max-w-[560px] mx-auto leading-[1.5] mb-9" style={{ color: '#6B6B66' }}>Discover destinations, generate trips, and experience travel differently with Tripknot.</p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <button
                ref={cta}
                type="button"
                className="btn btn-primary btn-lg"
                style={{ background: 'var(--ink)', color: '#fff' }}
                onClick={() => setModalOpen(true)}
              >
                Join early access
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EarlyAccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
