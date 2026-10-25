'use client';

// The villas as a slider that runs off the right edge: drag it (with
// inertia), or step with the arrows; each photo drifts inside its frame as
// it travels. A card opens the villa's lightbox.
import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { TransitionLink } from '../site/Curtain';
import { prefersReducedMotion } from '../site/smooth-scroll';
import type { VillaCard } from '../villas/villa-cards';
import { VillaLightbox } from '../villas/VillaLightbox';

gsap.registerPlugin(Draggable, InertiaPlugin);

const pad = (n: number) => String(n).padStart(2, '0');

/** Card sizes in turn: wide, narrow and dropped, tall. */
const SIZES = ['lg', 'sm', 'md'] as const;

export function Villas({ villas }: { villas: VillaCard[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const dragged = useRef(false);
  const moveTo = useRef<(index: number) => void>(() => undefined);
  const [open, setOpen] = useState<number | null>(null);

  useLayoutEffect(() => {
    const view = viewport.current;
    const rail = track.current;
    if (!view || !rail) return;
    const cards = [...rail.querySelectorAll<HTMLElement>('.villa')];
    const photos = cards.map((card) => card.querySelector<HTMLElement>('.villa__photo'));
    const reduce = prefersReducedMotion();
    let maxX = 0;

    // Progress, the counter and the drift of each photo inside its frame.
    const update = () => {
      const x = Number(gsap.getProperty(rail, 'x')) || 0;
      const progress = maxX ? -x / maxX : 0;
      if (fill.current) fill.current.style.transform = `scaleX(${Math.max(0.08, progress)})`;
      const centre = view.clientWidth / 2;
      let nearest = 0;
      let best = Infinity;
      cards.forEach((card, i) => {
        const mid = card.offsetLeft + x + card.offsetWidth / 2;
        const distance = Math.abs(mid - centre * 0.6);
        if (distance < best) {
          best = distance;
          nearest = i;
        }
        const photo = photos[i];
        if (photo && !reduce) photo.style.transform = `translateX(${((mid - centre) / view.clientWidth) * -8}%) scale(1.16)`;
      });
      if (count.current) count.current.textContent = `${pad(nearest + 1)} / ${pad(cards.length)}`;
    };

    const measure = () => {
      maxX = Math.max(0, rail.scrollWidth - view.clientWidth);
      drag.applyBounds({ minX: -maxX, maxX: 0 });
      update();
    };

    const [drag] = Draggable.create(rail, {
      type: 'x',
      inertia: !reduce,
      edgeResistance: 0.85,
      bounds: { minX: 0, maxX: 0 },
      dragClickables: true,
      minimumMovement: 6,
      onDragStart: () => {
        dragged.current = true;
      },
      onDrag: update,
      onThrowUpdate: update,
      onRelease: () => {
        // Let the click that ends a drag through before clearing the flag.
        setTimeout(() => {
          dragged.current = false;
        }, 60);
      },
    });

    moveTo.current = (index: number) => {
      const card = cards[Math.max(0, Math.min(cards.length - 1, index))];
      const x = -Math.min(maxX, card.offsetLeft);
      gsap.to(rail, { x, duration: reduce ? 0 : 1.1, ease: 'expo.out', onUpdate: update, onComplete: () => drag.update() });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(view);
    return () => {
      observer.disconnect();
      drag.kill();
    };
  }, []);

  const step = (by: number) => {
    const text = count.current?.textContent ?? '01';
    moveTo.current(parseInt(text, 10) - 1 + by);
  };

  return (
    <section className="villas" id="villas" aria-labelledby="villas-title">
      <div className="villas__head">
        <div>
          <p className="eyebrow" data-reveal>
            (02) Stay
          </p>
          <h2 className="serif villas__title" id="villas-title" data-lines>
            <span className="line">
              <span>Nine ways to stay,</span>
            </span>
            <span className="line">
              <span>
                <em>most with the sea in view.</em>
              </span>
            </span>
          </h2>
        </div>
        <div className="villas__controls" data-reveal>
          <button type="button" className="round" onClick={() => step(-1)} aria-label="Previous villa">
            ←
          </button>
          <button type="button" className="round round--dark" onClick={() => step(1)} aria-label="Next villa">
            →
          </button>
          <TransitionLink className="text-link villas__all" href="/villas">
            All villas
          </TransitionLink>
        </div>
      </div>

      <div className="villas__viewport" ref={viewport}>
        <div className="villas__track" ref={track} data-reveal-group>
          {villas.map((v, i) => (
            <article className={`villa villa--${SIZES[i % SIZES.length]}`} key={v.id}>
              <button
                type="button"
                className="villa__open"
                onClick={() => !dragged.current && setOpen(i)}
                // Keyboard focus brings the card into view; a click shouldn't slide the track.
                onFocus={(event) => event.currentTarget.matches(':focus-visible') && moveTo.current(i)}
                aria-haspopup="dialog"
              >
                <span className="villa__frame" data-reveal-img>
                  <span className="villa__photo">
                    <Image src={v.photos[0]} alt="" fill sizes="(max-width: 700px) 80vw, 50vw" draggable={false} />
                  </span>
                  <span className="villa__view" aria-hidden="true">
                    {v.photos.length} photos
                  </span>
                </span>
                <span className="villa__row">
                  <span className="subhead villa__name">{v.name}</span>
                  <span className="villa__meta">
                    {v.area} · Sleeps {v.sleeps}
                  </span>
                </span>
                <span className="villa__summary">{v.summary}</span>
              </button>
            </article>
          ))}
        </div>
      </div>

      <div className="villas__progress" aria-hidden="true">
        <span ref={count}>01 / {pad(villas.length)}</span>
        <span className="villas__line">
          <span ref={fill} />
        </span>
        <span>Drag to explore</span>
      </div>

      {open !== null && <VillaLightbox villa={villas[open]} onClosed={() => setOpen(null)} />}
    </section>
  );
}
