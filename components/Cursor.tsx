'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dot.current || !ring.current) return;
    const xDot = gsap.quickTo(dot.current, 'x', { duration: 0.15, ease: 'power3.out' });
    const yDot = gsap.quickTo(dot.current, 'y', { duration: 0.15, ease: 'power3.out' });
    const xRing = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX - 4); yDot(e.clientY - 4);
      xRing(e.clientX - 18); yRing(e.clientY - 18);
    };
    const onEnter = () => gsap.to(ring.current, { scale: 1.6, duration: 0.3, ease: 'power3.out' });
    const onLeave = () => gsap.to(ring.current, { scale: 1, duration: 0.3, ease: 'power3.out' });

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
