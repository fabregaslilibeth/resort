import { TransitionLink } from '../site/Curtain';
import { Lines } from './Lines';

export interface LedgerRow {
  title: string;
  /** A small tag beside the title, e.g. "Entry level". */
  badge?: string;
  text?: string;
  details?: string[];
  /** e.g. "3 hours". */
  meta?: string;
  /** e.g. "$105". */
  price?: string;
  /** Under the price, e.g. "per dive". */
  priceNote?: string;
  /** Turns the meta into a link, e.g. to a course's own page. */
  href?: string;
}

interface LedgerProps {
  id?: string;
  eyebrow: string;
  lines: string[];
  intro?: string;
  rows: LedgerRow[];
  /** Anything after the rows, e.g. a note. */
  children?: React.ReactNode;
}

/** A priced list, like a page of a course catalogue. */
export function Ledger({ id, eyebrow, lines, intro, rows, children }: LedgerProps) {
  const titleId = `${id ?? lines[0].toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`;
  return (
    <section className="ledger" id={id} aria-labelledby={titleId}>
      <div className="ledger__head">
        <div>
          <p className="eyebrow" data-reveal>
            {eyebrow}
          </p>
          <h2 className="serif ledger__title" id={titleId} data-lines>
            <Lines lines={lines} />
          </h2>
        </div>
        {intro && (
          <p className="ledger__intro" data-reveal>
            {intro}
          </p>
        )}
      </div>
      <ol className="ledger__rows">
        {rows.map((row) => (
          <li className="ledger__row" key={row.title} data-reveal>
            <div className="ledger__name">
              <h3 className="subhead ledger__heading">{row.title}</h3>
              {row.badge && <span className="ledger__badge">{row.badge}</span>}
            </div>
            <div className="ledger__about">
              {row.text && <p>{row.text}</p>}
              {row.details && row.details.length > 0 && (
                <ul>
                  {row.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
            <p className="ledger__meta">
              {row.href ? (
                <TransitionLink className="text-link" href={row.href}>
                  {row.meta}
                </TransitionLink>
              ) : (
                row.meta
              )}
            </p>
            {row.price && (
              <p className="ledger__price">
                <span className="serif">{row.price}</span>
                {row.priceNote && <span className="ledger__note">{row.priceNote}</span>}
              </p>
            )}
          </li>
        ))}
      </ol>
      {children}
    </section>
  );
}
