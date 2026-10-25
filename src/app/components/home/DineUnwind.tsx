import Image from 'next/image';
import { TransitionLink } from '../site/Curtain';

// Two offset columns; the photos drift at different speeds as you scroll
// (data-speed, see scenes.ts).
export function DineUnwind() {
  return (
    <section className="dine" id="dine" aria-label="Dine and unwind">
      <article className="dine__col">
        <div className="dine__frame dine__frame--tall" data-reveal-img>
          <div className="dine__photo" data-speed="-0.12">
            <Image src="/images/home/feast.jpg" alt="A seafood boodle feast laid out on banana leaves" fill sizes="(max-width: 800px) 100vw, 55vw" data-reveal-zoom />
          </div>
        </div>
        <p className="eyebrow" data-reveal>
          (04) Dine
        </p>
        <h2 className="serif dine__title" data-lines>
          <span className="line">
            <span>Fresh off the boat,</span>
          </span>
          <span className="line">
            <span>
              <em>served any hour.</em>
            </span>
          </span>
        </h2>
        <p className="dine__copy" data-reveal>
          Asian and Western cooking built on local produce and the freshest seafood. The restaurant, poolside bar and room service all run 24 hours.
        </p>
        <TransitionLink className="text-link" href="/dining/menu" data-reveal>
          See the menu
        </TransitionLink>
      </article>

      <article className="dine__col dine__col--low">
        <div className="dine__frame" data-reveal-img>
          <div className="dine__photo" data-speed="0.1">
            <Image src="/images/home/pool-villas.jpg" alt="The pool and a sun lounger beneath the villas" fill sizes="(max-width: 800px) 100vw, 45vw" data-reveal-zoom />
          </div>
        </div>
        <p className="eyebrow" data-reveal>
          (05) Unwind
        </p>
        <h2 className="serif dine__title" data-lines>
          <span className="line">
            <span>Pool, spa,</span>
          </span>
          <span className="line">
            <span>
              <em>nowhere to be.</em>
            </span>
          </span>
        </h2>
        <p className="dine__copy" data-reveal>
          WellZen Spa: reflexology, warm bamboo and aroma stone massage, or a treatment in your room.
        </p>
        <TransitionLink className="text-link" href="/spa" data-reveal>
          Visit the spa
        </TransitionLink>
      </article>
    </section>
  );
}
