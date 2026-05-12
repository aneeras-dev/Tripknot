'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ['rgba(246,244,239,0.55)', 'rgba(246,244,239,0.85)']);
  const blur = useTransform(scrollY, [0, 80], ['blur(8px)', 'blur(22px)']);

  return (
    <motion.nav
      style={{ background: bg, backdropFilter: blur as any, WebkitBackdropFilter: blur as any }}
      className="sticky top-0 z-50 border-b border-[var(--line)]"
    >
      <div className="container-x flex h-[70px] items-center justify-between">
        <Link href="/"><Image src="/logo.svg" alt="Tripknot" width={160} height={32} priority /></Link>
        <div className="hidden md:flex gap-[34px] text-[16px] text-ink2">
          {[
            ['Itineraries', '#itinerary'],
            ['Explore', '#explore'],
            ['Travel Together', '#strangers'],
            ['Destinations', '#destinations'],
            ['App', '#app']
          ].map(([label, href]) => (
            <a key={href} href={href} className="hover:text-teal transition-colors">{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-[14px]">
          <a href="#" className="btn btn-ghost hidden sm:inline-flex">Sign in</a>
          <a href="#cta" className="btn btn-primary">Get the app</a>
        </div>
      </div>
    </motion.nav>
  );
}
