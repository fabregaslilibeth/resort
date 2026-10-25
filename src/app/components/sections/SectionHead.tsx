import { Lines } from './Lines';

interface SectionHeadProps {
  /** The title's id, for the section's aria-labelledby. */
  id: string;
  eyebrow: string;
  lines: string[];
  intro?: string;
}

/** A section's head: eyebrow and title on the left, a short intro on the right. */
export function SectionHead({ id, eyebrow, lines, intro }: SectionHeadProps) {
  return (
    <div className="shead">
      <p className="eyebrow" data-reveal>
        {eyebrow}
      </p>
      <h2 className="serif shead__title" id={id} data-lines>
        <Lines lines={lines} />
      </h2>
      {intro && (
        <p className="shead__intro" data-reveal>
          {intro}
        </p>
      )}
    </div>
  );
}

/** "Choose your month." → "choose-your-month-title", for a title's id. */
export const titleId = (lines: string[], id?: string) => `${id ?? lines[0].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-title`;
