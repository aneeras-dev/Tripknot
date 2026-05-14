'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => nameRef.current?.focus(), 120);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const reset = () => {
    setName(''); setEmail(''); setStatus('idle'); setErrorMsg('');
  };

  const handleClose = () => { reset(); onClose(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Something went wrong.');
      }
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

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
          onClick={handleClose}
        >
          <motion.div
            key="modal"
            initial={{ y: 24, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[440px] rounded-[28px] p-8 md:p-10"
            style={{ background: '#fafaf7', boxShadow: '0 32px 80px rgba(0,0,0,0.22)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/08"
              style={{ color: '#888' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-center py-4"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(13,122,123,0.1)' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0D7A7B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="font-display font-semibold text-[24px] tracking-[-0.02em] mb-2.5" style={{ color: 'var(--ink)' }}>You&apos;re on the list.</h3>
                  <p className="text-[15px] leading-[1.6]" style={{ color: '#6B6B66' }}>
                    Check your inbox — we sent a confirmation to <strong style={{ color: 'var(--ink)' }}>{email}</strong>.
                    We&apos;ll be in touch soon.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-7 btn btn-primary w-full"
                    style={{ background: 'var(--ink)', color: '#fff' }}
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="mb-7">
                    <div className="text-[11.5px] font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: '#0D7A7B' }}>Early access</div>
                    <h3 className="font-display font-semibold text-[26px] md:text-[30px] tracking-[-0.025em] leading-[1.1] m-0 mb-2.5" style={{ color: 'var(--ink)' }}>
                      Be the first to explore.
                    </h3>
                    <p className="text-[14.5px] leading-[1.55]" style={{ color: '#6B6B66' }}>
                      Join the waitlist and get early access to smart itineraries, hidden gems, and travel built for how you actually move.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="grid gap-3.5">
                    <div>
                      <label className="block text-[12.5px] font-semibold mb-1.5" style={{ color: '#555' }}>Your name</label>
                      <input
                        ref={nameRef}
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Rooban"
                        disabled={status === 'loading'}
                        className="w-full rounded-[12px] px-4 py-3 text-[15px] outline-none transition-all disabled:opacity-50"
                        style={{ border: '1.5px solid #e2e2dc', background: '#fff', color: 'var(--ink)' }}
                        onFocus={e => (e.target.style.borderColor = '#0D7A7B')}
                        onBlur={e => (e.target.style.borderColor = '#e2e2dc')}
                      />
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-semibold mb-1.5" style={{ color: '#555' }}>Email address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        disabled={status === 'loading'}
                        className="w-full rounded-[12px] px-4 py-3 text-[15px] outline-none transition-all disabled:opacity-50"
                        style={{ border: '1.5px solid #e2e2dc', background: '#fff', color: 'var(--ink)' }}
                        onFocus={e => (e.target.style.borderColor = '#0D7A7B')}
                        onBlur={e => (e.target.style.borderColor = '#e2e2dc')}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-[13px] text-red-600">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn btn-primary btn-lg w-full mt-1 flex items-center justify-center gap-2 disabled:opacity-60"
                      style={{ background: 'var(--ink)', color: '#fff' }}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                          Joining...
                        </>
                      ) : (
                        <>
                          Join early access
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[12px]" style={{ color: '#aaa' }}>
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
