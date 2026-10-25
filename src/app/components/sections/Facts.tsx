interface Fact {
  /** The big figure or phrase, e.g. "24 hours". */
  value: string;
  label: string;
}

/** A row of figures between hairlines. */
export function Facts({ facts, label }: { facts: Fact[]; label: string }) {
  return (
    <section className="facts" aria-label={label}>
      <dl className="facts__list" data-reveal-group>
        {facts.map((fact) => (
          <div className="facts__item" key={fact.label} data-reveal>
            <dt className="facts__label">{fact.label}</dt>
            <dd className="serif facts__value">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
