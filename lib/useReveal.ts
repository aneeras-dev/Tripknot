'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

type Opts = { y?: number; delay?: number; stagger?: number; selector?: string };

/** Reveal direct children (or a custom selector) on scroll using GSAP. */
export function useReveal<T extends HTMLElement>({
  y = 28,
  delay = 0,
  stagger = 0.08,
  selector
}: Opts = {}) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const root = ref.current;
    const targets = selector
      ? Array.from(root.querySelectorAll<HTMLElement>(selector))
      : (Array.from(root.children) as HTMLElement[]);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger,
          delay,
          scrollTrigger: { trigger: root, start: 'top 80%' }
        }
      );
    }, root);
    return () => ctx.revert();
  }, [y, delay, stagger, selector]);
  return ref;
}

/** Magnetic hover effect for buttons / cards. */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const setX = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const setY = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setX((e.clientX - (r.left + r.width / 2)) * strength);
      setY((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const reset = () => { setX(0); setY(0); };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', reset);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', reset); };
  }, [strength]);
  return ref;
}
