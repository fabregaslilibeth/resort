// First visit this session: the loader spells the name, fills its line and
// lifts away. Every visit: the headline rises over the film.
import gsap from 'gsap';
import { enterHero, hideHero } from '../site/hero-entrance';
import { prefersReducedMotion } from '../site/smooth-scroll';

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Resolves once the page can scroll: after the loader, or straight away.
 * `alive` turns false if the page unmounts mid-way.
 */
export async function playIntro(ready: Promise<unknown>, alive: () => boolean): Promise<void> {
  const root = document.documentElement;
  const loader = document.querySelector<HTMLElement>('[data-loader]');
  const finish = () => root.classList.remove('intro');

  if (prefersReducedMotion()) {
    finish();
    root.classList.remove('hero-pending');
    return;
  }

  hideHero();

  if (!root.classList.contains('intro') || !loader) {
    await Promise.race([ready, wait(1500)]);
    if (alive()) enterHero(0.1);
    return;
  }

  window.scrollTo(0, 0);
  const letters = loader.querySelectorAll<HTMLElement>('[data-loader-letter]');
  const sub = loader.querySelector<HTMLElement>('[data-loader-sub]');
  const count = loader.querySelector<HTMLElement>('[data-loader-count]');
  const fill = loader.querySelector<HTMLElement>('[data-loader-fill]');

  const progress = { value: 0 };
  const render = () => {
    if (count) count.textContent = String(Math.round(progress.value * 100)).padStart(2, '0');
    if (fill) fill.style.transform = `scaleX(${progress.value})`;
  };

  gsap.fromTo(letters, { yPercent: 110 }, { yPercent: 0, duration: 1.3, ease: 'expo.out', stagger: 0.05 });
  gsap.fromTo(sub, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.5 });
  const climb = gsap.to(progress, { value: 0.84, duration: 1.9, ease: 'power2.out', onUpdate: render });
  await Promise.all([Promise.race([ready, wait(4500)]), wait(1900)]);
  if (!alive()) return;
  climb.kill();
  await gsap.to(progress, { value: 1, duration: 0.5, ease: 'power2.inOut', onUpdate: render });
  if (!alive()) return;

  try {
    sessionStorage.setItem('intro-seen', '1');
  } catch {
    /* the intro will just play again next time */
  }

  await gsap
    .timeline()
    .to(letters, { yPercent: -110, duration: 0.8, ease: 'expo.in', stagger: 0.03 }, 0)
    .to([sub, loader.querySelector('.loader__bar')], { autoAlpha: 0, duration: 0.5 }, 0.1)
    .fromTo(loader, { clipPath: 'inset(0 0 0% 0)' }, { clipPath: 'inset(0 0 100% 0)', duration: 1.3, ease: 'expo.inOut' }, 0.55)
    .add(() => {
      enterHero();
    }, 0.85);
  if (alive()) finish();
}
