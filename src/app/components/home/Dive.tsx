import Image from 'next/image';
import { TransitionLink } from '../site/Curtain';

// Depths from src/data/diveSites.ts.
const SITES = [
  { name: 'Sabang Wrecks', depth: '15–25 m' },
  { name: 'Kilima Steps', depth: '10–25 m' },
  { name: 'Hole in the Wall', depth: '15–30 m' },
  { name: 'Canyons', depth: '18–35 m' },
  { name: 'Verde Island Drop-off', depth: '15–40 m' },
];

// The divers under moving water (ripples.ts draws over the photo once WebGL
// is up; the plain photo is what shows without it).
export function Dive() {
  return (
    <section className="dive" id="dive" data-dive aria-labelledby="dive-title">
      <div className="dive__media">
        <Image src="/images/home/divers.jpg" alt="A diver beside a school of batfish" fill sizes="100vw" />
        <canvas className="dive__water" data-dive-water aria-hidden="true" />
        <div className="dive__shade" />
      </div>
      <div className="dive__grid">
        <div className="dive__main">
          <div>
            <p className="eyebrow dive__eyebrow" data-reveal>
              (03) LLV Divers
            </p>
            <h2 className="serif dive__title" id="dive-title" data-lines>
              <span className="line">
                <span>Five minutes</span>
              </span>
              <span className="line">
                <span>
                  <em>to the reef.</em>
                </span>
              </span>
            </h2>
            <p className="dive__copy" data-reveal>
              Our PADI 5 Star dive centre is on the beach. Most of Puerto Galera’s best sites are about five minutes away by speedboat, and no
              divemaster leads more than five divers.
            </p>
          </div>
          <div className="dive__actions" data-reveal>
            <TransitionLink className="pill pill--orange" href="/dive/diving-courses">
              Dive courses
            </TransitionLink>
            <TransitionLink className="pill pill--orange-line" href="/dive/padi-divemaster-internship">
              Go professional
            </TransitionLink>
          </div>
        </div>
        <div className="dive__sites">
          <p className="eyebrow dive__eyebrow" data-reveal>
            Nearby sites · depth
          </p>
          <ul className="dive__list">
            {SITES.map((site) => (
              <li key={site.name} data-reveal>
                <span className="subhead dive__name">{site.name}</span>
                <span>{site.depth}</span>
              </li>
            ))}
          </ul>
          <TransitionLink className="text-link" href="/dive/dive-sites" data-reveal>
            All dive sites
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
