import { TransitionLink } from '../site/Curtain';
import { Lines } from '../sections/Lines';
import { menuGroups } from './menu-data';

/** Every menu category in three columns (food, drinks, wine), each linking to its own page. */
export function MenuIndex() {
  return (
    <section className="fare" aria-labelledby="fare-title">
      <div className="fare__head">
        <div>
          <p className="eyebrow" data-reveal>
            The menu
          </p>
          <h2 className="serif fare__title" id="fare-title" data-lines>
            <Lines lines={['Breakfast to', 'the owners’ cellar.']} />
          </h2>
        </div>
        <TransitionLink className="text-link" href="/dining/menu" data-reveal>
          The full menu
        </TransitionLink>
      </div>
      <div className="fare__groups" data-reveal-group>
        {menuGroups.map((group) => (
          <div className="fare__group" key={group.id} data-reveal>
            <h3 className="eyebrow fare__label">{group.label}</h3>
            <ul className="fare__links">
              {group.categories.map((category) => (
                <li key={category.slug}>
                  <TransitionLink className="fare__link" href={`/dining/menu/${category.slug}`}>
                    <span className="subhead fare__name">{category.title}</span>
                    <span className="fare__count">{category.items.length}</span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
