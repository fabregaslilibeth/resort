'use client';

// Starts the homepage's motion once its markup is on screen: smooth scroll,
// the rippling water over the divers, the scroll scenes and the intro.
// Renders nothing.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { smoothAnchors } from '../site/anchors';
import {
  pauseScroll,
  prefersReducedMotion,
  resumeScroll,
  scrollToTarget,
  startSmoothScroll,
  stopSmoothScroll,
} from '../site/smooth-scroll';
import { playIntro } from './intro';
import { startRipples } from '../site/ripples';
import { initScenes } from './scenes';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Resolves when the film can show its first frame, or after 2.5s so a slow video never holds the page. */
function firstFrame(video: HTMLVideoElement | null): Promise<void> {
  return new Promise((resolve) => {
    if (!video || video.readyState >= 2) return resolve();
    video.addEventListener('loadeddata', () => resolve(), { once: true });
    setTimeout(resolve, 2500);
  });
}

export function HomeMotion() {
  useGSAP(() => {
    const motion = !prefersReducedMotion();
    let alive = true;

    if (motion) {
      startSmoothScroll();
      pauseScroll();
    }
    const video = document.querySelector<HTMLVideoElement>('[data-hero-video]');
    // Reduced motion: no autoplaying film, just its first frame.
    if (!motion) video?.pause();
    const dive = startRipples(document.querySelector<HTMLCanvasElement>('[data-dive-water]'), '/images/home/divers.jpg', motion);
    initScenes(motion, dive);
    const stopAnchors = smoothAnchors();

    void playIntro(Promise.all([document.fonts.ready, firstFrame(video)]), () => alive).then(() => {
      if (!alive) return;
      resumeScroll();
      ScrollTrigger.refresh();
      // Arriving at /#villas from another page.
      if (window.location.hash) scrollToTarget(window.location.hash);
    });

    return () => {
      alive = false;
      stopAnchors();
      dive.stop();
      stopSmoothScroll();
    };
  });

  return null;
}
