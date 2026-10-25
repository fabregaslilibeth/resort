import { SectionHead, titleId } from './SectionHead';

interface ListColumnsProps {
  id?: string;
  eyebrow: string;
  lines: string[];
  intro?: string;
  columns: { title: string; items: string[] }[];
}

/** Short lists side by side under one heading, e.g. services, in-villa comforts and things to do. */
export function ListColumns({ id, eyebrow, lines, intro, columns }: ListColumnsProps) {
  const heading = titleId(lines, id);
  return (
    <section className="columns" id={id} aria-labelledby={heading}>
      <SectionHead id={heading} eyebrow={eyebrow} lines={lines} intro={intro} />
      <div className="columns__grid" data-reveal-group>
        {columns.map((column) => (
          <div className="columns__column" key={column.title} data-reveal>
            <h3 className="eyebrow columns__label">{column.title}</h3>
            <ul className="columns__list">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
