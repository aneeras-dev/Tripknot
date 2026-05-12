'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '@/lib/useReveal';
import type { MapStop } from './MapView';

const MapView = dynamic(() => import('./MapView'), {
  ssr: false,
  loading: () => <div className="w-full h-full" style={{ background: '#e8e4dc' }} />,
});

const check = (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#0D7A7B" strokeWidth={2} strokeLinecap="round"><path d="M5 12l4 4L19 6" /></svg>
);

type DayData = {
  stops: MapStop[];
  items: { t: string; m: string; time: string; img: string }[];
};

const DAYS: DayData[] = [
  {
    stops: [
      { n: 1, label: "Auroville", coords: [11.9343, 79.8073] },
      { n: 2, label: "Matrimandir", coords: [11.9309, 79.8186], rust: true },
    ],
    items: [
      {
        t: "Auroville Centre",
        m: "Forest walk · Morning",
        time: "9:00 AM",
        img: "/images/itinenary/vc.jpg",
      },
      {
        t: "Matrimandir Visit",
        m: "Auroville · Sacred space",
        time: "11:30 AM",
        img: "/images/itinenary/matrimandir.jpg",
      },
      {
        t: "Café Xtasi",
        m: "Lunch · Rue Suffren",
        time: "1:30 PM",
        img: "/images/itinenary/xtasi.jpg",
      },
    ],
  },
  {
    stops: [
      { n: 1, label: "Auroville", coords: [11.9343, 79.8073] },
      { n: 2, label: "Promenade", coords: [11.9308, 79.8318], rust: true },
    ],
    items: [
      {
        t: "Café des Arts",
        m: "Breakfast · French quarter",
        time: "9:30 AM",
        img: "/images/itinenary/cafe.jpg",
      },
      {
        t: "Matrimandir Visit",
        m: "Auroville · 25 min drive",
        time: "11:00 AM",
        img: "/images/itinenary/matrimandir.jpg",
      },
      {
        t: "Paradise Beach Ferry",
        m: "Sunset · Best in evening",
        time: "4:30 PM",
        img: "/images/itinenary/paradesiebeach.jpeg",
      },
    ],
  },
  {
    stops: [
      { n: 1, label: "Rock Beach", coords: [11.9308, 79.8318] },
      { n: 2, label: "Ashram", coords: [11.9335, 79.8347], rust: true },
      { n: 3, label: "Paradise Beach", coords: [11.8957, 79.8183] },
    ],
    items: [
      {
        t: "Rock Beach Walk",
        m: "Sunrise · Best before 7am",
        time: "6:30 AM",
        img: "/images/itinenary/rockbeach.jpg",
      },
      {
        t: "Sri Aurobindo Ashram",
        m: "Rue de la Marine",
        time: "10:00 AM",
        img: "/images/itinenary/ashram.jpg",
      },
      {
        t: "Promenade Sunset",
        m: "Best between 5–6pm",
        time: "5:00 PM",
        img: "/images/itinenary/promenade.jpeg",
      },
    ],
  },
];

export default function Itinerary() {
  const copyRef = useReveal<HTMLDivElement>({ y: 24, stagger: 0.1 });
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section id="itinerary" className="py-[120px] relative" data-screen-label="Smart Itinerary">
      <div className="container-x">
        <div className="grid gap-20 items-center grid-cols-1 lg:grid-cols-[1.05fr_1fr]">

          <div ref={copyRef}>
            <div className="eyebrow">Smart itinerary generation</div>
            <h3 className="font-display font-semibold tracking-[-0.03em] leading-[1.02] my-4" style={{ fontSize: 'clamp(36px,4.4vw,60px)' }}>
              Your trip.<br />Planned intelligently.
            </h3>
            <p className="text-muted text-[17px] leading-[1.55] max-w-[480px]">
              Tell us where you're going, how long, and what you love. Tripknot composes a personalized day-by-day itinerary that respects your budget, your pace, and the best time to visit each spot.
            </p>
            <ul className="list-none p-0 mt-7 grid gap-3.5">
              <li className="flex gap-3 items-start text-[15.5px] text-ink2">{check}<span>Editable day-by-day plans you can drag, reorder and swap</span></li>
              <li className="flex gap-3 items-start text-[15.5px] text-ink2">{check}<span>Recommendations tuned to your budget and travel pace</span></li>
              <li className="flex gap-3 items-start text-[15.5px] text-ink2">{check}<span>Best-time hints and a live map preview built in</span></li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[600px] rounded-[32px] overflow-hidden border border-[rgba(14,20,19,0.06)]"
            style={{ isolation: 'isolate' }}
          >
            {/* Live Leaflet map fills the box */}
            <div className="absolute inset-0">
              <MapView key={activeDay} stops={DAYS[activeDay].stops} />
            </div>

            {/* Itinerary card overlay – z-[1000] keeps it above Leaflet's internal panes */}
            <div
              className="absolute right-5 bottom-5 left-5 rounded-[22px] p-4 pb-3.5 z-[1000]"
              style={{
                background: 'rgba(255,255,255,0.88)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.9)',
                boxShadow: '0 30px 60px -30px rgba(11,16,15,0.28)',
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="m-0 font-display text-[18px] tracking-[-0.02em]">Pondicherry · 3 days</h4>
                <div className="flex gap-1.5">
                  {['Day 1', 'Day 2', 'Day 3'].map((label, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveDay(i)}
                      className="px-2.5 py-1 rounded-full text-[12px] font-semibold transition-colors duration-200 cursor-pointer border-0"
                      style={{
                        background: activeDay === i ? 'var(--ink)' : 'rgba(14,20,19,0.06)',
                        color: activeDay === i ? '#fff' : 'var(--ink-2)',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="grid gap-2"
                >
                  {DAYS[activeDay].items.map((it, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-center p-2.5 rounded-[14px] border border-[var(--line)]"
                      style={{ background: 'rgba(255,255,255,0.7)' }}
                    >
                      <div className="relative w-10 h-10 rounded-[10px] overflow-hidden flex-none">
                        <Image src={it.img} alt={it.t} fill sizes="40px" style={{ objectFit: 'cover' }} />
                      </div>
                      <div>
                        <div className="font-semibold text-[13.5px]">{it.t}</div>
                        <div className="text-[11.5px] text-muted">{it.m}</div>
                      </div>
                      <div className="ml-auto text-[11.5px] text-muted tabular-nums">{it.time}</div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
