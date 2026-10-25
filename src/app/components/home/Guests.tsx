'use client';

// One review at a time. Every review sits in the same grid cell, so the
// section keeps the height of the longest and nothing below jumps; the
// active one rises in line by line, word by word.
import { Fragment, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../site/smooth-scroll';

interface Review {
  name: string;
  date: string;
  rating: number;
  title: string;
  text: string;
}

const pad = (n: number) => String(n).padStart(2, '0');
const YEARS = [2020, 2021, 2022, 2023, 2024, 2025];

/** Drops markdown bold and emoji the review export carries. */
function clean(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/[☀-➿️]|[\uD83C-\uDBFF][\uDC00-\uDFFF]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function Guests({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const stack = useRef<HTMLDivElement>(null);
  const moved = useRef(false);

  const go = (by: number) => {
    moved.current = true;
    setIndex((i) => (i + by + reviews.length) % reviews.length);
  };

  useLayoutEffect(() => {
    const active = stack.current?.children[index];
    if (!active || !moved.current || prefersReducedMotion()) return;
    gsap.fromTo(active.querySelectorAll('.guest__word > span'), { yPercent: 105 }, { yPercent: 0, duration: 1, ease: 'expo.out', stagger: 0.006 });
    gsap.fromTo(active.querySelectorAll('.guest__title, .guest__by'), { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08 });
  }, [index]);

  return (
    <section className="guests" id="guests" aria-labelledby="guests-title">
      <p className="eyebrow" data-reveal>
        Guests say
      </p>
      <h2 className="sr-only" id="guests-title">
        Guest reviews from TripAdvisor
      </h2>

      <div className="guests__stack" ref={stack} data-reveal>
        {reviews.map((review, i) => (
          <figure className={`guest${i === index ? ' is-active' : ''}`} aria-hidden={i !== index} key={`${review.name}-${review.date}`}>
            <p className="subhead guest__title">
              <em>{clean(review.title)}</em>
            </p>
            <blockquote className="serif guest__quote">
              “
              {clean(review.text)
                .split(' ')
                .map((word, w) => (
                  // The space stays outside the inline-block, where it would collapse.
                  <Fragment key={w}>
                    {w > 0 && ' '}
                    <span className="guest__word">
                      <span>{word}</span>
                    </span>
                  </Fragment>
                ))}
              ”
            </blockquote>
            <figcaption className="guest__by">
              {review.name} · TripAdvisor · {review.date} · {review.rating}/5
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="guests__nav" data-reveal>
        <button type="button" className="round" onClick={() => go(-1)} aria-label="Previous review">
          ←
        </button>
        <span className="guests__count" aria-hidden="true">
          {pad(index + 1)} / {pad(reviews.length)}
        </span>
        <button type="button" className="round" onClick={() => go(1)} aria-label="Next review">
          →
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {moved.current ? `Review ${index + 1} of ${reviews.length}, by ${reviews[index].name}` : ''}
      </p>

      <div className="guests__awards" data-reveal>
        <span className="subhead guests__award">Travelers’ Choice</span>
        <span className="guests__years">
          {YEARS.map((year) => (
            <span key={year}>{year}</span>
          ))}
        </span>
        <span className="guests__cats">Top 25 Value for Money · Top 25 Small Hotels</span>
      </div>
    </section>
  );
}
