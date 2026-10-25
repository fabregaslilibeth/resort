'use client';

// Motion for a redesigned page other than the homepage: smooth scroll,
// smooth anchors, the hero's entrance, moving water over the hero when it
// asks for it, and the scroll reveals. Renders nothing; put it after the
// page's content.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { smoothAnchors } from './anchors';
import { enterHero, hideHero } from './hero-entrance';
import { initReveals } from './reveals';
import { startRipples } from './ripples';
import { prefersReducedMotion, scrollToTarget, startSmoothScroll, stopSmoothScroll } from './smooth-scroll';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PageMotion() {
  useGSAP(() => {
    const motion = !prefersReducedMotion();
    const stopAnchors = smoothAnchors();
    const waterCanvas = document.querySelector<HTMLCanvasElement>('[data-hero-water]');
    const water = startRipples(waterCanvas, waterCanvas?.dataset.heroWater ?? null, motion);
    let alive = true;

    if (motion) {
      startSmoothScroll();
      hideHero();
      initReveals();
      // The hero's media sinks a little as it scrolls away.
      const hero = document.querySelector<HTMLElement>('[data-hero]');
      if (hero) {
        gsap.fromTo(
          '[data-hero-media]',
          { yPercent: 0 },
          { yPercent: 16, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } },
        );
      }
    } else {
      document.documentElement.classList.remove('hero-pending');
    }

    void document.fonts.ready.then(() => {
      if (!alive) return;
      if (motion) {
        enterHero(0.1);
        water.splash(0.38, 0.55, 1);
      }
      ScrollTrigger.refresh();
      if (window.location.hash) scrollToTarget(window.location.hash);
    });

    return () => {
      alive = false;
      stopAnchors();
      water.stop();
      stopSmoothScroll();
    };
  });

  return null;
}
