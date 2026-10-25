import { diveSitesData } from '@/data/diveSites';
import { TransitionLink } from '../site/Curtain';
import { Lines } from '../sections/Lines';
import { depthScale, type DiveSite } from './dive-data';
import { DepthTicks, DepthTrack, stepStyle } from './DepthScale';

const ALL: DiveSite[] = diveSitesData;

/** Named dive sites with their depth ranges drawn to scale. */
export function DepthChart({ names, eyebrow, lines }: { names: string[]; eyebrow: string; lines: string[] }) {
  const sites = names.flatMap((name) => ALL.filter((site) => site.name === name));
  const scale = depthScale(sites);

  return (
    <section className="depths" aria-labelledby="depths-title">
      <div className="depths__head">
        <p className="eyebrow depths__eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h2 className="serif depths__title" id="depths-title" data-lines>
          <Lines lines={lines} />
        </h2>
      </div>
      <div className="depths__chart" role="table" aria-label="Depth range of each site, in metres" style={stepStyle(scale)}>
        <div className="depths__scale" role="row" aria-hidden="true">
          <span role="columnheader">Site</span>
          <DepthTicks scale={scale} />
        </div>
        {sites.map((site) => (
          <div className="depths__row" role="row" key={site.id} data-reveal>
            <span className="subhead depths__name" role="rowheader">
              {site.name}
              <small>{site.location}</small>
            </span>
            <DepthTrack depth={site.depth} scale={scale} role="cell" />
          </div>
        ))}
      </div>
      <TransitionLink className="text-link depths__all" href="/dive/dive-sites" data-reveal>
        All {diveSitesData.length} dive sites
      </TransitionLink>
    </section>
  );
}
