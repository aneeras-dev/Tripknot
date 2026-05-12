'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHead } from './Explore';

const items = [
  { span: 'lg:col-span-6', h: 'h-[360px]', k: 'Hidden gems', t: "Places you'd only know from someone local", img: '/images/hiddengem.JPG' },
  { span: 'lg:col-span-3', h: 'h-[280px]', k: 'Stays', t: 'Best places to stay', img: '/images/stay.jpg' },
  { span: 'lg:col-span-3', h: 'h-[280px]', k: 'Food', t: 'Cafes & street food', img: '/images/cafe.JPG' },
  { span: 'lg:col-span-4', h: 'h-[280px]', k: 'Golden hour', t: 'Sunset spots', img: '/images/sunset.JPEG' },
  { span: 'lg:col-span-4', h: 'h-[280px]', k: '2 night ideas', t: 'Weekend escapes', img: '/images/weekend.JPG' },
  { span: 'lg:col-span-4', h: 'h-[280px]', k: 'Local culture', t: 'Experiences with people', img: '/images/local.JPG' }
];

export default function ExperienceGrid() {
  return (
    <section className="py-[120px] bg-charcoal text-[#F0EBE3]" data-screen-label="Experience grid">
      <div className="container-x">
        <SectionHead light eyebrow="A different way to see a place" title="More than the obvious." sub="A growing library of editorial picks — the kind a local friend would send you on a quiet afternoon." />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[18px]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`relative rounded-[22px] overflow-hidden bg-[#222] text-white cursor-pointer ${it.span} ${it.h} col-span-1`}
            >
              <Image src={it.img} alt={it.k} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              <span className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.65) 100%)' }} />
              <div className="absolute top-4 left-4 bg-white/15 backdrop-blur w-[34px] h-[34px] rounded-[10px] grid place-items-center z-[2]">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}><circle cx={12} cy={12} r={4} /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2" /></svg>
              </div>
              <div className="absolute left-[18px] bottom-4 z-[2]">
                <div className="text-[11.5px] tracking-[0.16em] uppercase opacity-75 mb-1.5">{it.k}</div>
                <div className="font-display text-[22px] tracking-[-0.02em]">{it.t}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
