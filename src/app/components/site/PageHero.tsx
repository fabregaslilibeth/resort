import Image from 'next/image';
import { Fragment } from 'react';

interface PageHeroProps {
  eyebrow: string;
  /** The title's lines; the last is set in italics. */
  lines: string[];
  lead: string;
  image: string;
  alt: string;
  /**
   * Moving water over the photo (PageMotion runs the ripples). The photo
   * must be one of the site's own files, e.g. "/images/home/reef.jpg".
   */
  water?: boolean;
}

// The hero for redesigned pages other than the homepage: a full-bleed photo
// under the transparent header, the title rising line by line (PageMotion).
export function PageHero({ eyebrow, lines, lead, image, alt, water = false }: PageHeroProps) {
  return (
    <section className="page-hero" data-hero aria-labelledby="page-title">
      <div className="page-hero__media" data-hero-media>
        <div className="page-hero__zoom" data-hero-zoom>
          <Image src={image} alt={alt} fill priority sizes="100vw" />
          {water && <canvas className="page-hero__water" data-hero-water={image} aria-hidden="true" />}
        </div>
        <div className="page-hero__shade" />
      </div>
      <div className="page-hero__content">
        <p className="eyebrow page-hero__eyebrow" data-hero-fade>
          {eyebrow}
        </p>
        <h1 className="serif page-hero__title" id="page-title" data-hero-title>
          {lines.map((line, i) => (
            // The space keeps the lines apart in the title's text for screen readers.
            <Fragment key={line}>
              {i > 0 && ' '}
              <span className="line">
                <span>{i === lines.length - 1 ? <em>{line}</em> : line}</span>
              </span>
            </Fragment>
          ))}
        </h1>
        <p className="page-hero__lead" data-hero-fade>
          {lead}
        </p>
      </div>
    </section>
  );
}
