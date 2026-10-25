import { Lines } from './Lines';

interface StatementProps {
  id?: string;
  eyebrow: string;
  lines: string[];
  text: string[];
  /** Extra content under the paragraphs: facts, a link. */
  children?: React.ReactNode;
}

/** A big heading on the left, the paragraphs that explain it on the right. */
export function Statement({ id, eyebrow, lines, text, children }: StatementProps) {
  const titleId = `${id ?? lines[0].toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`;
  return (
    <section className="statement" id={id} aria-labelledby={titleId}>
      <div className="statement__head">
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h2 className="serif statement__title" id={titleId} data-lines>
          <Lines lines={lines} />
        </h2>
      </div>
      <div className="statement__body">
        {text.map((line) => (
          <p key={line} data-reveal>
            {line}
          </p>
        ))}
        {children}
      </div>
    </section>
  );
}
