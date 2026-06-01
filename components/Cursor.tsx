'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const blob = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blob.current) return;

    gsap.set(blob.current, { rotation: 20 });

    const x = gsap.quickTo(blob.current, 'x', { duration: 0.2, ease: 'power3.out' });
    const y = gsap.quickTo(blob.current, 'y', { duration: 0.2, ease: 'power3.out' });

    const onMove  = (e: MouseEvent) => { x(e.clientX); y(e.clientY); };
    const onEnter = () => gsap.to(blob.current, { scale: 1.35, duration: 0.25, ease: 'back.out(1.5)' });
    const onLeave = () => gsap.to(blob.current, { scale: 1,    duration: 0.25, ease: 'power3.out' });

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={blob} className="cursor-blob">
      <svg width="12" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.99213 15.7939L0.151263 3.9442C-0.569254 1.72326 1.39657 -0.437949 3.66875 0.0767617L15.7927 2.81809C15.8636 2.83515 15.9317 2.85222 15.9998 2.87212C18.5698 3.63992 18.3996 7.37939 15.7984 8.0306C14.5332 8.34625 12.7603 9.06855 11.2796 10.7406C9.87824 12.3246 9.35629 14.0649 9.16907 15.3105C8.76342 17.9722 5.06723 18.4954 4.06588 15.9987C4.04035 15.9333 4.01482 15.865 3.99213 15.7968V15.7939Z" fill="#45C1C4"/>
      </svg>
    </div>
  );
}