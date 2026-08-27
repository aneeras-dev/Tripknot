'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/seo';

const BADGE_BOX = 'flex items-center justify-center w-[190px] h-[56px] rounded-[9px] overflow-hidden transition-shadow duration-300';

export default function FinalCTA() {
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

            <div className="flex gap-6 justify-center items-center flex-wrap">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Tripknot on the App Store"
                className={`${BADGE_BOX} hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]`}
                style={{ background: '#000', boxShadow: '0 8px 24px rgba(0,0,0,0.14)' }}
              >
                <Image src="/appstore.svg" alt="Download on the App Store" width={190} height={56} unoptimized className="block h-full w-auto" />
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Tripknot on Google Play"
                className={`${BADGE_BOX} hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]`}
                style={{ background: '#fff', border: '1px solid rgba(13,13,13,0.10)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
              >
                <Image src="/playstore.svg" alt="Get it on Google Play" width={190} height={56} unoptimized className="block h-full w-auto" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
