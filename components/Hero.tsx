'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMagnetic } from '@/lib/useReveal';

const fadeUp = {
  hidden: { y: 32, opacity: 0 },
  show: (i = 0) => ({ y: 0, opacity: 1, transition: { delay: 0.1 * i, duration: 0.9, ease: [0.22, 1, 0.36, 1] } })
};

const CARD_SHADOW = '0 4px 32px rgba(11,16,15,0.10), 0 1px 3px rgba(11,16,15,0.06)';
const PHONE_SHADOW = '0 48px 96px -20px rgba(11,16,15,0.48), 0 2px 0 rgba(255,255,255,0.05) inset';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yPhone = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const cta = useMagnetic<HTMLAnchorElement>(0.25);

  return (
    <header ref={ref} className="relative overflow-hidden pt-[84px] pb-[60px]" style={{ isolation: 'isolate' }} data-screen-label="Hero">
      <div
        className="absolute inset-x-[-10%] -bottom-40 h-[520px] z-0 blur-[10px]"
        style={{
          background:
            'radial-gradient(45% 60% at 30% 50%, rgba(13,122,123,0.18), transparent 70%), radial-gradient(40% 55% at 75% 60%, rgba(184,74,50,0.10), transparent 72%)'
        }}
      />

      <div className="container-x relative z-[2] text-center">
        <motion.div className="eyebrow" initial="hidden" animate="show" variants={fadeUp} custom={0}>
          Smart travel · for the curious
        </motion.div>
        <motion.h1
          initial="hidden" animate="show" variants={fadeUp} custom={1}
          className="display mt-[14px] mb-[18px]"
          style={{ fontSize: 'clamp(48px,8.2vw,116px)' }}
        >
          Travel smarter.<br />
          <em className="not-italic text-teal font-display">Experience more.</em>
        </motion.h1>
        <motion.p
          initial="hidden" animate="show" variants={fadeUp} custom={2}
          className="mx-auto mb-9 max-w-[680px] text-[19px] leading-[1.45] text-muted"
        >
          Tripknot helps travelers generate smart itineraries, discover hidden gems, explore weekend
          escapes, and connect with like-minded travelers — all in one elegant app.
        </motion.p>
        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-[14px]">
          <a ref={cta} href="#cta" className="btn btn-primary btn-lg">
            Generate your trip
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a href="#destinations" className="btn btn-outline btn-lg">Explore destinations</a>
        </motion.div>

        {/* Canvas */}
        <div className="relative mt-16 h-[580px] max-lg:h-auto max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-6">

          {/* Card 1 – left (desktop only) */}
          <motion.div
            style={{ y: yCard1, boxShadow: CARD_SHADOW }}
            className="hidden lg:block absolute left-[5%] top-[55px] w-[252px] rounded-[22px] bg-white p-[18px] z-10"
          >
            <FloatCard1 />
          </motion.div>

          {/* Card 2 – right (desktop only) */}
          <motion.div
            style={{ y: yCard2, boxShadow: CARD_SHADOW }}
            className="hidden lg:block absolute right-[5%] top-[80px] w-[268px] rounded-[22px] bg-white p-[18px] z-10"
          >
            <FloatCard2 />
          </motion.div>

          {/* Phone – outer div owns the centering position, inner motion owns parallax */}
          <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-[52%] max-lg:mx-auto z-20">
            <motion.div
              style={{ y: yPhone, background: '#0D0F0E', boxShadow: PHONE_SHADOW }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-[272px] h-[554px] rounded-[44px] p-[8px]"
            >
              <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-black">
                <span className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[88px] h-[24px] bg-black rounded-[12px] z-[3]" />
                <Image src="/screens/screen-ooty.png" alt="Tripknot app" fill priority sizes="272px" style={{ objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>

          {/* Card 3 – outer div owns centering position, inner motion owns entrance */}
          <div className="lg:absolute lg:left-1/2 lg:bottom-[10px] lg:-translate-x-1/2 max-lg:mt-2 z-30">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ boxShadow: CARD_SHADOW }}
              className="w-[408px] max-[440px]:w-[92vw] rounded-[22px] bg-white p-[18px]"
            >
              <FloatCard3 />
            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}

function FloatCard1() {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="w-[52px] h-[52px] rounded-[16px] flex-none relative overflow-hidden">
          <Image src="/images/pondicherry.png" alt="Pondicherry" fill sizes="52px" className="object-cover" />
        </div>
        <div>
          <div className="font-semibold text-[14.5px] leading-snug">Pondicherry Heritage Walk</div>
          <div className="text-[12px] text-muted mt-[3px]">3 days · From ₹5,500</div>
        </div>
      </div>
      <div className="mt-3.5 h-[5px] bg-[rgba(14,20,19,0.07)] rounded-full overflow-hidden">
        <i className="block h-full rounded-full" style={{ width: '45%', background: 'linear-gradient(90deg,#0D7A7B,#46a6a7)' }} />
      </div>
      <div className="flex justify-between items-center mt-[14px]">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-[5px] rounded-full bg-[rgba(13,122,123,0.10)] text-teal font-semibold text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-teal" /> Best in October
        </span>
        <span className="text-[12px] text-muted">★ 4.9</span>
      </div>
    </>
  );
}

function FloatCard2() {
  return (
    <>
      <div className="flex justify-between items-center mb-2.5">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-[5px] rounded-full text-[11px] font-semibold" style={{ background: 'rgba(184,74,50,0.10)', color: 'var(--rust)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--rust)' }} /> Hidden gem
        </span>
        <span className="text-[11px] text-muted">2.1 km away</span>
      </div>
      <div className="font-semibold text-[16px] leading-snug">Sunset at Promenade</div>
      <div className="text-[12px] text-muted mt-1 mb-3 leading-relaxed">Walk along Rock Beach — best between 5–6pm</div>
      <div className="flex gap-2">
        {['/images/itinenary/promenade.jpeg', '/images/itinenary/rockbeach.jpg', '/images/beach.JPG'].map((src, i) => (
          <div key={i} className="h-[44px] flex-1 rounded-[10px] relative overflow-hidden">
            <Image src={src} alt="" fill sizes="80px" className="object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

function FloatCard3() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[10.5px] tracking-[0.16em] uppercase text-muted font-semibold">Today's plan · Day 2</div>
          <div className="font-semibold text-[16px] mt-1.5">Auroville → Paradise Beach</div>
        </div>
        <div className="flex items-center">
          {[1, 2, 3].map((n, k) => (
            <div key={n} className={`w-7 h-7 rounded-full border-2 border-white overflow-hidden relative flex-shrink-0 ${k ? '-ml-2' : ''}`}>
              <Image src={`/images/profile/profile-${n}.png`} alt="" fill sizes="28px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-3.5">
        <div className="flex-1 px-3 py-2.5 rounded-[10px] text-center text-[11.5px] font-semibold" style={{ background: 'rgba(13,122,123,0.12)', color: 'var(--teal)' }}>9:30 · Café</div>
        <div className="flex-1 px-3 py-2.5 rounded-[10px] text-center text-[11.5px] font-semibold text-muted" style={{ background: 'rgba(14,20,19,0.05)' }}>11:00 · Matrimandir</div>
        <div className="flex-1 px-3 py-2.5 rounded-[10px] text-center text-[11.5px] font-semibold text-muted" style={{ background: 'rgba(14,20,19,0.05)' }}>4:00 · Beach</div>
      </div>
    </>
  );
}
