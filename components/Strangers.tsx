'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const trips = [
  { city: 'Manali', days: '5 days', title: 'Snowline Trekkers', meta: 'Jun 8 · Departs Bangalore', rating: '★ 4.8', img: '/images/manali.JPG', bg: '#161B1A', off: -58, rot: -4 },
  { city: 'Hampi', days: '3 days', title: 'Sunsets & Boulders', meta: 'Jul 12 · 6 of 8 spots filled', rating: '★ 4.9', img: '/images/hampi.jpg', bg: '#1B2625', off: -46, rot: 2 },
  { city: 'Varkala', days: '4 days', title: 'Cliffside Slow Days', meta: 'Aug 20 · 3 spots left', rating: '★ 4.7', img: '/images/varkala.jpg', bg: '#212C2B', off: -50, rot: -1 }
];

export default function Strangers() {
  return (
    <section id="strangers" className="py-[120px] bg-charcoal text-[#F0EBE3]" data-screen-label="Strangers Trip">
      <div className="container-x">
        <div className="grid gap-[100px] items-center grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow" style={{ color: '#5BC1C2' }}>Strangers trip</div>
            <h3 className="font-display font-semibold tracking-[-0.03em] leading-[1.02] my-4 text-white" style={{ fontSize: 'clamp(40px,5vw,68px)' }}>Don't travel alone.</h3>
            <p className="text-[17.5px] leading-[1.55] max-w-[480px]" style={{ color: '#A8A99F' }}>Join trips with travelers heading to the same destination. Share journeys, split costs, and create real experiences with like-minded people who get it.</p>
            <div className="flex gap-3.5 mt-8">
              <a className="btn btn-primary btn-lg" href="#" style={{ background: '#fff', color: 'var(--ink)' }}>Find your trip</a>
              <a className="btn btn-outline btn-lg" href="#" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>How it works</a>
            </div>
          </motion.div>
          <div className="relative h-[600px]">
            {trips.map((t, i) => (
              <motion.div
                key={i}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
                className="absolute left-1/2 rounded-[24px] p-5 w-[380px] text-white"
                style={{ top: i * 60, transform: `translateX(${t.off}%) rotate(${t.rot}deg)`, zIndex: i + 1, background: t.bg, border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 30px 70px -30px rgba(0,0,0,0.6)' }}
              >
                <div className="h-[140px] rounded-[14px] mb-3.5 relative overflow-hidden">
                  <Image src={t.img} alt={t.city} fill className="object-cover" sizes="380px" />
                  <span className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.35) 0%,transparent 60%)' }} />
                </div>
                <div className="flex justify-between items-center text-[12.5px] mb-2" style={{ color: '#92938F' }}><span>{t.city} · {t.days}</span><span>{t.rating}</span></div>
                <h4 className="font-display text-[21px] tracking-[-0.02em] m-0 mb-2.5 text-white">{t.title}</h4>
                <div className="text-[13px]" style={{ color: '#92938F' }}>{t.meta}</div>
                <div className="flex justify-between items-center mt-3.5">
                  <div className="flex items-center">
                    {['#5BC1C2,#0D7A7B', '#E0A98C,#B84A32', '#C7D2A0,#7d8b54', '#B0BFD9,#3a567e'].map((g, k) => (
                      <span key={k} className={`w-[30px] h-[30px] rounded-full ${k ? '-ml-2' : ''}`} style={{ border: `2px solid ${t.bg}`, background: `linear-gradient(135deg,${g})` }} />
                    ))}
                  </div>
                  <span className="bg-white text-ink px-4 py-2 rounded-full text-[13px] font-semibold cursor-pointer">Join</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
