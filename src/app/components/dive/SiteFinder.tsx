'use client';

// Every dive site as a row with its depth drawn to scale, filtered by type
// and level. A row opens a drawer with the full write-up.
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pauseScroll, prefersReducedMotion, resumeScroll, scrollToTarget } from '../site/smooth-scroll';
import { depthScale, type DiveSite as Site } from './dive-data';
import { DepthTicks, DepthTrack, stepStyle } from './DepthScale';

gsap.registerPlugin(ScrollTrigger);

const pad = (n: number) => String(n).padStart(2, '0');

const TYPES = [
  { id: 'all', label: 'All sites' },
  { id: 'reefs', label: 'Reefs' },
  { id: 'walls', label: 'Walls' },
  { id: 'wrecks', label: 'Wrecks' },
  { id: 'advanced', label: 'Advanced' },
];

const LEVELS = ['All levels', 'Beginner', 'Intermediate', 'Advanced'];

export function SiteFinder({ sites }: { sites: Site[] }) {
  const [type, setType] = useState('all');
  const [level, setLevel] = useState('All levels');
  const [open, setOpen] = useState<Site | null>(null);
  const list = useRef<HTMLOListElement>(null);
  const changed = useRef(false);
  const sheet = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const scale = depthScale(sites);

  const shown = sites.filter(
    (site) => (type === 'all' || site.category?.trim() === type) && (level === 'All levels' || site.difficulty === level),
  );

  // After a filter change the remaining rows fade back up and later scroll
  // triggers are measured again.
  useLayoutEffect(() => {
    if (!changed.current) return;
    ScrollTrigger.refresh();
    if (prefersReducedMotion() || !list.current) return;
    gsap.fromTo(list.current.children, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.03 });
  }, [type, level]);

  const filter = (apply: () => void) => {
    changed.current = true;
    apply();
  };

  // ---------------------------------------------------------------- drawer

  const show = (site: Site) => {
    opener.current = document.activeElement as HTMLElement | null;
    setOpen(site);
  };

  function close(after?: () => void) {
    const el = sheet.current;
    const done = () => {
      setOpen(null);
      resumeScroll();
      if (after) after();
      else opener.current?.focus();
    };
    if (!el || prefersReducedMotion()) return done();
    gsap
      .timeline({ onComplete: done })
      .to(el.querySelector('.sheet__panel'), { xPercent: 100, duration: 0.6, ease: 'expo.in' }, 0)
      .to(el.querySelector('.sheet__scrim'), { autoAlpha: 0, duration: 0.5 }, 0.1);
  }

  const isOpen = open !== null;
  useLayoutEffect(() => {
    const el = sheet.current;
    if (!isOpen || !el) return;
    pauseScroll();
    el.querySelector<HTMLElement>('.sheet__top button')?.focus();
    if (!prefersReducedMotion()) {
      gsap
        .timeline()
        .fromTo(el.querySelector('.sheet__scrim'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 0)
        .fromTo(el.querySelector('.sheet__panel'), { xPercent: 100 }, { xPercent: 0, duration: 1, ease: 'expo.out' }, 0)
        .from(el.querySelectorAll('.sheet__body > *'), { autoAlpha: 0, y: 24, duration: 0.9, ease: 'expo.out', stagger: 0.05 }, 0.2);
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab') return;
      const focusable = [...el.querySelectorAll<HTMLElement>('a[href], button')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <section className="finder" aria-labelledby="finder-title" style={stepStyle(scale)}>
      <h2 className="sr-only" id="finder-title">
        Dive sites
      </h2>
      <div className="finder__bar" data-reveal>
        <div className="finder__filters" role="group" aria-label="Type of site">
          {TYPES.filter((t) => t.id === 'all' || sites.some((site) => site.category?.trim() === t.id)).map((t) => (
            <button type="button" className="chip" aria-pressed={type === t.id} onClick={() => filter(() => setType(t.id))} key={t.id}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="finder__filters" role="group" aria-label="Level">
          {LEVELS.map((l) => (
            <button type="button" className="chip" aria-pressed={level === l} onClick={() => filter(() => setLevel(l))} key={l}>
              {l}
            </button>
          ))}
        </div>
        <p className="finder__count" aria-live="polite">
          {shown.length} of {sites.length} sites
        </p>
      </div>

      <div className="finder__scale" aria-hidden="true">
        <span />
        <DepthTicks scale={scale} />
      </div>
      <ol className="finder__list" ref={list}>
        {shown.map((site, i) => (
          <li key={site.id}>
            <button type="button" className="finder__row" onClick={() => show(site)} aria-haspopup="dialog">
              <span className="finder__num">{pad(i + 1)}</span>
              <span className="finder__name">
                <span className="subhead finder__title">{site.name}</span>
                <small>{[site.location, site.difficulty].filter(Boolean).join(' · ')}</small>
              </span>
              <DepthTrack depth={site.depth} scale={scale} />
              <span className="finder__more" aria-hidden="true">
                ↗
              </span>
            </button>
          </li>
        ))}
      </ol>
      {shown.length === 0 && (
        <p className="finder__empty">
          No sites match both filters.{' '}
          <button
            type="button"
            className="text-link"
            onClick={() =>
              filter(() => {
                setType('all');
                setLevel('All levels');
              })
            }
          >
            Show all sites
          </button>
        </p>
      )}

      {open && (
        <div className="sheet" ref={sheet} role="dialog" aria-modal="true" aria-labelledby="site-title">
          <div className="sheet__scrim" onClick={() => close()} />
          <div className="sheet__panel" data-lenis-prevent>
            <div className="sheet__top">
              <span className="eyebrow">{open.location || 'Puerto Galera'}</span>
              <button type="button" className="pill pill--line" onClick={() => close()}>
                Close
              </button>
            </div>
            <div className="sheet__body">
              <h2 className="serif sheet__title" id="site-title">
                {open.name}
              </h2>
              <dl className="site__specs">
                {[
                  ['Depth', open.depth?.replace('-', '–').replace('m', ' m')],
                  ['Level', open.difficulty],
                  ['Visibility', open.visibility?.replace('-', '–').replace('m', ' m')],
                  ['Best time', open.bestTime],
                ]
                  .filter(([, value]) => value)
                  .map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
              </dl>
              <p className="site__text">{open.longDescription ?? open.description}</p>
              {open.marineLife && open.marineLife.length > 0 && (
                <div className="site__group">
                  <p className="eyebrow">You might see</p>
                  <ul className="site__tags">
                    {open.marineLife.map((animal) => (
                      <li key={animal}>{animal}</li>
                    ))}
                  </ul>
                </div>
              )}
              {open.highlights && open.highlights.length > 0 && (
                <div className="site__group">
                  <p className="eyebrow">Highlights</p>
                  <ul className="site__list">
                    {open.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button type="button" className="pill pill--dark site__ask" onClick={() => close(() => scrollToTarget('#enquire', 1.4, -90))}>
                Dive {open.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
