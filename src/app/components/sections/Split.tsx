import Image from 'next/image';
import { Lines } from './Lines';

interface SplitProps {
  id?: string;
  image: string;
  alt: string;
  /** Photo on the right instead of the left. */
  flip?: boolean;
  eyebrow?: string;
  lines: string[];
  text?: string[];
  items?: string[];
  /** Actions under the text. */
  children?: React.ReactNode;
}

/** A photo drifting in its frame beside a heading, text and a list. */
export function Split({ id, image, alt, flip = false, eyebrow, lines, text = [], items = [], children }: SplitProps) {
  return (
    <section className={`split${flip ? ' split--flip' : ''}`} id={id}>
      <div className="split__media" data-reveal-img>
        <div className="split__drift" data-speed="-0.1">
          <Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </div>
      <div className="split__body">
        {eyebrow && (
          <p className="eyebrow" data-reveal>
            {eyebrow}
          </p>
        )}
        <h2 className="serif split__title" data-lines>
          <Lines lines={lines} />
        </h2>
        {text.map((line) => (
          <p className="split__text" key={line} data-reveal>
            {line}
          </p>
        ))}
        {items.length > 0 && (
          <ul className="split__list" data-reveal>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {children && (
          <div className="split__actions" data-reveal>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
