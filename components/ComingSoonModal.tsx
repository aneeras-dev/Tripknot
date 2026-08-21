'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ open, onClose }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ background: 'rgba(10,10,10,0.55)', backdropFilter: 'blur(6px)' }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Android app coming soon"
        >
          <motion.div
            key="modal"
            initial={{ y: 24, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[420px] rounded-[28px] p-8 md:p-10 text-center"
            style={{ background: '#fafaf7', boxShadow: '0 32px 80px rgba(0,0,0,0.22)' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/10"
              style={{ color: '#888' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(13,122,123,0.1)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D7A7B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 1.9" />
              </svg>
            </div>

            <div className="text-[11.5px] font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: '#0D7A7B' }}>Android</div>
            <h3 className="font-display font-semibold text-[26px] md:text-[28px] tracking-[-0.025em] leading-[1.1] m-0 mb-2.5" style={{ color: 'var(--ink)' }}>
              Arriving soon on Play Store.
            </h3>
            <p className="text-[14.5px] leading-[1.6]" style={{ color: '#6B6B66' }}>
              We&apos;re putting the finishing touches on the Android app. It&apos;ll land on Google Play very soon — until then, Tripknot is live on iOS.
            </p>

            <a
              href="https://apps.apple.com/in/app/tripknot/id6781707127"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 btn btn-primary w-full flex items-center justify-center gap-2"
              style={{ background: 'var(--ink)', color: '#fff' }}
            >
              Get it on iOS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
