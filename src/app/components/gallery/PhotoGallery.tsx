'use client';

// The gallery grid: chips filter it by group, photos rise in as they
// scroll into view, and a photo opens the lightbox at that photo.
import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../site/smooth-scroll';
import { GalleryLightbox } from './GalleryLightbox';
import { GROUPS, type Photo, type PhotoGroup } from './groups';

gsap.registerPlugin(ScrollTrigger);

// Sizes repeat every six photos: one large, one tall, one wide, three plain.
const SHAPES = ['is-large', '', '', 'is-tall', 'is-wide', ''];

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [group, setGroup] = useState<PhotoGroup | 'all'>('all');
  const [open, setOpen] = useState<number | null>(null);
  const grid = useRef<HTMLUListElement>(null);
  const shown = group === 'all' ? photos : photos.filter((photo) => photo.group === group);

  useLayoutEffect(() => {
    const items = grid.current ? [...grid.current.children] : [];
    if (!items.length || prefersReducedMotion()) return;
    gsap.set(items, { autoAlpha: 0, y: 48 });
    const triggers = ScrollTrigger.batch(items, {
      start: 'top 94%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.07, overwrite: true }),
    });
    ScrollTrigger.refresh();
    return () => triggers.forEach((trigger) => trigger.kill());
  }, [group]);

  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <h2 className="sr-only" id="gallery-title">
        Photos
      </h2>
      <div className="gallery__bar" data-reveal>
        <div className="gallery__filters" role="group" aria-label="Show photos of">
          {GROUPS.map((g) => (
            <button type="button" className="chip" aria-pressed={group === g.id} onClick={() => setGroup(g.id)} key={g.id}>
              {g.label}
              <span>{g.id === 'all' ? photos.length : photos.filter((photo) => photo.group === g.id).length}</span>
            </button>
          ))}
        </div>
      </div>
      <ul className="gallery__grid" ref={grid}>
        {shown.map((photo, i) => (
          <li className={`gallery__item ${SHAPES[i % SHAPES.length]}`} key={photo.src}>
            <button type="button" className="gallery__open" onClick={() => setOpen(i)} aria-haspopup="dialog">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 34vw" />
              <span className="gallery__caption" aria-hidden="true">
                {photo.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && <GalleryLightbox photos={shown} startAt={open} onClosed={() => setOpen(null)} />}
    </section>
  );
}
