import Image from 'next/image';
import { TransitionLink } from '../site/Curtain';
import { Lines } from './Lines';

export interface LinkCard {
  href: string;
  image: string;
  title: string;
  /** A short line under the title, e.g. "From Bubblemaker to Divemaster". */
  text?: string;
}

interface LinkCardsProps {
  eyebrow: string;
  lines: string[];
  cards: LinkCard[];
}

/** Photo cards that lead to other pages. */
export function LinkCards({ eyebrow, lines, cards }: LinkCardsProps) {
  const titleId = `${lines[0].toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`;
  return (
    <section className="cards" aria-labelledby={titleId}>
      <div className="cards__head">
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h2 className="serif cards__title" id={titleId} data-lines>
          <Lines lines={lines} />
        </h2>
      </div>
      <ul className={`cards__grid cards__grid--${Math.min(cards.length, 4)}`} data-reveal-group>
        {cards.map((card) => (
          <li key={card.href}>
            <TransitionLink className="cards__card" href={card.href}>
              <span className="cards__frame" data-reveal-img>
                <Image src={card.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" />
              </span>
              <span className="subhead cards__name">
                {card.title} <span aria-hidden="true">→</span>
              </span>
              {card.text && <span className="cards__text">{card.text}</span>}
            </TransitionLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
