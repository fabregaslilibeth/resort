// Scroll reveals every redesigned page uses, driven by data attributes:
// [data-lines] headings rise out of their .line masks, [data-reveal-img]
// frames unveil upwards (zooming a [data-reveal-zoom] photo inside),
// [data-reveal] elements fade up, [data-speed] photos drift against the
// scroll inside their frames, and a full-bleed [data-backdrop] photo sinks
// behind its section. Call inside a GSAP context (useGSAP) so the tweens and
// triggers are reverted with it.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initReveals(): void {
  gsap.utils.toArray<HTMLElement>('[data-lines]').forEach((heading) => {
    gsap.from(heading.querySelectorAll('.line > span'), {
      yPercent: 110,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.12,
      scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal-img]').forEach((frame) => {
    // Frames in the same group (e.g. the villa slider) reveal one after another.
    const group = frame.closest('[data-reveal-group]');
    const siblings = group ? [...group.querySelectorAll('[data-reveal-img]')] : [frame];
    const delay = Math.min(siblings.indexOf(frame), 4) * 0.12;
    const timeline = gsap.timeline({ delay, scrollTrigger: { trigger: frame, start: 'top 88%', once: true } });
    timeline.fromTo(frame, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.6, ease: 'expo.inOut' }, 0);
    // Only photos marked for it: GSAP takes over an element's CSS `scale`,
    // which would cancel a hover zoom done with that property.
    const image = frame.querySelector('[data-reveal-zoom]');
    if (image) timeline.from(image, { scale: 1.3, duration: 2, ease: 'expo.out' }, 0.2);
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, { y: 36, autoAlpha: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
  });

  gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) => {
    const speed = Number(el.dataset.speed) || 0;
    gsap.fromTo(
      el,
      { yPercent: -speed * 50 },
      { yPercent: speed * 50, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-backdrop]').forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: -8, scale: 1.08 },
      { yPercent: 6, scale: 1, ease: 'none', scrollTrigger: { trigger: el.closest('section') ?? el, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });
}
