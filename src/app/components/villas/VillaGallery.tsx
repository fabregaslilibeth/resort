'use client';

// The villa's photos as a grid (a large one, then smaller ones); any of
// them opens the lightbox at that photo, and the last tile counts the rest.
import { useState } from 'react';
import Image from 'next/image';
import type { VillaCard } from './villa-cards';
import { VillaLightbox } from './VillaLightbox';

const SHOWN = 8;

export function VillaGallery({ villa }: { villa: VillaCard }) {
  const [open, setOpen] = useState<number | null>(null);
  const tiles = villa.photos.slice(0, SHOWN);
  const more = villa.photos.length - tiles.length;

  return (
    <section className="vgallery" aria-labelledby="vgallery-title">
      <div className="vgallery__head">
        <div>
          <p className="eyebrow" data-reveal>
            Photos
          </p>
          <h2 className="serif vgallery__title" id="vgallery-title" data-lines>
            <span className="line">
              <span>
                A closer <em>look.</em>
              </span>
            </span>
          </h2>
        </div>
        <button type="button" className="text-link vgallery__all" onClick={() => setOpen(0)} data-reveal>
          All {villa.photos.length} photos
        </button>
      </div>

      <ul className="vgallery__grid" data-reveal-group>
        {tiles.map((photo, i) => (
          <li className={`vgallery__item${i === 0 ? ' vgallery__item--lead' : ''}`} key={photo}>
            <button
              type="button"
              className="vgallery__open"
              onClick={() => setOpen(i)}
              aria-label={`${villa.name}, photo ${i + 1} of ${villa.photos.length}`}
              data-reveal-img
            >
              <Image src={photo} alt="" fill sizes={i === 0 ? '(max-width: 800px) 100vw, 50vw' : '(max-width: 800px) 50vw, 25vw'} />
              {more > 0 && i === tiles.length - 1 && (
                <span className="vgallery__more" aria-hidden="true">
                  +{more}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {open !== null && <VillaLightbox villa={villa} startAt={open} onClosed={() => setOpen(null)} />}
    </section>
  );
}
