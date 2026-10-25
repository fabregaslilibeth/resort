// One Lenis instance for the redesigned pages, driven by GSAP's ticker so
// ScrollTrigger and the smooth scroll share a clock. Without it (reduced
// motion, or a page that hasn't started it) the helpers fall back to native
// scrolling.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
const tick = (time: number) => lenis?.raf(time * 1000);

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function startSmoothScroll(): void {
  if (lenis || prefersReducedMotion()) return;
  lenis = new Lenis({ lerp: 0.085, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
}

export function stopSmoothScroll(): void {
  if (!lenis) return;
  gsap.ticker.remove(tick);
  gsap.ticker.lagSmoothing(500, 33);
  lenis.destroy();
  lenis = null;
}

/** Freezes the page behind an overlay (menu, lightbox, sheet). */
export function pauseScroll(): void {
  if (lenis) lenis.stop();
  else document.documentElement.style.overflow = 'hidden';
}

export function resumeScroll(): void {
  if (lenis) lenis.start();
  else document.documentElement.style.overflow = '';
}

/**
 * Scrolls to an element, a selector such as "#book", or a y offset.
 * `offset` shifts where it stops, e.g. -90 to land below the header. An
 * element's scroll-margin-top is respected too (Lenis does this itself).
 */
export function scrollToTarget(target: string | HTMLElement | number, duration = 1.6, offset = 0): boolean {
  let element: HTMLElement | number | null = null;
  try {
    element = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  } catch {
    // Not a valid selector, e.g. "#1": nothing to scroll to.
  }
  if (element === null) return false;
  if (lenis) {
    lenis.scrollTo(element, { duration, offset });
    return true;
  }
  const top =
    typeof element === 'number'
      ? element
      : element.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(element).scrollMarginTop) || 0);
  window.scrollTo({ top: top + offset, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  return true;
}
