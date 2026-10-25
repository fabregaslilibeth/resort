'use client';

// Every room and villa as an editorial row: a large photo drifting in its
// frame with two smaller ones, the name, size, guests and what's in the
// room, the full description, and ways on (book it, see every photo, the
// detail page). Rows alternate sides; a filter narrows them by guests.
import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookButton } from '../site/BookButton';
import { TransitionLink } from '../site/Curtain';
import { prefersReducedMotion } from '../site/smooth-scroll';
import { guests, type VillaCard } from './villa-cards';
import { VillaLightbox } from './VillaLightbox';

gsap.registerPlugin(ScrollTrigger);

const pad = (n: number) => String(n).padStart(2, '0');

export function VillaIndex({ villas }: { villas: VillaCard[] }) {
  const sizes = [...new Set(villas.map((v) => v.sleeps))].sort((a, b) => a - b);
  const [filter, setFilter] = useState<number | 'all'>('all');
  const [open, setOpen] = useState<{ villa: number; photo: number } | null>(null);
  const list = useRef<HTMLDivElement>(null);
  const filtered = useRef(false);

  const shown = villas.filter((v) => filter === 'all' || v.sleeps === filter);

  // After a filter change the remaining rows fade back up and the scroll
  // triggers below them are measured again.
  useLayoutEffect(() => {
    if (!filtered.current) return;
    ScrollTrigger.refresh();
    if (prefersReducedMotion() || !list.current) return;
    gsap.fromTo(list.current.querySelectorAll('.vrow:not([hidden])'), { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.08 });
  }, [filter]);

  const choose = (next: number | 'all') => {
    filtered.current = true;
    setFilter(next);
  };

  return (
    <section className="vindex" id="villa-index" aria-label="Rooms and villas">
      <div className="vindex__bar">
        <div className="vindex__filters" role="group" aria-label="Filter by guests" data-reveal>
          <button type="button" className="chip" aria-pressed={filter === 'all'} onClick={() => choose('all')}>
            All <span>{pad(villas.length)}</span>
          </button>
          {sizes.map((size) => (
            <button type="button" className="chip" aria-pressed={filter === size} onClick={() => choose(size)} key={size}>
              Sleeps {size} <span>{pad(villas.filter((v) => v.sleeps === size).length)}</span>
            </button>
          ))}
        </div>
        <nav className="vindex__jump" aria-label="Jump to a villa" data-reveal>
          {shown.map((v) => (
            <a href={`#villa-${v.id}`} key={v.id}>
              {v.name}
            </a>
          ))}
        </nav>
      </div>
      <p className="sr-only" aria-live="polite">
        {filter === 'all' ? '' : `Showing ${shown.length} rooms and villas for ${filter} guests`}
      </p>

      <div className="vindex__list" ref={list}>
        {villas.map((v, i) => (
          <article className={`vrow${i % 2 ? ' vrow--flip' : ''}`} id={`villa-${v.id}`} hidden={!shown.includes(v)} aria-labelledby={`villa-${v.id}-name`} key={v.id}>
            <div className="vrow__media">
              <button type="button" className="vrow__main" onClick={() => setOpen({ villa: i, photo: 0 })} aria-label={`${v.name}: see all ${v.photos.length} photos`} data-reveal-img>
                <span className="vrow__drift" data-speed="-0.12">
                  <Image src={v.photos[0]} alt="" fill sizes="(max-width: 900px) 100vw, 56vw" />
                </span>
              </button>
              {v.photos.slice(1, 3).map((photo, p) => (
                <button
                  type="button"
                  className={`vrow__thumb vrow__thumb--${p + 1}`}
                  onClick={() => setOpen({ villa: i, photo: p + 1 })}
                  aria-label={`${v.name}, photo ${p + 2} of ${v.photos.length}`}
                  data-reveal-img
                  key={photo}
                >
                  <Image src={photo} alt="" fill sizes="(max-width: 900px) 45vw, 20vw" />
                </button>
              ))}
            </div>

            <div className="vrow__info">
              <p className="eyebrow" data-reveal>
                {pad(i + 1)} / {pad(villas.length)}
              </p>
              <h2 className="serif vrow__name" id={`villa-${v.id}-name`} data-lines>
                <span className="line">
                  <span>{v.name}</span>
                </span>
              </h2>
              <dl className="vrow__specs" data-reveal>
                <div>
                  <dt>Size</dt>
                  <dd>{v.area}</dd>
                </div>
                <div>
                  <dt>Guests</dt>
                  <dd>{guests(v)}</dd>
                </div>
                {v.facilities.length > 0 && (
                  <div className="vrow__wide">
                    <dt>In the room</dt>
                    <dd>{v.facilities.join(' · ')}</dd>
                  </div>
                )}
              </dl>
              <div className="vrow__text" data-reveal>
                {v.text.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="vrow__actions" data-reveal>
                <BookButton className="pill pill--dark" villa={v.name}>
                  Book this villa
                </BookButton>
                <button type="button" className="text-link vrow__photos" onClick={() => setOpen({ villa: i, photo: 0 })}>
                  All {v.photos.length} photos
                </button>
                <TransitionLink className="text-link" href={`/villas/${v.id}`}>
                  Details
                </TransitionLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      {open && <VillaLightbox key={open.villa} villa={villas[open.villa]} startAt={open.photo} onClosed={() => setOpen(null)} />}
    </section>
  );
}
