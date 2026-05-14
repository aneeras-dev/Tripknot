'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const dests = [
  { idx: '01 · Tamil Nadu', t: 'Pondicherry', s: 'French quarter walks, sea wind and slow filter coffee.', pin: 'Coastal · Editorial', img: '/images/pondicherry.png' },
  { idx: '02 · Nilgiris', t: 'Ooty', s: 'Tea gardens folding into the clouds, colonial bungalows.', pin: 'Hills · Misty', img: '/images/ooty.jpg' },
  { idx: '03 · West coast', t: 'Goa', s: 'Quiet north shacks, Portuguese lanes, sunset feni.', pin: 'Sun · Sand', img: '/images/goa.jpg' },
  { idx: '04 · Himachal', t: 'Manali', s: 'Pine valleys, Solang nights, Beas-river breakfasts.', pin: 'Alpine · Snow', img: '/images/manali-atel.JPG' },
  { idx: '05 · Rajasthan', t: 'Jaipur', s: 'Forts at dawn, bazaar afternoons, courtyard suppers.', pin: 'Heritage · Pink', img: '/images/jaipur.JPG' },
  { idx: '06 · Kerala', t: 'Varkala', s: 'Red-laterite cliffs over the Arabian sea — endless mornings.', pin: 'Cliffside · Quiet', img: '/images/varkala-jatyu.JPG' }
];

export default function Destinations() {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dx: number) => scroller.current?.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <section id="destinations" className="py-20" data-screen-label="Destinations">
      <div className="container-x">
        <div className="flex justify-between items-end mb-9 gap-6 flex-wrap">
          <div>
            <div className="eyebrow">Editorial picks</div>
            <h2 className="display mt-2.5" style={{ fontSize: 'clamp(40px,5vw,68px)' }}>Where Tripknot is going.</h2>
          </div>
          <div className="flex gap-2.5">
            <button className="btn btn-outline" onClick={() => scrollBy(-360)} aria-label="Previous"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M15 6l-6 6 6 6" /></svg></button>
            <button className="btn btn-outline" onClick={() => scrollBy(360)} aria-label="Next"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 6l6 6-6 6" /></svg></button>
          </div>
        </div>
      </div>
      <div className="container-x mt-4">
        <div ref={scroller} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-3 no-scrollbar">
          {dests.map((d, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="flex-none w-[260px] h-[360px] md:w-[340px] md:h-[460px] rounded-[24px] overflow-hidden relative snap-start bg-[#222] text-white cursor-pointer"
            >
              <Image src={d.img} alt={d.t} fill className="object-cover" sizes="340px" />
              <span className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.75) 100%)' }} />
              <div className="absolute top-5 left-5 flex items-center gap-2 text-[11.5px] tracking-[0.18em] uppercase font-semibold z-[2] before:content-[''] before:w-6 before:h-px before:bg-white">{d.idx}</div>
              <div className="hidden md:block absolute top-5 right-5 bg-white/15 backdrop-blur px-2.5 py-1.5 rounded-full text-[11px] font-semibold z-[2]">{d.pin}</div>
              <div className="absolute left-6 right-6 bottom-6 z-[2]">
                <div className="font-display text-[26px] md:text-[36px] tracking-[-0.03em] leading-none mb-2">{d.t}</div>
                <div className="text-[13px] opacity-85 leading-[1.4]" style={{ color: '#D3D5C3' }}>{d.s}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
