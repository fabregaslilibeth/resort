// Scroll-driven motion for the homepage, on top of the shared reveals
// (site/reveals.ts). Call inside a GSAP context (useGSAP) so every tween and
// trigger is reverted with it.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initReveals } from '../site/reveals';
import type { Ripples } from '../site/ripples';

gsap.registerPlugin(ScrollTrigger);

/** The film sinks and the headline drifts up as the hero scrolls away. */
function heroScene() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;
  gsap.fromTo(
    '.hero__media',
    { yPercent: 0 },
    { yPercent: 18, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } },
  );
  gsap.fromTo(
    '.hero__content',
    { yPercent: 0, autoAlpha: 1 },
    { yPercent: -22, autoAlpha: 0.2, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } },
  );
}

/** Drops break the water over the divers as the section arrives; it sinks a little as it passes. */
function diveScene(dive: Ripples) {
  const section = document.querySelector<HTMLElement>('[data-dive]');
  if (!section) return;
  ScrollTrigger.create({
    trigger: section,
    start: 'top 65%',
    once: true,
    onEnter: () => {
      dive.splash(0.62, 0.42, 1);
      gsap.delayedCall(0.45, () => dive.splash(0.3, 0.65, 0.8));
    },
  });
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self) => {
      dive.params.scroll = self.progress;
    },
  });
}

export function initScenes(motion: boolean, dive: Ripples): void {
  if (!motion) return;
  heroScene();
  diveScene(dive);
  initReveals();
}
