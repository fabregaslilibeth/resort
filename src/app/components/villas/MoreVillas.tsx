import Image from 'next/image';
import { TransitionLink } from '../site/Curtain';
import type { VillaCard } from './villa-cards';

// Three other villas to carry on to, and the way back to all of them.
export function MoreVillas({ villas }: { villas: VillaCard[] }) {
  return (
    <section className="vmore" aria-labelledby="vmore-title">
      <div className="vmore__head">
        <h2 className="serif vmore__title" id="vmore-title" data-lines>
          <span className="line">
            <span>
              More ways <em>to stay.</em>
            </span>
          </span>
        </h2>
        <TransitionLink className="text-link" href="/villas" data-reveal>
          All villas
        </TransitionLink>
      </div>
      <ul className="vmore__grid" data-reveal-group>
        {villas.map((villa) => (
          <li key={villa.id}>
            <TransitionLink className="vmore__card" href={`/villas/${villa.id}`}>
              <span className="vmore__frame" data-reveal-img>
                <Image src={villa.photos[0]} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" />
              </span>
              <span className="vmore__row">
                <span className="subhead vmore__name">{villa.name}</span>
                <span className="vmore__meta">
                  {villa.area} · Sleeps {villa.sleeps}
                </span>
              </span>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
