'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [showLogo, setShowLogo] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLogo(true), 2800);
    const t2 = setTimeout(() => setDone(true), 5200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
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
