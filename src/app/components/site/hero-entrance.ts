// The entrance every redesigned page's hero plays: the media settles from a
// slight zoom, the title rises out of its masks line by line, and the rest
// fades up. Markup: [data-hero-zoom] on the media, [data-hero-title] with
// .line > span lines, [data-hero-fade] on everything else.
import gsap from 'gsap';

const TITLE_LINES = '[data-hero-title] .line > span';
const FADES = '[data-hero-fade]';

/** Sets the hero up for its entrance; also lifts the head script's pre-paint hold. */
export function hideHero(): void {
  gsap.set(TITLE_LINES, { yPercent: 110 });
  gsap.set(FADES, { autoAlpha: 0, y: 24 });
  document.documentElement.classList.remove('hero-pending');
}

export function enterHero(delay = 0): gsap.core.Timeline {
  return gsap
    .timeline({ delay })
    .fromTo('[data-hero-zoom]', { scale: 1.12 }, { scale: 1, duration: 2.6, ease: 'expo.out' }, 0)
    .to(TITLE_LINES, { yPercent: 0, duration: 1.6, ease: 'expo.out', stagger: 0.14 }, 0.35)
    .to(FADES, { autoAlpha: 1, y: 0, duration: 1.4, ease: 'expo.out', stagger: 0.1 }, 1);
}
