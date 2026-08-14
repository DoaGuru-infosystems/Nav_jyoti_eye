/**
 * useGsap.js
 *
 * Initialises GSAP ScrollSmoother, ScrollTrigger, sticky-header RAF loop,
 * and the scroll-to-top button — all from the local vendor files loaded
 * as globals in index.html (window.gsap, window.ScrollSmoother, etc.).
 *
 * StrictMode-safe: cleanup is fully idempotent. Re-calling init after
 * cleanup restarts from a clean slate.
 *
 * Called with useLayoutEffect so GSAP sees the fully-painted DOM before
 * it measures element heights (critical for ScrollSmoother).
 */

import { useLayoutEffect, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/* ── Sticky-header RAF loop ─────────────────────────────────────────────── */
function createStickyHeader(smoother) {
  const header = document.querySelector('.site-header');
  if (!header) return () => {};

  let rafId;
  const headerHeight = header.offsetHeight || 80;
  const sidebarSticky = document.querySelector('.sidebar-sticky');

  const tick = () => {
    const scrollY =
      typeof smoother?.scrollTop === 'function'
        ? smoother.scrollTop()
        : window.scrollY ?? document.documentElement.scrollTop;

    header.classList.toggle('is-fixed', scrollY > 100);
    if (sidebarSticky) {
      sidebarSticky.style.top = scrollY > 100 ? `${headerHeight + 10}px` : '60%';
    }
    rafId = requestAnimationFrame(tick);
  };

  rafId = requestAnimationFrame(tick);
  return () => {
    if (rafId != null) cancelAnimationFrame(rafId);
  };
}

/* ── Scroll-to-top progress button ─────────────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scrollProgress');
  if (!btn) return () => {};

  const circle = btn.querySelector('circle');
  if (!circle?.r?.baseVal) return () => {};

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  let ticking = false;
  const update = () => {
    const scrollTop = window.scrollY ?? document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = docHeight ? scrollTop / docHeight : 0;
    circle.style.strokeDashoffset = circumference * (1 - pct);
    btn.classList.toggle('active', scrollTop > 200);
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };
  const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', onClick);

  update();

  return () => {
    window.removeEventListener('scroll', onScroll);
    btn.removeEventListener('click', onClick);
    btn.classList.remove('active');
  };
}

/* ── Main hook ──────────────────────────────────────────────────────────── */
export default function useGsap() {
  const location = useLocation();

  // Refs hold cleanup functions so they survive re-renders.
  const cleanupStickyRef = useRef(null);
  const cleanupScrollTopRef = useRef(null);
  const smootherRef = useRef(null);

  /* Init GSAP once on mount */
  useLayoutEffect(() => {
    const gsap = window.gsap;
    const ScrollSmoother = window.ScrollSmoother;
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollSmoother || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    // Idempotent: kill any existing smoother before creating a new one.
    ScrollSmoother.get()?.kill();
    ScrollTrigger.getAll().forEach(t => t.kill());

    let smoother = null;
    try {
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.1,
      });
      smootherRef.current = smoother;
    } catch (e) {
      console.warn('[useGsap] ScrollSmoother.create failed:', e);
    }

    cleanupStickyRef.current = createStickyHeader(smoother);
    cleanupScrollTopRef.current = initScrollTop();

    return () => {
      cleanupStickyRef.current?.();
      cleanupStickyRef.current = null;

      cleanupScrollTopRef.current?.();
      cleanupScrollTopRef.current = null;

      smoother?.kill();
      smootherRef.current = null;

      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* Refresh ScrollSmoother height after every route change */
  useEffect(() => {
    const smoother = smootherRef.current ?? window.ScrollSmoother?.get();
    if (!smoother) return;
    // Small delay so the new page's DOM has fully painted.
    const id = setTimeout(() => smoother.refresh?.(), 100);
    return () => clearTimeout(id);
  }, [location.pathname]);
}
