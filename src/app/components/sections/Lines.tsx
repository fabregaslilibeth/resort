import { Fragment } from 'react';

/**
 * A heading's lines, each in its own mask so it can rise into view
 * ([data-lines] on the heading). The last line is set in italics.
 */
export function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        // The space keeps the lines apart in the heading's text for screen readers.
        <Fragment key={line}>
          {i > 0 && ' '}
          <span className="line">
            <span>{i === lines.length - 1 && lines.length > 1 ? <em>{line}</em> : line}</span>
          </span>
        </Fragment>
      ))}
    </>
  );
}
