import { divemasterPackages, divemasterPhases } from '@/data/divemaster';
import { SectionHead } from '../sections/SectionHead';

const BASE = new Set(divemasterPackages[0].inclusions);

/** Bronze, Silver and Gold side by side; what a package adds over Bronze is marked. */
export function DivemasterPackages() {
  return (
    <section className="packages" aria-labelledby="packages-title">
      <SectionHead
        id="packages-title"
        eyebrow="Training packages"
        lines={['Choose', 'your month.']}
        intro="Each package is designed to make sure you get the most out of your time in Puerto Galera, and leave as a confident, competent dive professional any team would value."
      />
      <ol className="packages__list" data-reveal-group>
        {divemasterPackages.map((pkg) => (
          <li className="package" key={pkg.name} data-reveal>
            <p className="eyebrow">PADI Divemaster</p>
            <h3 className="serif package__name">{pkg.name}</h3>
            <p className="package__price">
              <span className="serif">{pkg.price}</span> USD
            </p>
            <ul className="package__list">
              {pkg.inclusions.map((item) => (
                <li className={BASE.has(item) ? undefined : 'is-extra'} key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="package__extra">Not included: {pkg.exclusions.join('; ')}</p>
            <a className="pill pill--dark package__cta" href="#enquire">
              Enquire about {pkg.name}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** The three phases of the program, in order. */
export function DivemasterPhases() {
  return (
    <section className="phases" aria-labelledby="phases-title">
      <SectionHead id="phases-title" eyebrow="Program structure" lines={['Three phases,', 'one professional.']} />
      <ol className="phases__list" data-reveal-group>
        {divemasterPhases.map((phase, i) => (
          <li className="phase" key={phase.phase} data-reveal>
            <p className="phase__top">
              <span>Phase {i + 1}</span>
              <span>{phase.duration}</span>
            </p>
            <h3 className="subhead phase__title">{phase.phase}</h3>
            <ul className="phase__list">
              {phase.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
