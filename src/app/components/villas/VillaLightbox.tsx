'use client';

// A full-screen lightbox of one villa's photos: arrow keys, swipe or the
// round buttons step through them, Escape or Close shut it, and "Book this
// villa" opens the booking drawer with the villa chosen. Mount it to open
// it; it calls onClosed once its closing animation is done.
import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { openBooking } from '../site/booking';
import { pauseScroll, prefersReducedMotion, resumeScroll } from '../site/smooth-scroll';
import { guests, type VillaCard } from './villa-cards';

const pad = (n: number) => String(n).padStart(2, '0');

export function VillaLightbox({ villa, startAt = 0, onClosed }: { villa: VillaCard; startAt?: number; onClosed: () => void }) {
  /** direction: -1 or 1, which way the last photo change went, for the slide. */
  const [view, setView] = useState({ photo: startAt, direction: 0 });
  const lightbox = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const swipeStart = useRef(0);
  const total = villa.photos.length;

  const turn = (by: number) => setView((current) => ({ photo: (current.photo + by + total) % total, direction: by }));

  function close(after?: () => void) {
    const el = lightbox.current;
    const done = () => {
      resumeScroll();
      onClosed();
      if (after) after();
      else opener.current?.focus();
    };
    if (!el || prefersReducedMotion()) return done();
    gsap.to(el, { clipPath: 'inset(0 0 100% 0)', duration: 0.7, ease: 'expo.inOut', onComplete: done });
  }

  useLayoutEffect(() => {
    const el = lightbox.current;
    if (!el) return;
    opener.current = document.activeElement as HTMLElement | null;
    pauseScroll();
    closeButton.current?.focus();
    if (!prefersReducedMotion()) {
      gsap.fromTo(el, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'expo.inOut' });
      if (caption.current) {
        gsap.fromTo(caption.current.children, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.06, delay: 0.2 });
      }
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      else if (event.key === 'ArrowRight') turn(1);
      else if (event.key === 'ArrowLeft') turn(-1);
      else if (event.key === 'Tab') {
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
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // Runs once per opening; turn() and close() only use setters and refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Each photo slides in from the side it came from.
  useLayoutEffect(() => {
    if (!view.direction || prefersReducedMotion()) return;
    gsap.fromTo(frame.current, { autoAlpha: 0, xPercent: 5 * view.direction }, { autoAlpha: 1, xPercent: 0, duration: 0.9, ease: 'expo.out' });
  }, [view]);

  return (
    <div className="lightbox" ref={lightbox} role="dialog" aria-modal="true" aria-labelledby="lightbox-title" data-lenis-prevent>
      <div className="lightbox__top">
        <span className="lightbox__count">
          {pad(view.photo + 1)} / {pad(total)}
        </span>
        <button type="button" className="pill pill--line pill--light" ref={closeButton} onClick={() => close()}>
          Close
        </button>
      </div>
      <figure className="lightbox__figure">
        <div
          className="lightbox__media"
          onPointerDown={(event) => {
            swipeStart.current = event.clientX;
          }}
          onPointerUp={(event) => {
            const dx = event.clientX - swipeStart.current;
            if (Math.abs(dx) > 50) turn(dx < 0 ? 1 : -1);
          }}
        >
          <div className="lightbox__frame" ref={frame}>
            <Image
              src={villa.photos[view.photo]}
              alt={`${villa.name}, photo ${view.photo + 1} of ${total}`}
              fill
              sizes="(max-width: 1024px) 100vw, 64vw"
              priority
            />
          </div>
        </div>
        <figcaption className="lightbox__caption" ref={caption}>
          <h3 className="serif lightbox__title" id="lightbox-title">
            {villa.name}
          </h3>
          <p className="lightbox__meta">
            {villa.area} · {guests(villa)}
          </p>
          <div className="lightbox__text">
            {villa.text.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <button type="button" className="pill pill--orange lightbox__book" onClick={() => close(() => openBooking(villa.name))}>
            Book this villa
          </button>
        </figcaption>
      </figure>
      <button type="button" className="round round--light lightbox__nav lightbox__nav--prev" onClick={() => turn(-1)} aria-label="Previous photo">
        ←
      </button>
      <button type="button" className="round round--light lightbox__nav lightbox__nav--next" onClick={() => turn(1)} aria-label="Next photo">
        →
      </button>
    </div>
  );
}
