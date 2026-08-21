'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Splash timings. The intro blocks the viewport, so it is deliberately short —
// it counts against Largest Contentful Paint on every visit that plays it.
const LOGO_AT = 900;
const DONE_AT = 1800;

export default function Loader() {
  const [showLogo, setShowLogo] = useState(false);
  const [done, setDone] = useState(true);

  useEffect(() => {
    // Play once per browsing session, not on every internal navigation.
    let seen = false;
    try {
      seen = sessionStorage.getItem('tk-splash') === '1';
      sessionStorage.setItem('tk-splash', '1');
    } catch {
      // Private mode / blocked storage — fall through and play the intro.
    }
    if (seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setDone(false);
    const t1 = setTimeout(() => setShowLogo(true), LOGO_AT);
    const t2 = setTimeout(() => setDone(true), DONE_AT);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: '#F6F4EF' }}
        >
          {/* Fixed-size stage so ring and logo occupy the same center point */}
          <div className="relative w-[280px] h-[100px] flex items-center justify-center">

            {/* Ring — spins, then fades out when logo takes over */}
            <motion.div
              className="absolute"
              initial={{ opacity: 1, rotate: 0 }}
              animate={{
                rotate: 360,
                opacity: showLogo ? 0 : 1,
              }}
              transition={{
                rotate: { duration: 1.6, ease: 'linear', repeat: Infinity },
                opacity: { duration: 0.5, ease: 'easeInOut' },
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ring.svg" alt="" width={96} height={96} />
            </motion.div>

            {/* Logo — hidden until ring fades, then slides up into view */}
            <motion.div
              className="absolute"
              initial={{ opacity: 0, y: 16 }}
              animate={showLogo ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Tripknot" width={240} height={60} />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
