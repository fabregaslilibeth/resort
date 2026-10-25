'use client';

// The booking drawer: slides in from the right whenever openBooking() is
// called, with the villa preselected when one is passed. Escape, the close
// button or the scrim close it; focus stays inside while it's open.
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { bookingGuaranteeData } from '@/data/bookingGuarantee';
import { BOOK_EVENT, type BookDetail } from './booking';
import { pauseScroll, prefersReducedMotion, resumeScroll } from './smooth-scroll';
import { StayForm } from './StayForm';

export function BookingSheet({ villas }: { villas: string[] }) {
  const [open, setOpen] = useState(false);
  const [villa, setVilla] = useState('');
  const sheet = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onBook = (event: Event) => {
      opener.current = document.activeElement as HTMLElement | null;
      setVilla((event as CustomEvent<BookDetail>).detail?.villa ?? '');
      setOpen(true);
    };
    window.addEventListener(BOOK_EVENT, onBook);
    return () => window.removeEventListener(BOOK_EVENT, onBook);
  }, []);

  function close() {
    const el = sheet.current;
    const done = () => {
      setOpen(false);
      resumeScroll();
      opener.current?.focus();
    };
    if (!el || prefersReducedMotion()) return done();
    gsap
      .timeline({ onComplete: done })
      .to(el.querySelector('.sheet__panel'), { xPercent: 100, duration: 0.6, ease: 'expo.in' }, 0)
      .to(el.querySelector('.sheet__scrim'), { autoAlpha: 0, duration: 0.5 }, 0.1);
  }

  useLayoutEffect(() => {
    const el = sheet.current;
    if (!open || !el) return;
    pauseScroll();
    if (!prefersReducedMotion()) {
      gsap
        .timeline()
        .fromTo(el.querySelector('.sheet__scrim'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 0)
        .fromTo(el.querySelector('.sheet__panel'), { xPercent: 100 }, { xPercent: 0, duration: 1, ease: 'expo.out' }, 0)
        .from(el.querySelectorAll('.sheet__body > *'), { autoAlpha: 0, y: 24, duration: 0.9, ease: 'expo.out', stagger: 0.06 }, 0.2);
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab') return;
      const focusable = [...el.querySelectorAll<HTMLElement>('a[href], button, input, select')];
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
  }, [open]);

  if (!open) return null;

  return (
    <div className="sheet" ref={sheet} role="dialog" aria-modal="true" aria-labelledby="sheet-title">
      <div className="sheet__scrim" onClick={close} />
      <div className="sheet__panel" data-lenis-prevent>
        <div className="sheet__top">
          <span className="eyebrow">Book direct</span>
          <button type="button" className="pill pill--line" onClick={close}>
            Close
          </button>
        </div>
        <div className="sheet__body">
          <h2 className="serif sheet__title" id="sheet-title">
            Plan your <em>stay.</em>
          </h2>
          <StayForm villas={villas} variant="sheet" id="sheet" villa={villa} autoFocus />
          <div className="sheet__perks">
            <p className="eyebrow">Booking direct</p>
            <ul>
              {bookingGuaranteeData.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <p className="sheet__small">{bookingGuaranteeData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
