'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const phones = [
  {
    src: "/screens/screen-explore.png",
    t: "Curated trips",
    s: "Join or get inspired",
    tall: false,
  },
  {
    src: "/screens/screen-auroville.png",
    t: "Discover deeper",
    s: "Editorial place pages",
    tall: true,
  },
  {
    src: "/screens/screen-temple.png",
    t: "Nearby, right now",
    s: "What's interesting around you",
    tall: false,
  },

];

export default function AppShowcase() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.phone-tilt').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 80, rotate: i % 2 ? 6 : -6, opacity: 0 },
          {
            y: i === 1 ? -30 : 0, rotate: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current!, start: 'top 70%' },
            delay: i * 0.1
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="app" className="py-[120px]" data-screen-label="App showcase">
      <div className="container-x">
        <div className="bg-charcoal text-white rounded-[32px] py-[120px] px-[60px] max-md:px-7 max-md:py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(40% 50% at 20% 30%, rgba(13,122,123,0.22), transparent 60%), radial-gradient(40% 50% at 80% 70%, rgba(184,74,50,0.14), transparent 60%)' }} />
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center relative z-[2] max-w-[760px] mx-auto mb-20"
          >
            <div className="eyebrow" style={{ color: '#5BC1C2' }}>In your pocket</div>
            <h2 className="font-display font-semibold tracking-[-0.035em] leading-[0.98] text-white my-2.5" style={{ fontSize: 'clamp(40px,5.4vw,72px)' }}>Designed for the road.</h2>
            <p className="text-[18px] leading-[1.5] max-w-[560px] mx-auto" style={{ color: '#A8A99F' }}>A calm interface that gets out of the way — itinerary, hidden gems, nearby picks, and the people you're traveling with. All in one place.</p>
          </motion.div>

          <div ref={ref} className="flex justify-center gap-8 items-end relative z-[2] flex-wrap">
            {phones.map((p, i) => (
              <div key={i} className="phone-tilt">
                <div className="flex-none rounded-[38px] p-2 border border-white/[0.06] relative" style={{
                  width: p.tall ? 280 : 240,
                  transform: p.tall ? 'translateY(-30px)' : undefined,
                  background: 'linear-gradient(180deg,#1a2120,#0b100f)',
                  boxShadow: '0 60px 120px -40px rgba(0,0,0,0.8), 0 4px 0 rgba(255,255,255,0.04) inset'
                }}>
                  <div className="rounded-[32px] overflow-hidden bg-black relative" style={{ aspectRatio: '9/19.5' }}>
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-[22px] bg-black rounded-[12px] z-[3]" />
                    <Image src={p.src} alt={p.t} fill sizes="280px" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                  </div>
                </div>
                <div className="mt-4 text-center text-[13px]" style={{ color: '#A8A99F' }}>
                  <div className="text-white font-semibold text-[14px] mb-0.5">{p.t}</div>{p.s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
