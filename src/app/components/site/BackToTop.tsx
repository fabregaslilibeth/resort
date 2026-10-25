'use client';

// A floating button that appears once the reader is past `target` (a
// page's index, say) and smooth-scrolls back to it; without a target it
// appears after a screen and a bit, and goes back to the top. It publishes
// its width as --to-top-space so the footer's last line can keep clear of it.
import { useEffect, useRef, useState } from 'react';
import { scrollToTarget } from './smooth-scroll';

interface BackToTopProps {
  /** Selector of the element to return to; the top of the page when left out. */
  target?: string;
  /** The visible label, e.g. "All villas". */
  label?: string;
  /** What a screen reader hears; should contain the label. */
  ariaLabel?: string;
}

/** Lands below the fixed header, which comes back on the way up. */
const HEADER_CLEARANCE = -90;

export function BackToTop({ target, label = 'Top', ariaLabel = 'Back to top' }: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  // The button's width plus a gap; it changes with the label, and on a
  // phone the button drops its label.
  useEffect(() => {
    const root = document.documentElement;
    const measure = () => root.style.setProperty('--to-top-space', `${(button.current?.offsetWidth ?? 0) + 24}px`);
    measure();
    void document.fonts.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      root.style.removeProperty('--to-top-space');
    };
  }, [label]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = target ? document.querySelector<HTMLElement>(target) : null;
      const after = el ? el.getBoundingClientRect().bottom + window.scrollY : window.innerHeight * 1.2;
      setVisible(window.scrollY > after);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [target]);

  return (
    <button
      type="button"
      ref={button}
      className={`to-top${visible ? ' is-visible' : ''}`}
      onClick={() => scrollToTarget(target ?? 0, 1.4, target ? HEADER_CLEARANCE : 0)}
      aria-label={ariaLabel}
    >
      <span className="to-top__arrow" aria-hidden="true">
        ↑
      </span>
      <span className="to-top__label">{label}</span>
    </button>
  );
}
