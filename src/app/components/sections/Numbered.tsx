import { SectionHead, titleId } from './SectionHead';

interface NumberedProps {
  id?: string;
  eyebrow: string;
  lines: string[];
  intro?: string;
  items: { title: string; text: string }[];
  /** Anything after the list, e.g. a link. */
  children?: React.ReactNode;
}

const pad = (n: number) => String(n).padStart(2, '0');

/** Numbered points, each a title and what it means. */
export function Numbered({ id, eyebrow, lines, intro, items, children }: NumberedProps) {
  const heading = titleId(lines, id);
  return (
    <section className="numbered" id={id} aria-labelledby={heading}>
      <SectionHead id={heading} eyebrow={eyebrow} lines={lines} intro={intro} />
      <ol className="numbered__list">
        {items.map((item, i) => (
          <li className="numbered__item" key={item.title} data-reveal>
            <span className="numbered__num">{pad(i + 1)}</span>
            <h3 className="subhead numbered__title">{item.title}</h3>
            <p className="numbered__text">{item.text}</p>
          </li>
        ))}
      </ol>
      {children}
    </section>
  );
}
