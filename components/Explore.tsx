'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cats = [
  { k: '2 nights',    t: 'Weekend trips',     img: '/images/weekend.JPG'  },
  { k: 'Off the map', t: 'Hidden gems',       img: '/images/hidden.JPG'   },
  { k: 'High altitude', t: 'Mountain escapes', img: '/images/mountains.JPG' },
  { k: 'Coastal',     t: 'Beach destinations', img: '/images/beach.JPG'   },
  { k: 'Heritage',    t: 'Spiritual journeys', img: '/images/spiritual.JPG' },
];

export default function Explore() {
  return (
    <section id="explore" className="py-[120px]" data-screen-label="Explore Packages">
      <div className="container-x">
        <SectionHead eyebrow="Explore packages" title="Discover curated escapes." sub="From weekend getaways to slow mountain retreats — explore handpicked trips designed around mood, pace, and time of year." />
        <div className="grid gap-4 mt-9 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {cats.map((c, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative h-[200px] md:h-[280px] lg:h-[340px] rounded-[22px] overflow-hidden cursor-pointer text-white group w-full max-md:[&:last-child]:col-span-2"
            >
              <Image
                src={c.img}
                alt={c.t}
                fill
                sizes="(max-width:768px) 50vw, (max-width:1280px) 33vw, 20vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
              <div className="absolute top-4 right-4 w-[34px] h-[34px] rounded-full bg-white/15 backdrop-blur grid place-items-center z-[2] transition-all duration-300 group-hover:bg-white group-hover:text-ink group-hover:-rotate-45">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 17L17 7M9 7h8v8" /></svg>
              </div>
              <div className="absolute left-[18px] bottom-[18px] right-[18px] z-[2]">
                <div className="text-[11px] tracking-[0.16em] uppercase opacity-70 mb-2">{c.k}</div>
                <div className="font-display text-[18px] md:text-[22px] tracking-[-0.02em] leading-[1.1]">{c.t}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow: string; title: string; sub: string; light?: boolean }) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-[760px] mx-auto mb-16 text-center"
    >
      <div className="eyebrow" style={light ? { color: '#5BC1C2' } : undefined}>{eyebrow}</div>
      <h2 className="display my-[10px]" style={{ fontSize: 'clamp(40px,5.4vw,72px)', color: light ? '#fff' : undefined }}>{title}</h2>
      <p className={light ? 'text-[18px] max-w-[560px] mx-auto leading-[1.5]' : 'text-[18px] text-muted max-w-[560px] mx-auto leading-[1.5]'} style={light ? { color: '#A8A99F' } : undefined}>{sub}</p>
    </motion.div>
  );
}
